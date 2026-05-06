import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="parchment-panel p-8 text-center">
        <p className="font-display text-3xl text-gabinete-darkBrown">El gabinete cerró ese cajón.</p>
        <p className="mt-2 font-editorial text-gabinete-muted">
          Probá con menos filtros o una palabra menos específica.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
