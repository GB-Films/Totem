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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Categorías destacadas</p>
        <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">Cajones del archivo</h2>
        <p className="mt-4 text-bone/65">
          No es una tienda genérica. Es un mapa de objetos posibles para escenas improbables.
        </p>
      </div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryCounts.map((entry) => (
          <Link
            key={entry.category}
            to={`/catalogo?categoria=${encodeURIComponent(entry.category)}`}
            className="rounded-lg border border-bone/10 bg-ash/55 p-5 transition hover:-translate-y-1 hover:border-brass/40 hover:bg-ash"
          >
            <p className="font-display text-2xl text-bone">{entry.category}</p>
            <p className="mt-3 text-sm text-bone/55">
              {entry.count} pieza{entry.count === 1 ? "" : "s"} en archivo
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
