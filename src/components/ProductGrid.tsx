import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  totalCount?: number;
  onLoadMore?: () => void;
}

export function ProductGrid({ products, totalCount = products.length, onLoadMore }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="empty-catalog">
        <p>No encontramos objetos con esos filtros.</p>
        <span>Probá limpiar la búsqueda o elegir una categoría más amplia.</span>
      </div>
    );
  }

  const hasMore = products.length < totalCount;

  return (
    <>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="catalog-load-more">
        <p>
          Mostrando <strong>{products.length}</strong> de <strong>{totalCount}</strong> objetos
        </p>
        <div
          className="catalog-load-progress"
          role="progressbar"
          aria-label="Productos visibles"
          aria-valuemin={0}
          aria-valuemax={totalCount}
          aria-valuenow={products.length}
        >
          <span style={{ width: `${Math.min(100, (products.length / totalCount) * 100)}%` }} />
        </div>
        {hasMore && onLoadMore && (
          <button type="button" onClick={onLoadMore}>
            Ver 24 más
          </button>
        )}
      </div>
    </>
  );
}
