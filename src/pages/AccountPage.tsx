import { CalendarDays, Heart, Lock, LogOut, Save, ShoppingCart, UserRound } from "lucide-react";
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

type ProfileForm = Pick<UserProfile, "firstName" | "lastName" | "dni" | "phone" | "email">;
type AccountSection = "reservations" | "profile" | "favorites";

const emptyProfile: ProfileForm = {
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
  email: "",
};

export function AccountPage() {
  const { user, loginWithGoogle, logout, authError, checkingAuth } = useAuth();
  const { products, loading: loadingCatalog } = useCatalog();
  const { favoriteIds, removeFavorite } = useFavorites();
  const [profile, setProfile] = useState<ProfileForm>(emptyProfile);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [activeSection, setActiveSection] = useState<AccountSection>("reservations");
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
      setLoadingProfile(false);
      return;
    }

    setLoadingProfile(true);
    getDoc(doc(db, "userProfiles", user.uid))
      .then((profileDoc) => {
        if (!profileDoc.exists()) {
          setProfile({
            firstName: user.displayName?.split(" ")[0] ?? "",
            lastName: user.displayName?.split(" ").slice(1).join(" ") ?? "",
            dni: "",
            phone: "",
            email: user.email ?? "",
          });
          return;
        }

        const data = profileDoc.data() as UserProfile;
        setProfile({
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          dni: data.dni ?? "",
          phone: data.phone ?? "",
          email: data.email ?? user.email ?? "",
        });
      })
      .catch((error) => {
        console.error(error);
        setMessage("No se pudieron cargar tus datos.");
      })
      .finally(() => {
        setLoadingProfile(false);
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
    if (
      !profile.firstName.trim()
      || !profile.lastName.trim()
      || !/^\d{7,9}$/.test(profile.dni.replace(/\D/g, ""))
      || profile.phone.replace(/\D/g, "").length < 8
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())
    ) {
      setMessage("Revisá nombre, apellido, DNI, celular y mail antes de guardar.");
      return;
    }

    try {
      setSaving(true);
      setMessage("");
      await setDoc(
        doc(db, "userProfiles", user.uid),
        {
          uid: user.uid,
          email: profile.email.trim(),
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

  if (checkingAuth) {
    return <main className="user-page"><div className="booking-history-loading">Abriendo tu cuenta…</div></main>;
  }

  if (!user) {
    return (
      <main className="user-page mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-8">
        <section className="user-hero account-header">
          <div>
            <p className="eyebrow">Cuenta</p>
            <h1>Tus guardados</h1>
            <p>Podés ver tus favoritos sin ingresar. Iniciá sesión cuando quieras reservar o seguir un pedido.</p>
          </div>
          <button type="button" className="gabinete-button px-5 py-3" onClick={loginWithGoogle}>
            <Lock size={17} />
            Ingresar para ver reservas
          </button>
        </section>
        {authError && <p className="admin-message mt-4">{authError}</p>}
        <section className="user-favorites parchment-panel p-5">
          <p className="eyebrow flex items-center gap-2"><Heart size={15} />Favoritos</p>
          <h2>Objetos guardados en este dispositivo</h2>
          {loadingCatalog ? (
            <p className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm text-gabinete-muted">
              Recuperando tus objetos guardados…
            </p>
          ) : favoriteProducts.length === 0 ? (
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
                    <Link to={`/producto/${product.id}`} className="user-favorite-title">{product.name}</Link>
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
        <div className="user-quick-actions">
          <Link to="/catalogo" className="gabinete-button-secondary px-5 py-3">Explorar catálogo</Link>
          <Link to="/contacto" className="gabinete-button px-5 py-3"><ShoppingCart size={17} />Ver carrito</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="user-page mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-8">
      <section className="user-hero account-header">
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

      <nav className="account-tabs" aria-label="Secciones de la cuenta">
        <button
          type="button"
          className={activeSection === "reservations" ? "is-active" : ""}
          aria-pressed={activeSection === "reservations"}
          onClick={() => setActiveSection("reservations")}
        >
          <CalendarDays size={18} />
          Mis reservas
        </button>
        <button
          type="button"
          className={activeSection === "profile" ? "is-active" : ""}
          aria-pressed={activeSection === "profile"}
          onClick={() => setActiveSection("profile")}
        >
          <UserRound size={18} />
          Datos personales
        </button>
        <button
          type="button"
          className={activeSection === "favorites" ? "is-active" : ""}
          aria-pressed={activeSection === "favorites"}
          onClick={() => setActiveSection("favorites")}
        >
          <Heart size={18} />
          Favoritos
        </button>
      </nav>

      {activeSection === "profile" && (
        <form className="user-profile-card parchment-panel p-5" onSubmit={saveProfile}>
          <p className="eyebrow flex items-center gap-2">
            <UserRound size={15} />
            Datos
          </p>
          <h2>Datos personales</h2>
          <div className="reservation-customer-grid account-profile-grid mt-4">
            <label>
              Nombre
              <input className="gabinete-input" autoComplete="given-name" required value={profile.firstName} onChange={(event) => updateProfile("firstName", event.target.value)} />
            </label>
            <label>
              Apellido
              <input className="gabinete-input" autoComplete="family-name" required value={profile.lastName} onChange={(event) => updateProfile("lastName", event.target.value)} />
            </label>
            <label>
              DNI
              <input className="gabinete-input" inputMode="numeric" required value={profile.dni} onChange={(event) => updateProfile("dni", event.target.value.replace(/\D/g, "").slice(0, 9))} />
            </label>
            <label>
              Celular
              <input className="gabinete-input" type="tel" autoComplete="tel" required value={profile.phone} onChange={(event) => updateProfile("phone", event.target.value)} />
            </label>
            <label>
              Mail
              <input className="gabinete-input" type="email" autoComplete="email" required value={profile.email} onChange={(event) => updateProfile("email", event.target.value)} />
            </label>
          </div>
          {message && <p className="mt-3 text-sm text-gabinete-muted">{message}</p>}
          <button type="submit" className="gabinete-button mt-4 px-5 py-3" disabled={saving || loadingProfile}>
            <Save size={17} />
            {loadingProfile ? "Cargando…" : saving ? "Guardando…" : "Guardar datos"}
          </button>
        </form>
      )}

      {activeSection === "reservations" && (
        <section className="account-section-shell">
        <ReservationHistory />
        </section>
      )}

      {activeSection === "favorites" && (
        <section className="user-favorites parchment-panel p-5">
        <p className="eyebrow flex items-center gap-2">
          <Heart size={15} />
          Favoritos
        </p>
        <h2>Objetos guardados</h2>
        {loadingCatalog ? (
          <p className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm text-gabinete-muted">
            Recuperando tus objetos guardados…
          </p>
        ) : favoriteProducts.length === 0 ? (
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
      )}

    </main>
  );
}
