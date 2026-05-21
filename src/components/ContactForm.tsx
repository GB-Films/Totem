import { CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { useAvailability } from "../context/AvailabilityContext";
import { useCatalog } from "../context/CatalogContext";
import { useSelection } from "../context/SelectionContext";
import { RESERVATIONS_ENABLED } from "../config/features";
import { firebaseEnabled, getFirebaseApp } from "../services/firebase";
import type { SelectionItem } from "../types";
import { formatCurrency } from "../utils/format";
import {
  buildContactMessage,
  buildWhatsappUrl,
  type ContactFormValues,
} from "../utils/messages";
import { calculateSelectionPricing } from "../utils/pricing";

const projectTypes = ["Comercial", "Videoclip", "Cine", "Serie", "Teatro", "Foto", "Evento", "Otro"];

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectName: "",
  projectType: "Comercial",
  dates: "",
  message: "",
};

interface ContactFormProps {
  selectionOverride?: SelectionItem[];
}

export function ContactForm({ selectionOverride }: ContactFormProps) {
  const app = getFirebaseApp();
  const auth = app ? getAuth(app) : null;
  const { selection, clearSelection } = useSelection();
  const { addReservationsFromSelection, hasConflict, syncMode } = useAvailability();
  const { products } = useCatalog();
  const activeSelection = selectionOverride ?? selection;
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "saving" | "confirmed">("idle");
  const [user, setUser] = useState<User | null>(null);
  const message = useMemo(
    () => buildContactMessage(values, products, activeSelection),
    [activeSelection, values],
  );
  const pricing = useMemo(
    () => calculateSelectionPricing(products, activeSelection),
    [activeSelection],
  );

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  useEffect(() => {
    if (!auth) {
      return;
    }

    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      if (nextUser?.email) {
        setValues((current) => ({
          ...current,
          email: current.email || nextUser.email || "",
          name: current.name || nextUser.displayName || "",
        }));
      }
    });
  }, [auth]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasSelectionConflicts || activeSelection.length === 0) {
      return;
    }

    if (firebaseEnabled && auth && !user) {
      const credential = await signInWithPopup(auth, new GoogleAuthProvider());
      setUser(credential.user);
      setValues((current) => ({
        ...current,
        email: current.email || credential.user.email || "",
        name: current.name || credential.user.displayName || "",
      }));
    }

    setStatus("saving");
    await addReservationsFromSelection(activeSelection, values.projectName || "Reserva confirmada");
    if (!selectionOverride) {
      clearSelection();
    }
    setStatus("confirmed");
  };

  const hasSelectionConflicts = activeSelection.some((item) =>
    hasConflict(item.productId, item.startDate, item.endDate),
  );

  const labelClass = "font-display text-xs uppercase tracking-[0.12em] text-gabinete-brown";

  return (
    <form onSubmit={handleSubmit} className="parchment-panel p-5">
      <p className="eyebrow">Ficha de solicitud</p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Preparar selección</h2>
      <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
        Contanos qué historia estás por filmar. Revisamos disponibilidad, garantía y logística antes
        de que el objeto salga del gabinete.
      </p>
      <p className="mt-3 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-xs leading-5 text-gabinete-muted">
        Enviar por WhatsApp no bloquea fechas. La no disponibilidad recién se registra cuando confirmás
        la reserva con una seña del 20%: {formatCurrency(pricing.reserveDeposit)}.
        {syncMode === "firebase"
          ? RESERVATIONS_ENABLED
            ? " Esa reserva se sincroniza en Firebase."
            : " Modo prueba activo: al confirmar te pedimos ingresar con Google, pero por ahora no se bloquean fechas en Firebase."
          : " Hasta cargar las claves de Firebase, queda guardada en este navegador."}
      </p>
      {status === "confirmed" && (
        <p className="mt-3 rounded-md border border-gabinete-available/35 bg-gabinete-available/10 px-3 py-2 font-editorial text-sm text-gabinete-available">
          {RESERVATIONS_ENABLED
            ? "Reserva confirmada. Las fechas ya quedaron marcadas como no disponibles."
            : "Reserva de prueba confirmada. No se bloquearon fechas porque el modo prueba está activo."}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Nombre
          <input
            required
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          />
        </label>
        <label className={labelClass}>
          Productora / Empresa
          <input
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          />
        </label>
        <label className={labelClass}>
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          />
        </label>
        <label className={labelClass}>
          Teléfono
          <input
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          />
        </label>
        <label className={labelClass}>
          Nombre del proyecto
          <input
            value={values.projectName}
            onChange={(event) => updateField("projectName", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          />
        </label>
        <label className={labelClass}>
          Tipo de proyecto
          <select
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          Fechas tentativas de alquiler
          <input
            value={values.dates}
            onChange={(event) => updateField("dates", event.target.value)}
            placeholder="Ej: 12 al 15 de junio"
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
          />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          Mensaje
          <textarea
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="gabinete-input mt-2 px-3 py-3 normal-case tracking-normal"
            placeholder="Dirección de arte, tono del proyecto, dudas de logística o cualquier objeto que todavía no existe pero debería."
          />
        </label>
      </div>

      <div className="mt-6 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4">
        <p className="font-display text-sm uppercase tracking-[0.12em] text-gabinete-brown">
          Resumen que se enviará
        </p>
        <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap font-body text-xs leading-5 text-gabinete-muted">
          {message}
        </pre>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {hasSelectionConflicts && (
          <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error sm:col-span-2">
            Hay fechas no disponibles en tu carrito. Cambialas para confirmar la reserva.
          </p>
        )}
        <button
          type="submit"
          disabled={hasSelectionConflicts || activeSelection.length === 0 || status === "saving"}
          className="gabinete-button px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCircle2 size={17} />
          {status === "saving" ? "Confirmando..." : "Confirmar reserva"}
        </button>
        <a
          href={hasSelectionConflicts ? undefined : buildWhatsappUrl(message)}
          target="_blank"
          rel="noreferrer"
          className="gabinete-button-secondary px-4 py-3"
        >
          <MessageCircle size={17} />
          Enviar por WhatsApp
        </a>
      </div>
    </form>
  );
}
