import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedObjects() {
  const featured = [...products].sort((a, b) => b.featuredScore - a.featuredScore).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Reliquias disponibles</p>
          <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">Objetos destacados</h2>
        </div>
        <Link
          to="/catalogo"
          className="inline-flex w-fit rounded-md border border-brass/50 px-4 py-2 text-sm font-semibold text-bone transition hover:bg-brass/10"
        >
          Abrir el gabinete
        </Link>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
