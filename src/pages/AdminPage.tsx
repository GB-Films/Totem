import {
  CheckCircle2,
  ImagePlus,
  Lock,
  LogOut,
  Plus,
  Save,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  type User,
} from "firebase/auth";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { useCatalog } from "../context/CatalogContext";
import { categories as fallbackCategories, products as fallbackProducts } from "../data/products";
import {
  firebaseEnabled,
  getFirebaseApp,
  getFirebaseDb,
} from "../services/firebase";
import type { Availability, Product, ProductStatus, ProductVisual } from "../types";

type ProductForm = {
  id: string;
  name: string;
  category: Product["category"];
  tags: string;
  rentalPricePerDay: string;
  rentalPricePerWeek: string;
  description: string;
  curiosities: string;
  status: ProductStatus;
  measurements: string;
  material: string;
  color: string;
  eraStyle: string;
  availability: Availability;
  estimatedValue: string;
  guaranteePercentage: string;
  minimumDeposit: string;
  featuredScore: string;
  internalNotes: string;
  images: string[];
  visualTone: ProductVisual["tone"];
  visualSigil: string;
};

const statusOptions: ProductStatus[] = ["Excelente", "Muy bueno", "Bueno", "Delicado"];
const availabilityOptions: Availability[] = ["Disponible", "Consultar", "Reservado"];
const toneOptions: ProductVisual["tone"][] = ["brass", "green", "red", "blue", "paper", "copper"];

const emptyForm: ProductForm = {
  id: "",
  name: "",
  category: "Utilería",
  tags: "",
  rentalPricePerDay: "",
  rentalPricePerWeek: "",
  description: "",
  curiosities: "",
  status: "Excelente",
  measurements: "",
  material: "",
  color: "",
  eraStyle: "",
  availability: "Disponible",
  estimatedValue: "",
  guaranteePercentage: "0.3",
  minimumDeposit: "",
  featuredScore: "50",
  internalNotes: "",
  images: [],
  visualTone: "paper",
  visualSigil: "✶",
};

function toForm(product: Product): ProductForm {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    tags: product.tags.join(", "),
    rentalPricePerDay: String(product.rentalPricePerDay),
    rentalPricePerWeek: product.rentalPricePerWeek ? String(product.rentalPricePerWeek) : "",
    description: product.description,
    curiosities: product.curiosities,
    status: product.status,
    measurements: product.measurements,
    material: product.material,
    color: product.color,
    eraStyle: product.eraStyle,
    availability: product.availability,
    estimatedValue: String(product.estimatedValue),
    guaranteePercentage: String(product.guaranteePercentage),
    minimumDeposit: String(product.minimumDeposit),
    featuredScore: String(product.featuredScore),
    internalNotes: product.internalNotes ?? "",
    images: product.images,
    visualTone: product.visual.tone,
    visualSigil: product.visual.sigil,
  };
}

function toNumber(value: string, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function toProduct(form: ProductForm): Product {
  const weeklyPrice = form.rentalPricePerWeek.trim();
  return {
    id: form.id.trim(),
    name: form.name.trim(),
    category: form.category,
    tags: form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    rentalPricePerDay: toNumber(form.rentalPricePerDay),
    rentalPricePerWeek: weeklyPrice ? toNumber(weeklyPrice) : undefined,
    description: form.description.trim(),
    curiosities: form.curiosities.trim(),
    status: form.status,
    measurements: form.measurements.trim(),
    material: form.material.trim(),
    color: form.color.trim(),
    eraStyle: form.eraStyle.trim(),
    availability: form.availability,
    estimatedValue: toNumber(form.estimatedValue),
    guaranteePercentage: toNumber(form.guaranteePercentage, 0.3),
    minimumDeposit: toNumber(form.minimumDeposit),
    featuredScore: toNumber(form.featuredScore, 50),
    internalNotes: form.internalNotes.trim() || undefined,
    images: form.images.filter(Boolean),
    visual: {
      tone: form.visualTone,
      sigil: form.visualSigil.trim() || "✶",
    },
  };
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function fileSafeName(name: string) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "-");
}

export function AdminPage() {
  const app = getFirebaseApp();
  const auth = app ? getAuth(app) : null;
  const db = getFirebaseDb();
  const storage = app ? getStorage(app) : null;
  const { products, syncMode } = useCatalog();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => a.name.localeCompare(b.name)),
    [products],
  );

  useEffect(() => {
    if (!auth || !db) {
      setCheckingAdmin(false);
      return;
    }

    return onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser);
      setIsAdmin(false);
      setCheckingAdmin(Boolean(nextUser));

      if (!nextUser) {
        setCheckingAdmin(false);
        return;
      }

      const adminEmail = nextUser.email ?? "";
      const adminDoc = adminEmail ? await getDoc(doc(db, "adminEmails", adminEmail)) : null;
      setIsAdmin(Boolean(adminDoc?.exists() && adminDoc.data().active === true));
      setCheckingAdmin(false);
    });
  }, [auth, db]);

  const updateField = <K extends keyof ProductForm>(field: K, value: ProductForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!auth) return;
    setMessage("");
    await signInWithRedirect(auth, new GoogleAuthProvider());
  };

  const newProduct = () => {
    setForm({ ...emptyForm, id: `EG-${String(products.length + 1).padStart(3, "0")}` });
    setMessage("");
  };

  const saveProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!db || !isAdmin) return;

    const product = toProduct(form);
    if (!product.id || !product.name) {
      setMessage("Completá ID y nombre antes de guardar.");
      return;
    }

    setSaving(true);
    await setDoc(doc(db, "products", product.id), product);
    setSaving(false);
    setMessage(`Producto guardado: ${product.name}`);
  };

  const removeProduct = async () => {
    if (!db || !isAdmin || !form.id || !window.confirm(`¿Eliminar ${form.name || form.id}?`)) {
      return;
    }

    setSaving(true);
    await deleteDoc(doc(db, "products", form.id));
    setSaving(false);
    setForm(emptyForm);
    setMessage("Producto eliminado.");
  };

  const addImageUrl = () => {
    const url = imageUrl.trim();
    if (!/^https?:\/\//.test(url)) {
      setMessage("Pegá una URL pública de imagen que empiece con http o https.");
      return;
    }

    updateField("images", [url, ...form.images]);
    setImageUrl("");
    setMessage("Imagen agregada. Guardá el producto para conservarla en el catálogo.");
  };

  const uploadImage = async (file: File | undefined) => {
    if (!file || !storage || !form.id) {
      setMessage("Completá el ID antes de subir imágenes.");
      return;
    }

    setUploading(true);
    const imageRef = ref(storage, `products/${form.id}/${Date.now()}-${fileSafeName(file.name)}`);
    await uploadBytes(imageRef, file, { contentType: file.type });
    const url = await getDownloadURL(imageRef);
    updateField("images", [url, ...form.images]);
    setUploading(false);
    setMessage("Imagen subida. Guardá el producto para conservarla en el catálogo.");
  };

  const seedCatalog = async () => {
    if (!db || !isAdmin || !window.confirm("¿Cargar el catálogo local actual en Firestore?")) {
      return;
    }

    setSaving(true);
    await Promise.all(fallbackProducts.map((product) => setDoc(doc(db, "products", product.id), product)));
    setSaving(false);
    setMessage("Catálogo local cargado en Firestore.");
  };

  if (!firebaseEnabled || !auth || !db) {
    return (
      <section className="admin-page">
        <div className="admin-card">
          <p className="eyebrow">Admin</p>
          <h1>Firebase no está configurado</h1>
          <p>Cargá las variables de Firebase para habilitar el panel.</p>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="admin-page">
        <form onSubmit={login} className="admin-card admin-login">
          <span className="admin-lock"><Lock size={22} /></span>
          <p className="eyebrow">Admin</p>
          <h1>Ingresar al catálogo</h1>
          <p>Usá la cuenta de Google autorizada para editar productos y administrar el catálogo.</p>
          <button type="submit" className="gabinete-button">
            <Lock size={17} />
            Entrar con Google
          </button>
        </form>
      </section>
    );
  }

  if (checkingAdmin) {
    return <section className="admin-page"><div className="admin-card">Verificando permisos...</div></section>;
  }

  if (!isAdmin) {
    return (
      <section className="admin-page">
        <div className="admin-card">
          <p className="eyebrow">Sin permiso</p>
          <h1>Tu usuario no es administrador</h1>
          <p>Pedí que agreguen este email en Firestore: <strong>{user.email}</strong></p>
          <button type="button" className="gabinete-button-secondary" onClick={() => auth && signOut(auth)}>
            <LogOut size={17} />
            Salir
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <div className="admin-head">
        <div>
          <p className="eyebrow">Admin</p>
          <h1>Catálogo</h1>
          <p>Fuente actual: {syncMode === "firebase" ? "Firestore" : "catálogo local de respaldo"}</p>
        </div>
        <div className="admin-actions">
          <button type="button" className="gabinete-button-secondary" onClick={seedCatalog} disabled={saving}>
            <UploadCloud size={17} />
            Subir catálogo local
          </button>
          <button type="button" className="gabinete-button-secondary" onClick={() => auth && signOut(auth)}>
            <LogOut size={17} />
            Salir
          </button>
        </div>
      </div>

      {message && (
        <p className="admin-message">
          <CheckCircle2 size={16} />
          {message}
        </p>
      )}

      <div className="admin-layout">
        <aside className="admin-list">
          <button type="button" className="admin-new-button" onClick={newProduct}>
            <Plus size={16} />
            Nuevo producto
          </button>
          {sortedProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              className={form.id === product.id ? "is-active" : ""}
              onClick={() => setForm(toForm(product))}
            >
              <strong>{product.name}</strong>
              <span>{product.id} · {product.category}</span>
            </button>
          ))}
        </aside>

        <form onSubmit={saveProduct} className="admin-editor">
          <div className="admin-editor-title">
            <div>
              <p className="eyebrow">Ficha editable</p>
              <h2>{form.name || "Producto nuevo"}</h2>
            </div>
            <div className="admin-actions">
              <button type="button" className="gabinete-button-secondary" onClick={removeProduct} disabled={!form.id || saving}>
                <Trash2 size={17} />
                Eliminar
              </button>
              <button type="submit" className="gabinete-button" disabled={saving}>
                <Save size={17} />
                {saving ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>

          <div className="admin-grid">
            <label>ID<input className="gabinete-input" value={form.id} onChange={(event) => updateField("id", slugify(event.target.value).toUpperCase())} /></label>
            <label>Nombre<input className="gabinete-input" value={form.name} onChange={(event) => updateField("name", event.target.value)} /></label>
            <label>Categoría<select className="gabinete-input" value={form.category} onChange={(event) => updateField("category", event.target.value as Product["category"])}>{fallbackCategories.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label>Estado<select className="gabinete-input" value={form.status} onChange={(event) => updateField("status", event.target.value as ProductStatus)}>{statusOptions.map((status) => <option key={status}>{status}</option>)}</select></label>
            <label>Disponibilidad<select className="gabinete-input" value={form.availability} onChange={(event) => updateField("availability", event.target.value as Availability)}>{availabilityOptions.map((availability) => <option key={availability}>{availability}</option>)}</select></label>
            <label>Precio diario<input className="gabinete-input" type="number" value={form.rentalPricePerDay} onChange={(event) => updateField("rentalPricePerDay", event.target.value)} /></label>
            <label>Precio semanal<input className="gabinete-input" type="number" value={form.rentalPricePerWeek} onChange={(event) => updateField("rentalPricePerWeek", event.target.value)} /></label>
            <label>Valor estimado<input className="gabinete-input" type="number" value={form.estimatedValue} onChange={(event) => updateField("estimatedValue", event.target.value)} /></label>
            <label>Garantía %<input className="gabinete-input" type="number" step="0.01" value={form.guaranteePercentage} onChange={(event) => updateField("guaranteePercentage", event.target.value)} /></label>
            <label>Depósito mínimo<input className="gabinete-input" type="number" value={form.minimumDeposit} onChange={(event) => updateField("minimumDeposit", event.target.value)} /></label>
            <label>Destacado<input className="gabinete-input" type="number" value={form.featuredScore} onChange={(event) => updateField("featuredScore", event.target.value)} /></label>
            <label>Tags<input className="gabinete-input" value={form.tags} onChange={(event) => updateField("tags", event.target.value)} placeholder="vintage, cine, oficina" /></label>
            <label>Medidas<input className="gabinete-input" value={form.measurements} onChange={(event) => updateField("measurements", event.target.value)} /></label>
            <label>Material<input className="gabinete-input" value={form.material} onChange={(event) => updateField("material", event.target.value)} /></label>
            <label>Color<input className="gabinete-input" value={form.color} onChange={(event) => updateField("color", event.target.value)} /></label>
            <label>Época / estilo<input className="gabinete-input" value={form.eraStyle} onChange={(event) => updateField("eraStyle", event.target.value)} /></label>
            <label>Tono visual<select className="gabinete-input" value={form.visualTone} onChange={(event) => updateField("visualTone", event.target.value as ProductVisual["tone"])}>{toneOptions.map((tone) => <option key={tone}>{tone}</option>)}</select></label>
            <label>Símbolo<input className="gabinete-input" value={form.visualSigil} onChange={(event) => updateField("visualSigil", event.target.value)} /></label>
          </div>

          <label className="admin-wide">Descripción<textarea className="gabinete-input" rows={4} value={form.description} onChange={(event) => updateField("description", event.target.value)} /></label>
          <label className="admin-wide">Curiosidades<textarea className="gabinete-input" rows={3} value={form.curiosities} onChange={(event) => updateField("curiosities", event.target.value)} /></label>
          <label className="admin-wide">Notas internas<textarea className="gabinete-input" rows={3} value={form.internalNotes} onChange={(event) => updateField("internalNotes", event.target.value)} /></label>

          <div className="admin-images">
            <label className="admin-upload">
              <ImagePlus size={18} />
              {uploading ? "Subiendo..." : "Subir archivo"}
              <input type="file" accept="image/*" onChange={(event) => uploadImage(event.target.files?.[0])} />
            </label>
            <div className="admin-image-url">
              <label>
                URL pública de imagen
                <input
                  className="gabinete-input"
                  value={imageUrl}
                  onChange={(event) => setImageUrl(event.target.value)}
                  placeholder="https://..."
                />
              </label>
              <button type="button" className="admin-upload" onClick={addImageUrl}>
                <ImagePlus size={18} />
                Agregar imagen
              </button>
            </div>
            <div className="admin-image-grid">
              {form.images.map((image) => (
                <figure key={image}>
                  <img src={image} alt="" />
                  <button
                    type="button"
                    onClick={() => updateField("images", form.images.filter((candidate) => candidate !== image))}
                  >
                    Quitar
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
