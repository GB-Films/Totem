import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ObjectImage } from "../components/ObjectImage";
import { useCatalog } from "../context/CatalogContext";

export function CollectionsPage() {
  const { products, categories, loading } = useCatalog();
  const groups = categories
    .map((category) => {
      const categoryProducts = products.filter((product) => product.category === category);
      return {
        category,
        products: categoryProducts,
        imageProduct: categoryProducts.find((product) => product.images.length > 0) ?? categoryProducts[0],
      };
    })
    .filter((group) => group.products.length > 0);

  return (
    <div className="collections-page-mobile mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="collections-hero simple-page-hero">
        <p className="eyebrow">Explorar</p>
        <h1 className="mt-3 max-w-[780px] font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-medium uppercase leading-[0.96] tracking-[0.02em] text-gabinete-darkBrown">
          Encontrá por categoría.
        </h1>
        <p className="mt-5 max-w-[700px] font-editorial text-base leading-7 text-gabinete-muted">
          Una forma simple de recorrer el archivo cuando todavía no tenés un objeto exacto en mente.
        </p>
      </section>

      {loading ? (
        <div className="catalog-loading" role="status">Preparando categorías…</div>
      ) : groups.length === 0 ? (
        <div className="catalog-error">
          <strong>Las categorías todavía no están disponibles.</strong>
          <Link to="/catalogo">Ir al catálogo</Link>
        </div>
      ) : (
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <Link
              key={group.category}
              to={`/catalogo?categoria=${encodeURIComponent(group.category)}`}
              className="overflow-hidden rounded-[18px] border border-gabinete-line bg-gabinete-panel/70 shadow-paper transition hover:-translate-y-1"
            >
              {group.imageProduct && <ObjectImage product={group.imageProduct} compact />}
              <div className="p-6">
                <p className="collection-count">
                  <strong>{group.products.length}</strong>
                  <span>{group.products.length === 1 ? "Pieza disponible" : "Piezas disponibles"}</span>
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium uppercase tracking-[0.04em] text-gabinete-darkBrown">
                  {group.category}
                </h2>
                <span className="mt-6 inline-flex items-center gap-2 font-editorial text-sm font-semibold uppercase tracking-[0.12em] text-gabinete-brown">
                  Ver objetos <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
