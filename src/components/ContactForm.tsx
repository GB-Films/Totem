import { Mail, MessageCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
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
    window.location.href = buildMailtoUrl(message);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-bone/10 bg-ash/70 p-5 shadow-cabinet">
      <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Solicitud</p>
      <h2 className="mt-2 font-display text-3xl text-bone">Abrir el gabinete</h2>
      <p className="mt-2 text-sm leading-6 text-bone/65">
        Contanos qué historia estás por filmar. Nosotros revisamos disponibilidad, garantía y logística.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-bone/75">
          Nombre
          <input
            required
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
          />
        </label>
        <label className="text-sm text-bone/75">
          Productora / Empresa
          <input
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
          />
        </label>
        <label className="text-sm text-bone/75">
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
          />
        </label>
        <label className="text-sm text-bone/75">
          Teléfono
          <input
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
          />
        </label>
        <label className="text-sm text-bone/75">
          Nombre del proyecto
          <input
            value={values.projectName}
            onChange={(event) => updateField("projectName", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
          />
        </label>
        <label className="text-sm text-bone/75">
          Tipo de proyecto
          <select
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="text-sm text-bone/75 sm:col-span-2">
          Fechas tentativas de alquiler
          <input
            value={values.dates}
            onChange={(event) => updateField("dates", event.target.value)}
            placeholder="Ej: 12 al 15 de junio"
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none placeholder:text-bone/35 focus:border-brass"
          />
        </label>
        <label className="text-sm text-bone/75 sm:col-span-2">
          Mensaje
          <textarea
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-bone outline-none focus:border-brass"
            placeholder="Dirección de arte, tono del proyecto, dudas de logística o cualquier objeto que todavía no existe pero debería."
          />
        </label>
      </div>

      <div className="mt-6 rounded-md border border-bone/10 bg-coal/55 p-4">
        <p className="text-sm font-medium text-bone">Resumen que se enviará</p>
        <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap text-xs leading-5 text-bone/60">
          {message}
        </pre>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-brass px-4 py-3 text-sm font-semibold text-coal transition hover:bg-bone"
        >
          <Mail size={17} />
          Enviar por email
        </button>
        <a
          href={buildWhatsappUrl(message)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-brass/50 px-4 py-3 text-sm font-semibold text-bone transition hover:bg-brass/10"
        >
          <MessageCircle size={17} />
          Consultar por WhatsApp
        </a>
      </div>
    </form>
  );
}
