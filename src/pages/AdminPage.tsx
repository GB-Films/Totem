import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Lock,
  LogOut,
  Plus,
  Save,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { collection, deleteDoc, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { useAuth } from "../context/AuthContext";
import { useAvailability } from "../context/AvailabilityContext";
import { useCatalog } from "../context/CatalogContext";
import { categories as fallbackCategories, products as fallbackProducts } from "../data/products";
import {
  firebaseEnabled,
  getFirebaseApp,
  getFirebaseDb,
  publicFirebaseConfig,
} from "../services/firebase";
import type { Availability, Product, ProductStatus, ProductVisual, ReservationRange, UserProfile } from "../types";
import { getInclusiveDays, parseIsoDate, rangesOverlap, todayIso, toIsoDate } from "../utils/dates";

function isUsableImageUrl(image: string) {
  return /^https?:\/\//.test(image) || /^data:image\//.test(image);
}

function AdminImagePreview({
  image,
  onRemove,
}: {
  image: string;
  onRemove: () => void;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure>
      {failed ? (
        <div className="admin-image-fallback">Imagen no disponible</div>
      ) : (
        <img src={image} alt="" onError={() => setFailed(true)} />
      )}
      <button type="button" onClick={onRemove}>
        Quitar
      </button>
    </figure>
  );
}

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
    images: product.images.filter(isUsableImageUrl),
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
  const internalNotes = form.internalNotes.trim();
  const product: Product = {
    id: form.id.trim(),
    name: form.name.trim(),
    category: form.category,
    tags: form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    rentalPricePerDay: toNumber(form.rentalPricePerDay),
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
    images: form.images.filter(isUsableImageUrl),
    visual: {
      tone: form.visualTone,
      sigil: form.visualSigil.trim() || "✶",
    },
  };

  if (weeklyPrice) {
    product.rentalPricePerWeek = toNumber(weeklyPrice);
  }

  if (internalNotes) {
    product.internalNotes = internalNotes;
  }

  return product;
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

const adminWeekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function monthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function buildMonthDays(month: Date) {
  const first = monthStart(month);
  const startOffset = (first.getDay() + 6) % 7;
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - startOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return {
      iso: toIsoDate(date),
      inMonth: date.getMonth() === first.getMonth(),
    };
  });
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function ReservationAdminRow({
  reservation,
  productName,
  profile,
  onMessage,
}: {
  reservation: ReservationRange;
  productName: string;
  profile?: UserProfile;
  onMessage: (message: string) => void;
}) {
  const db = getFirebaseDb();
  const [startDate, setStartDate] = useState(reservation.startDate);
  const [endDate, setEndDate] = useState(reservation.endDate);
  const [quantity, setQuantity] = useState(String(reservation.quantity ?? 1));
  const [note, setNote] = useState(reservation.note ?? "");
  const [saving, setSaving] = useState(false);

  const saveReservation = async () => {
    if (!db || reservation.source !== "firebase") {
      onMessage("Esta reserva no se puede editar desde el panel porque no viene de Firestore.");
      return;
    }

    if (!startDate || !endDate || endDate < startDate) {
      onMessage("Revisá las fechas de la reserva antes de guardar.");
      return;
    }

    try {
      setSaving(true);
      await updateDoc(doc(db, "reservations", reservation.id), {
        startDate,
        endDate,
        quantity: Math.max(1, Number(quantity) || 1),
        rentalDays: getInclusiveDays(startDate, endDate),
        note: note.trim(),
      });
      onMessage(`Reserva actualizada: ${productName}`);
    } catch (error) {
      console.error(error);
      const firebaseError = error as { code?: string; message?: string };
      onMessage(
        `No se pudo actualizar la reserva (${firebaseError.code ?? "error desconocido"}). ${
          firebaseError.message ?? "Revisá tus permisos de admin."
        }`,
      );
    } finally {
      setSaving(false);
    }
  };

  const removeReservation = async () => {
    if (!db || reservation.source !== "firebase") {
      onMessage("Esta reserva no se puede borrar desde el panel porque no viene de Firestore.");
      return;
    }

    if (!window.confirm(`¿Borrar la reserva de ${productName}?`)) {
      return;
    }

    try {
      setSaving(true);
      await deleteDoc(doc(db, "reservations", reservation.id));
      onMessage(`Reserva borrada: ${productName}`);
    } catch (error) {
      console.error(error);
      const firebaseError = error as { code?: string; message?: string };
      onMessage(
        `No se pudo borrar la reserva (${firebaseError.code ?? "error desconocido"}). ${
          firebaseError.message ?? "Revisá tus permisos de admin."
        }`,
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <article className="admin-reservation-row">
      <div>
        <strong>{productName}</strong>
        <span>{profile ? `${profile.firstName} ${profile.lastName}` : reservation.customerName || reservation.customerEmail || "Cliente sin datos visibles"}</span>
        {profile && <span>DNI: {profile.dni}</span>}
        {profile && <span>Celular: {profile.phone}</span>}
        {profile?.email && <span>{profile.email}</span>}
      </div>
      <div className="admin-reservation-fields">
        <label>
          Desde
          <input className="gabinete-input" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
        </label>
        <label>
          Hasta
          <input className="gabinete-input" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
        </label>
        <label>
          Cant.
          <input className="gabinete-input" type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
      </div>
      <label className="admin-reservation-note">
        Nota
        <input className="gabinete-input" value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
      <div className="admin-reservation-actions">
        <button type="button" className="gabinete-button-secondary" onClick={removeReservation} disabled={saving}>
          <Trash2 size={16} />
          Borrar
        </button>
        <button type="button" className="gabinete-button" onClick={saveReservation} disabled={saving}>
          <Save size={16} />
          {saving ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </article>
  );
}

function AdminReservationsCalendar({ products }: { products: Product[] }) {
  const { reservations, syncMode } = useAvailability();
  const [message, setMessage] = useState("");
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [visibleMonth, setVisibleMonth] = useState(() => monthStart(parseIsoDate(todayIso())));
  const days = useMemo(() => buildMonthDays(visibleMonth), [visibleMonth]);
  const productsById = useMemo(() => new Map(products.map((product) => [product.id, product])), [products]);
  const profilesByUid = useMemo(() => new Map(profiles.map((profile) => [profile.uid, profile])), [profiles]);
  const monthStartIso = toIsoDate(monthStart(visibleMonth));
  const monthEndIso = toIsoDate(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0));
  const monthReservations = useMemo(
    () =>
      reservations
        .filter((reservation) => rangesOverlap(monthStartIso, monthEndIso, reservation.startDate, reservation.endDate))
        .sort((a, b) => a.startDate.localeCompare(b.startDate) || a.productId.localeCompare(b.productId)),
    [monthEndIso, monthStartIso, reservations],
  );

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db) {
      return;
    }

    return onSnapshot(collection(db, "userProfiles"), (snapshot) => {
      setProfiles(snapshot.docs.map((profileDoc) => profileDoc.data() as UserProfile));
    });
  }, []);

  return (
    <section className="admin-reservations parchment-panel">
      <div className="admin-reservations-head">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <CalendarDays size={15} />
            Calendario admin
          </p>
          <h2>Pedidos y alquileres por fecha</h2>
          <p>
            Fuente de reservas: {syncMode === "firebase" ? "Firestore" : "local"}. Cada marca bloquea el objeto para futuros clientes.
          </p>
        </div>
        <div className="calendar-month-bar admin-calendar-nav">
          <button type="button" onClick={() => setVisibleMonth((current) => addMonths(current, -1))}>
            <ChevronLeft size={18} />
          </button>
          <strong>{formatMonth(visibleMonth)}</strong>
          <button type="button" onClick={() => setVisibleMonth((current) => addMonths(current, 1))}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="admin-calendar-grid">
        {adminWeekdays.map((day) => (
          <span key={day} className="calendar-weekday">
            {day}
          </span>
        ))}
        {days.map(({ iso, inMonth }) => {
          const dayReservations = reservations.filter((reservation) =>
            rangesOverlap(iso, iso, reservation.startDate, reservation.endDate),
          );
          return (
            <div
              key={iso}
              className={`admin-calendar-day ${inMonth ? "" : "is-outside"} ${dayReservations.length > 0 ? "has-reservations" : ""}`}
            >
              <span className="admin-calendar-number">{Number(iso.slice(-2))}</span>
              {dayReservations.slice(0, 2).map((reservation) => {
                const product = productsById.get(reservation.productId);
                return (
                  <span key={reservation.id} className="admin-calendar-chip" title={product?.name ?? reservation.productId}>
                    {product?.name ?? reservation.productId}
                  </span>
                );
              })}
              {dayReservations.length > 2 && (
                <span className="admin-calendar-more">+{dayReservations.length - 2}</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="admin-reservation-list">
        <p className="eyebrow">Reservas del mes</p>
        {message && <p className="admin-message">{message}</p>}
        {monthReservations.length === 0 ? (
          <p className="admin-empty-reservations">No hay objetos alquilados o pedidos para este mes.</p>
        ) : (
          monthReservations.map((reservation) => {
            const product = productsById.get(reservation.productId);
            return (
              <ReservationAdminRow
                key={reservation.id}
                reservation={reservation}
                productName={product?.name ?? reservation.productId}
                profile={reservation.createdByUid ? profilesByUid.get(reservation.createdByUid) : undefined}
                onMessage={setMessage}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export function AdminPage() {
  const app = getFirebaseApp();
  const db = getFirebaseDb();
  const storage = app ? getStorage(app) : null;
  const { user, isAdmin, checkingAdmin, loginWithGoogle, logout, authError } = useAuth();
  const { products, syncMode } = useCatalog();
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<"reservations" | "catalog">("reservations");

  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => a.name.localeCompare(b.name)),
    [products],
  );

  const updateField = <K extends keyof ProductForm>(field: K, value: ProductForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    await loginWithGoogle();
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

    try {
      setSaving(true);
      await setDoc(doc(db, "products", product.id), product);
      setMessage(`Producto guardado: ${product.name}`);
    } catch (error) {
      console.error(error);
      const firebaseError = error as { code?: string; message?: string };
      setMessage(
        `No se pudo guardar el producto (${firebaseError.code ?? "error desconocido"}). ${
          firebaseError.message ?? "Revisá los datos cargados y tus permisos de admin."
        }`,
      );
    } finally {
      setSaving(false);
    }
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

    try {
      setUploading(true);
      const imageRef = ref(storage, `products/${form.id}/${Date.now()}-${fileSafeName(file.name)}`);
      await uploadBytes(imageRef, file, { contentType: file.type });
      const url = await getDownloadURL(imageRef);
      updateField("images", [url, ...form.images]);
      setMessage("Imagen subida. Guardá el producto para conservarla en el catálogo.");
    } catch (error) {
      console.error(error);
      const firebaseError = error as { code?: string; message?: string };
      setMessage(
        `No se pudo subir la imagen (${firebaseError.code ?? "error desconocido"}). ${
          firebaseError.message ?? "Revisá las reglas de Storage y tus permisos de admin."
        }`,
      );
    } finally {
      setUploading(false);
    }
  };

  const seedCatalog = async () => {
    if (!db || !isAdmin || !window.confirm("¿Restaurar en Firestore los productos base que falten? No se pisan productos ya editados.")) {
      return;
    }

    try {
      setSaving(true);
      let created = 0;

      await Promise.all(
        fallbackProducts.map(async (product) => {
          const productRef = doc(db, "products", product.id);
          const existingProduct = await getDoc(productRef);

          if (existingProduct.exists()) {
            return;
          }

          await setDoc(productRef, product);
          created += 1;
        }),
      );

      setMessage(
        created > 0
          ? `Catálogo base restaurado. Se agregaron ${created} productos.`
          : "Firestore ya tenía todos los productos base.",
      );
    } catch (error) {
      console.error(error);
      const firebaseError = error as { code?: string; message?: string };
      setMessage(
        `No se pudo restaurar el catálogo base (${firebaseError.code ?? "error desconocido"}). ${
          firebaseError.message ?? "Revisá tus permisos de admin."
        }`,
      );
    } finally {
      setSaving(false);
    }
  };

  if (!firebaseEnabled || !db) {
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
          <div className="admin-auth-debug">
            <p><strong>Dominio actual:</strong> {window.location.hostname}</p>
            <p><strong>Auth domain:</strong> {publicFirebaseConfig.authDomain || "sin configurar"}</p>
            <p><strong>Project ID:</strong> {publicFirebaseConfig.projectId || "sin configurar"}</p>
          </div>
          {(message || authError) && <p className="admin-message">{message || authError}</p>}
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
          <button type="button" className="gabinete-button-secondary" onClick={logout}>
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
          <h1>Panel</h1>
          <p>Fuente actual: {syncMode === "firebase" ? "Firestore" : "catálogo local de respaldo"}</p>
        </div>
        <div className="admin-actions">
          <button type="button" className="gabinete-button-secondary" onClick={seedCatalog} disabled={saving}>
            <UploadCloud size={17} />
            Restaurar catálogo base
          </button>
          <button type="button" className="gabinete-button-secondary" onClick={logout}>
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

      <div className="admin-tabs" role="tablist" aria-label="Secciones del panel">
        <button
          type="button"
          className={activeTab === "reservations" ? "is-active" : ""}
          onClick={() => setActiveTab("reservations")}
        >
          <CalendarDays size={16} />
          Calendario y reservas
        </button>
        <button
          type="button"
          className={activeTab === "catalog" ? "is-active" : ""}
          onClick={() => setActiveTab("catalog")}
        >
          <UploadCloud size={16} />
          Actualización del catálogo
        </button>
      </div>

      {activeTab === "reservations" && <AdminReservationsCalendar products={products} />}

      {activeTab === "catalog" && <div className="admin-layout">
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
                <AdminImagePreview
                  key={image}
                  image={image}
                  onRemove={() => updateField("images", form.images.filter((candidate) => candidate !== image))}
                />
              ))}
            </div>
          </div>
        </form>
      </div>}
    </section>
  );
}



