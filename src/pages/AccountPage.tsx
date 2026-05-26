import { Heart, Lock, LogOut, Save, ShoppingCart, UserRound } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { ObjectImage } from "../components/ObjectImage";
import { ReservationHistory } from "../components/ReservationHistory";
import { useAuth } from "../context/AuthContext";
import { useCatalog } from "../context/CatalogContext";
import { useFavorites } from "../context/FavoritesContext";
import { getFirebaseDb } from "../services/firebase";
import type { UserProfile } from "../types";

type ProfileForm = Pick<UserProfile, "firstName" | "lastName" | "dni" | "phone">;

const emptyProfile: ProfileForm = {
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
};

export function AccountPage() {
  const { user, loginWithGoogle, logout, authError } = useAuth();
  const { products } = useCatalog();
  const { favoriteIds, removeFavorite } = useFavorites();
  const [profile, setProfile] = useState<ProfileForm>(emptyProfile);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const favoriteProducts = useMemo(
    () => favoriteIds
      .map((id) => products.find((product) => product.id === id))
      .filter((product): product is (typeof products)[number] => Boolean(product)),
    [favoriteIds, products],
  );

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db || !user) {
      setProfile(emptyProfile);
      return;
    }

    getDoc(doc(db, "userProfiles", user.uid))
      .then((profileDoc) => {
        if (!profileDoc.exists()) {
          setProfile({
            firstName: user.displayName?.split(" ")[0] ?? "",
            lastName: user.displayName?.split(" ").slice(1).join(" ") ?? "",
            dni: "",
            phone: "",
          });
          return;
        }

        const data = profileDoc.data() as UserProfile;
        setProfile({
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          dni: data.dni ?? "",
          phone: data.phone ?? "",
        });
      })
      .catch((error) => {
        console.error(error);
        setMessage("No se pudieron cargar tus datos.");
      });
  }, [user]);

  const updateProfile = (field: keyof ProfileForm, value: string) => {
    setProfile((current) => ({ ...current, [field]: value }));
  };

  const saveProfile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const db = getFirebaseDb();
    if (!db || !user) {
      setMessage("Ingresá con Google para guardar tus datos.");
      return;
    }

    try {
      setSaving(true);
      setMessage("");
      await setDoc(
        doc(db, "userProfiles", user.uid),
        {
          uid: user.uid,
          email: user.email ?? "",
          firstName: profile.firstName.trim(),
          lastName: profile.lastName.trim(),
          dni: profile.dni.trim(),
          phone: profile.phone.trim(),
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
      setMessage("Datos guardados.");
    } catch (error) {
      console.error(error);
      setMessage("No se pudieron guardar los datos.");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <main className="user-page mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-8">
        <section className="user-hero">
          <div>
            <p className="eyebrow">Cuenta</p>
            <h1>Tu cuenta Totem</h1>
            <p>Ingresá con Google para ver reservas, favoritos y datos de contacto.</p>
          </div>
          <button type="button" className="gabinete-button px-5 py-3" onClick={loginWithGoogle}>
            <Lock size={17} />
            Ingresar
          </button>
        </section>
        {authError && <p className="admin-message mt-4">{authError}</p>}
      </main>
    );
  }

  return (
    <main className="user-page mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-8">
      <section className="user-hero">
        <div>
          <p className="eyebrow">Cuenta</p>
          <h1>{profile.firstName ? `Hola, ${profile.firstName}` : "Tu cuenta"}</h1>
          <p>{user.email}</p>
        </div>
        <button type="button" className="gabinete-button-secondary px-5 py-3" onClick={logout}>
          <LogOut size={17} />
          Salir
        </button>
      </section>

      <section className="user-dashboard">
        <form className="user-profile-card parchment-panel p-5" onSubmit={saveProfile}>
          <p className="eyebrow flex items-center gap-2">
            <UserRound size={15} />
            Datos
          </p>
          <h2>Datos personales</h2>
          <div className="reservation-customer-grid mt-4">
            <label>
              Nombre
              <input className="gabinete-input" value={profile.firstName} onChange={(event) => updateProfile("firstName", event.target.value)} />
            </label>
            <label>
              Apellido
              <input className="gabinete-input" value={profile.lastName} onChange={(event) => updateProfile("lastName", event.target.value)} />
            </label>
            <label>
              DNI
              <input className="gabinete-input" value={profile.dni} onChange={(event) => updateProfile("dni", event.target.value)} />
            </label>
            <label>
              Celular
              <input className="gabinete-input" value={profile.phone} onChange={(event) => updateProfile("phone", event.target.value)} />
            </label>
          </div>
          {message && <p className="mt-3 text-sm text-gabinete-muted">{message}</p>}
          <button type="submit" className="gabinete-button mt-4 px-5 py-3" disabled={saving}>
            <Save size={17} />
            {saving ? "Guardando..." : "Guardar datos"}
          </button>
        </form>

        <ReservationHistory />
      </section>

      <section className="user-favorites parchment-panel p-5">
        <p className="eyebrow flex items-center gap-2">
          <Heart size={15} />
          Favoritos
        </p>
        <h2>Objetos guardados</h2>
        {favoriteProducts.length === 0 ? (
          <p className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm text-gabinete-muted">
            Todavía no guardaste objetos. Marcá el corazón en el catálogo para armar tu lista.
          </p>
        ) : (
          <div className="user-favorite-grid">
            {favoriteProducts.map((product) => (
              <article key={product.id} className="user-favorite-card">
                <Link to={`/producto/${product.id}`} className="user-favorite-image">
                  <ObjectImage product={product} compact showLabel={false} />
                </Link>
                <div>
                  <Link to={`/producto/${product.id}`} className="user-favorite-title">
                    {product.name}
                  </Link>
                  <p>{product.category}</p>
                </div>
                <button type="button" aria-label={`Quitar ${product.name}`} onClick={() => removeFavorite(product.id)}>
                  <Heart size={16} fill="currentColor" />
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="user-quick-actions">
        <Link to="/catalogo" className="gabinete-button-secondary px-5 py-3">Catálogo</Link>
        <Link to="/colecciones" className="gabinete-button-secondary px-5 py-3">Colecciones</Link>
        <Link to="/contacto" className="gabinete-button px-5 py-3">
          <ShoppingCart size={17} />
          Carrito
        </Link>
      </section>
    </main>
  );
}
