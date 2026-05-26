import { Link } from "react-router-dom";
import { useCatalog } from "../context/CatalogContext";
import { ProductCard } from "./ProductCard";

export function FeaturedObjects() {
  const { products } = useCatalog();
  const featured = [...products].sort((a, b) => b.featuredScore - a.featuredScore).slice(0, 3);

  return (
    <section className="mx-auto max-w-none px-4 py-16 sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Reliquias disponibles</p>
          <h2 className="mt-3 font-display text-4xl text-gabinete-darkBrown sm:text-5xl">
            Objetos destacados
          </h2>
        </div>
        <Link to="/catalogo" className="gabinete-button-secondary w-fit px-5 py-2.5">
          Abrir Totem Rental
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
