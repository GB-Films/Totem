import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ObjectImage } from "../components/ObjectImage";
import { useCatalog } from "../context/CatalogContext";

const collectionCards = [
  {
    title: "Rodaje clásico",
    description: "Sillas de director, claquetas, luces y props que remiten al universo del set.",
    productIndex: 1,
    href: "/catalogo?categoria=Utiler%C3%ADa",
  },
  {
    title: "Oficinas con carácter",
    description: "Piezas para despachos, redacciones, escritorios o escenas con textura narrativa.",
    productIndex: 6,
    href: "/catalogo?q=oficina",
  },
  {
    title: "Objetos de época",
    description: "Valijas, lámparas, arte y objetos que parecen venir de otra escena y otro tiempo.",
    productIndex: 4,
    href: "/catalogo?categoria=Decoraci%C3%B3n",
  },
];

export function CollectionsPage() {
  const { products } = useCatalog();

  return (
    <div className="collections-page-mobile mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="collections-hero simple-page-hero">
        <p className="eyebrow">Colecciones</p>
        <h1 className="mt-3 max-w-[780px] font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-medium uppercase leading-[0.96] tracking-[0.02em] text-gabinete-darkBrown">
          Buscá por universo.
        </h1>
        <p className="mt-5 max-w-[700px] font-editorial text-base leading-7 text-gabinete-muted">
          Si todavía no tenés el objeto exacto, entrá por atmósfera, tipo de escena o necesidad de producción.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {collectionCards.map((item) => {
          const product = products[item.productIndex] ?? products[0];

          if (!product) {
            return null;
          }

          return (
          <Link
            key={item.title}
            to={item.href}
            className="overflow-hidden rounded-[18px] border border-gabinete-line bg-gabinete-panel/70 shadow-paper transition hover:-translate-y-1"
          >
            <ObjectImage product={product} compact />
            <div className="p-6">
              <h2 className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-gabinete-darkBrown">{item.title}</h2>
              <p className="mt-4 font-editorial text-base leading-7 text-gabinete-muted">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-editorial text-sm font-semibold uppercase tracking-[0.12em] text-gabinete-brown">
                Abrir colección <ArrowRight size={15} />
              </span>
            </div>
          </Link>
          );
        })}
      </section>
    </div>
  );
}
