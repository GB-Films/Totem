import { ContactForm } from "../components/ContactForm";
import { ReservationHistory } from "../components/ReservationHistory";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";
import { useSelection } from "../context/SelectionContext";

export function ContactPage() {
  const { selection } = useSelection();

  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="simple-page-hero">
        <p className="eyebrow">Carrito</p>
        <h1 className="mt-3 max-w-[680px] font-display text-[clamp(2.2rem,4vw,4rem)] font-medium uppercase leading-[0.98] tracking-[0.02em] text-gabinete-darkBrown">
          Revisá tu selección.
        </h1>
        <p className="mt-5 max-w-[700px] font-editorial text-base leading-7 text-gabinete-muted">
          Acá podés ajustar cantidades, días y fechas, o quitar productos. Cuando confirmás,
          te mostramos el acceso directo para continuar por WhatsApp.
        </p>
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <SelectedProductsPanel showAction={false} />
        <ContactForm selection={selection} />
      </div>
      <div className="mt-8">
        <ReservationHistory />
      </div>
    </div>
  );
}
