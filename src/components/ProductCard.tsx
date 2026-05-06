import { Eye, Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import type { Availability, Product } from "../types";
import { formatCurrency } from "../utils/format";
import { CategoryBadge } from "./CategoryBadge";
import { ObjectImage } from "./ObjectImage";
import { TagPill } from "./TagPill";

interface ProductCardProps {
  product: Product;
}

const availabilityClass: Record<Availability, string> = {
  Disponible: "availability-disponible",
  Consultar: "availability-consultar",
  Reservado: "availability-reservado",
};

export function ProductCard({ product }: ProductCardProps) {
  const { addProduct, isSelected } = useSelection();

  return (
    <article className="object-card group flex h-full flex-col transition">
      <div className="relative p-3 pb-0">
        <ObjectImage product={product} compact />
        <button
          type="button"
          aria-label={`Marcar ${product.name} como favorito`}
          className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-gabinete-line/35 bg-gabinete-paperLight/60 text-gabinete-brown backdrop-blur-sm hover:bg-gabinete-paperLight"
        >
          <Heart size={16} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CategoryBadge category={product.category} />
          <span className={`availability-badge ${availabilityClass[product.availability]}`}>
            {product.availability}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight text-gabinete-darkBrown">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 font-editorial text-sm leading-6 text-gabinete-muted">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-3 border-t border-gabinete-line/25 pt-4">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.18em] text-gabinete-faint">
                Precio desde
              </p>
              <p className="mt-1 text-xl font-semibold text-gabinete-darkBrown">
                {formatCurrency(product.rentalPricePerDay)}
                <span className="font-editorial text-sm font-normal text-gabinete-muted"> / día</span>
              </p>
            </div>
            <span className="rounded-full border border-gabinete-line/30 px-3 py-1 text-xs text-gabinete-muted">
              {product.status}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link to={`/producto/${product.id}`} className="gabinete-button-secondary px-3 py-2 text-center">
              <Eye size={16} />
              Ver objeto
            </Link>
            <button type="button" onClick={() => addProduct(product)} className="gabinete-button px-3 py-2">
              <Plus size={16} />
              {isSelected(product.id) ? "Sumar otro" : "Sumar"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
