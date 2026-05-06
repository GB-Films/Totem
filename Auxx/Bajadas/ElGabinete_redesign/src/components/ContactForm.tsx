import { Mail, MessageCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useAvailability } from "../context/AvailabilityContext";
import { useSelection } from "../context/SelectionContext";
import { products } from "../data/products";
import type { SelectionItem } from "../types";
import {
  buildContactMessage,
  buildMailtoUrl,
  buildWhatsappUrl,
  type ContactFormValues,
} from "../utils/messages";

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
  const { selection } = useSelection();
  const { addReservationsFromSelection, hasConflict } = useAvailability();
  const activeSelection = selectionOverride ?? selection;
  const [values, setValues] = useState(initialValues);
  const message = useMemo(
    () => buildContactMessage(values, products, activeSelection),
    [activeSelection, values],
  );

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasSelectionConflicts) {
      return;
    }
    addReservationsFromSelection(activeSelection, values.projectName || "Consulta enviada");
    window.location.href = buildMailtoUrl(message);
  };

  const hasSelectionConflicts = activeSelection.some((item) =>
    hasConflict(item.productId, item.startDate, item.endDate),
  );

  const handleWhatsappClick = () => {
    if (!hasSelectionConflicts) {
      addReservationsFromSelection(activeSelection, values.projectName || "Consulta enviada");
    }
  };

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
        Al enviar la consulta se bloquean las fechas elegidas en el calendario local de esta versión.
        Para compartir disponibilidad entre todos los visitantes hará falta conectar Firebase,
        Supabase, Google Calendar o un CMS.
      </p>

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
            Hay fechas solicitadas en tu selección. Cambialas para preparar la consulta.
          </p>
        )}
        <button type="submit" disabled={hasSelectionConflicts} className="gabinete-button px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50">
          <Mail size={17} />
          Enviar consulta
        </button>
        <a
          href={hasSelectionConflicts ? undefined : buildWhatsappUrl(message)}
          target="_blank"
          rel="noreferrer"
          onClick={handleWhatsappClick}
          className="gabinete-button-secondary px-4 py-3"
        >
          <MessageCircle size={17} />
          Enviar por WhatsApp
        </a>
      </div>
    </form>
  );
}
