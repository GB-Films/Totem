import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ObjectImage } from "../components/ObjectImage";
import { products } from "../data/products";

const collectionCards = [
  {
    title: "Rodaje clásico",
    description: "Sillas de director, claquetas, luces y props que remiten al universo del set.",
    product: products[1],
    href: "/catalogo?categoria=Utiler%C3%ADa",
  },
  {
    title: "Oficinas con carácter",
    description: "Piezas para despachos, redacciones, escritorios o escenas con textura narrativa.",
    product: products[6],
    href: "/catalogo?q=oficina",
  },
  {
    title: "Objetos de época",
    description: "Valijas, lámparas, arte y objetos que parecen venir de otra escena y otro tiempo.",
    product: products[4],
    href: "/catalogo?categoria=Decoraci%C3%B3n",
  },
];

export function CollectionsPage() {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="rounded-[30px] border border-gabinete-line bg-white/55 p-8 shadow-paper lg:p-10">
        <p className="eyebrow">Colecciones</p>
        <h1 className="mt-3 max-w-[900px] font-display text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[0.95] tracking-[-0.05em] text-gabinete-darkBrown">
          Entradas rápidas para buscar por universo, no sólo por nombre.
        </h1>
        <p className="mt-5 max-w-[760px] font-editorial text-lg leading-8 text-gabinete-muted">
          La idea es que un usuario pueda empezar con menos fricción: si todavía no sabe el objeto puntual,
          puede entrar por atmósfera, tipo de escena o necesidad de producción.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {collectionCards.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="overflow-hidden rounded-[24px] border border-gabinete-line bg-white/60 shadow-paper transition hover:-translate-y-1"
          >
            <ObjectImage product={item.product} compact />
            <div className="p-6">
              <h2 className="font-display text-4xl leading-none text-gabinete-darkBrown">{item.title}</h2>
              <p className="mt-4 font-editorial text-base leading-7 text-gabinete-muted">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-editorial text-sm font-semibold uppercase tracking-[0.12em] text-gabinete-brown">
                Abrir colección <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
