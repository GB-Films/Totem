import { Eye, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import type { Product } from "../types";
import { formatCurrency } from "../utils/format";
import { CategoryBadge } from "./CategoryBadge";
import { ObjectImage } from "./ObjectImage";
import { TagPill } from "./TagPill";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addProduct, isSelected } = useSelection();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-bone/10 bg-ash/70 shadow-cabinet transition hover:-translate-y-1 hover:border-brass/40">
      <ObjectImage product={product} compact />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <CategoryBadge category={product.category} />
          <span className="rounded-full bg-coal/70 px-2.5 py-1 text-xs text-bone/65">
            {product.status}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight text-bone">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-bone/65">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-auto pt-5">
          <p className="text-xs uppercase tracking-[0.22em] text-brass/80">Precio desde</p>
          <p className="mt-1 text-xl font-semibold text-bone">
            {formatCurrency(product.rentalPricePerDay)}
            <span className="text-sm font-normal text-bone/55"> / día</span>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              to={`/producto/${product.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-bone/15 px-3 py-2 text-sm font-medium text-bone transition hover:border-brass hover:bg-brass/10"
            >
              <Eye size={16} />
              Ver objeto
            </Link>
            <button
              type="button"
              onClick={() => addProduct(product)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brass px-3 py-2 text-sm font-semibold text-coal transition hover:bg-bone"
            >
              <Plus size={16} />
              {isSelected(product.id) ? "Sumar otro" : "Sumar"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
