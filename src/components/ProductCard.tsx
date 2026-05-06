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
      <div className="relative p-2 pb-0">
        <ObjectImage product={product} compact />
        <button
          type="button"
          aria-label={`Marcar ${product.name} como favorito`}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-gabinete-line/35 bg-gabinete-paperLight/60 text-gabinete-brown backdrop-blur-sm hover:bg-gabinete-paperLight"
        >
          <Heart size={15} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CategoryBadge category={product.category} />
          <span className={`availability-badge ${availabilityClass[product.availability]}`}>
            {product.availability}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl leading-tight text-gabinete-darkBrown">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 font-editorial text-xs leading-5 text-gabinete-muted">
          {product.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 2).map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between gap-3 border-t border-gabinete-line/25 pt-3">
            <p className="text-lg font-semibold text-gabinete-darkBrown">
              {formatCurrency(product.rentalPricePerDay)}
              <span className="font-editorial text-xs font-normal text-gabinete-muted"> / día</span>
            </p>
            <span className="rounded-full border border-gabinete-line/30 px-2 py-1 text-[11px] text-gabinete-muted">
              {product.status}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link to={`/producto/${product.id}`} className="gabinete-button-secondary px-3 py-2 text-center text-xs">
              <Eye size={15} />
              Ficha
            </Link>
            <button
              type="button"
              onClick={() => addProduct(product)}
              className="gabinete-button px-3 py-2 text-xs"
            >
              <Plus size={15} />
              {isSelected(product.id) ? "Otro" : "Sumar"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
