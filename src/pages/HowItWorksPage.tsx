import { Link } from "react-router-dom";
import { HowItWorks } from "../components/HowItWorks";
import { RentalCalculator } from "../components/RentalCalculator";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";
import { products } from "../data/products";

const sampleSelection = [
  { productId: "EG-001", quantity: 1, rentalDays: 3 },
  { productId: "EG-007", quantity: 1, rentalDays: 3 },
];

export function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Producción sin humo</p>
          <h1 className="mt-3 font-display text-5xl text-bone sm:text-6xl">Cómo se alquila un objeto con pasado</h1>
          <p className="mt-5 text-lg leading-8 text-bone/65">
            Elegís piezas, estimás alquiler y garantía, y nos mandás una consulta. Después afinamos
            disponibilidad, retiro, devolución y condiciones según el rodaje.
          </p>
        </div>
      </section>
      <HowItWorks />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="rounded-lg border border-bone/10 bg-ash/60 p-6">
          <h2 className="font-display text-4xl text-bone">Garantía reintegrable</h2>
          <div className="mt-5 space-y-4 text-bone/65">
            <p>
              Cada pieza tiene un valor estimado, un porcentaje de garantía sugerido y un depósito
              mínimo. Si el objeto es delicado, la garantía suma un 10% extra.
            </p>
            <p>
              Para alquileres de más de 7 días, la calculadora aplica un descuento configurable del
              15% sobre el alquiler. La garantía se muestra separada porque vuelve si el objeto
              regresa en buen estado.
            </p>
            <p>
              No hay pagos online por ahora. El cierre final se coordina por mail o WhatsApp, como
              corresponde a todo buen trato de utilería con algo de misterio.
            </p>
          </div>
          <Link
            to="/catalogo"
            className="mt-7 inline-flex rounded-md bg-brass px-5 py-3 font-semibold text-coal transition hover:bg-bone"
          >
            Explorar catálogo
          </Link>
        </div>
        <RentalCalculator products={products} selection={sampleSelection} />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SelectedProductsPanel />
      </section>
    </>
  );
}
