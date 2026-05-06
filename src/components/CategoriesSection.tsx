import { Link } from "react-router-dom";
import { categories, products } from "../data/products";

export function CategoriesSection() {
  const categoryCounts = categories
    .map((category) => ({
      category,
      count: products.filter((product) => product.category === category).length,
    }))
    .filter((entry) => entry.count > 0)
    .slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
      <div className="max-w-2xl">
        <p className="eyebrow">Categorías</p>
        <h2 className="mt-3 font-display text-4xl text-gabinete-darkBrown sm:text-5xl">
          Cajones del archivo
        </h2>
        <p className="mt-4 font-editorial text-gabinete-muted">
          No es una tienda genérica. Es un mapa de objetos posibles para escenas improbables.
        </p>
      </div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryCounts.map((entry) => (
          <Link
            key={entry.category}
            to={`/catalogo?categoria=${encodeURIComponent(entry.category)}`}
            className="parchment-panel p-5 transition hover:-translate-y-1 hover:border-gabinete-brown/55"
          >
            <p className="font-display text-2xl text-gabinete-darkBrown">{entry.category}</p>
            <p className="mt-3 font-editorial text-sm text-gabinete-muted">
              {entry.count} pieza{entry.count === 1 ? "" : "s"} en archivo
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
