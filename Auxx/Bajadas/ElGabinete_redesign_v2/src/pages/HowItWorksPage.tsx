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
      <section className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
        <div className="rounded-[30px] border border-gabinete-line bg-white/55 p-8 shadow-paper lg:p-10">
          <p className="eyebrow">Cómo funciona</p>
          <h1 className="mt-3 max-w-[900px] font-display text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[0.95] tracking-[-0.05em] text-gabinete-darkBrown">
            Un recorrido simple: buscar, seleccionar y consultar.
          </h1>
          <p className="mt-5 max-w-[780px] font-editorial text-lg leading-8 text-gabinete-muted">
            Esta sección explica la lógica de uso del sitio. Primero encontrás objetos desde la búsqueda o las categorías,
            después armás tu selección, y por último consultás disponibilidad, condiciones y garantía.
          </p>
        </div>
      </section>

      <HowItWorks />

      <section className="mx-auto grid w-full max-w-[1520px] gap-8 px-4 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-12">
        <div className="parchment-panel p-6">
          <h2 className="font-display text-4xl text-gabinete-darkBrown">Garantía y cálculo rápido</h2>
          <div className="mt-5 space-y-4 font-editorial leading-7 text-gabinete-muted">
            <p>
              Cada pieza tiene un valor estimado y una garantía sugerida. Eso ayuda a producción a entender desde el
              principio cuánto necesita reservar para avanzar con tranquilidad.
            </p>
            <p>
              La calculadora no reemplaza la cotización final, pero hace la experiencia más user friendly y orienta la
              decisión sin salir del sitio.
            </p>
          </div>
          <Link to="/catalogo" className="gabinete-button mt-7 px-5 py-3">
            Explorar catálogo
          </Link>
        </div>
        <RentalCalculator products={products} selection={sampleSelection} />
      </section>

      <section className="mx-auto w-full max-w-[1520px] px-4 pb-16 sm:px-8 lg:px-12">
        <SelectedProductsPanel />
      </section>
    </>
  );
}
