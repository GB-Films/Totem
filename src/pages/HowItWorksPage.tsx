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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Producción sin humo</p>
          <h1 className="mt-3 font-display text-5xl text-gabinete-darkBrown sm:text-6xl">
            Cómo se alquila un objeto con pasado
          </h1>
          <p className="mt-5 font-editorial text-lg leading-8 text-gabinete-muted">
            Elegís piezas, estimás alquiler y garantía, y nos mandás una consulta. Después afinamos
            disponibilidad, retiro, devolución y condiciones según el rodaje.
          </p>
        </div>
      </section>
      <HowItWorks />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_380px] lg:px-12">
        <div className="parchment-panel p-6">
          <h2 className="font-display text-4xl text-gabinete-darkBrown">Garantía reintegrable</h2>
          <div className="mt-5 space-y-4 font-editorial leading-7 text-gabinete-muted">
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
          <Link to="/catalogo" className="gabinete-button mt-7 px-5 py-3">
            Explorar catálogo
          </Link>
        </div>
        <RentalCalculator products={products} selection={sampleSelection} />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 lg:px-12">
        <SelectedProductsPanel />
      </section>
    </>
  );
}
