import { ContactForm } from "../components/ContactForm";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-12">
      <div className="max-w-3xl">
        <p className="eyebrow">Contacto / reserva</p>
        <h1 className="mt-3 font-display text-5xl text-gabinete-darkBrown sm:text-6xl">
          Consultar disponibilidad
        </h1>
        <p className="mt-4 font-editorial text-lg leading-8 text-gabinete-muted">
          Mandanos tu selección y las fechas tentativas. Si el objeto mira raro a cámara, también lo
          anotamos.
        </p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <ContactForm />
        <SelectedProductsPanel />
      </div>
    </div>
  );
}
