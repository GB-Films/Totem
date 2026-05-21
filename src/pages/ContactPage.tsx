import { ContactForm } from "../components/ContactForm";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";

export function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="rounded-[30px] border border-gabinete-line bg-white/55 p-8 shadow-paper lg:p-10">
        <p className="eyebrow">Contacto</p>
        <h1 className="mt-3 max-w-[860px] font-display text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[0.95] tracking-[-0.05em] text-gabinete-darkBrown">
          Confirmá tu reserva y bloqueá las fechas.
        </h1>
        <p className="mt-5 max-w-[780px] font-editorial text-lg leading-8 text-gabinete-muted">
          Esta pantalla funciona como cierre del recorrido: revisás el carrito, confirmás la seña del 20% y recién ahí
          las piezas quedan marcadas como no disponibles.
        </p>
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <ContactForm />
        <SelectedProductsPanel />
      </div>
    </div>
  );
}
