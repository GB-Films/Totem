import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import type { Product } from "../types";
import { formatCurrency } from "../utils/format";
import { ObjectImage } from "./ObjectImage";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addProduct, isSelected } = useSelection();

  return (
    <article className="object-card inventory-card group flex h-full flex-col transition">
      <Link
        to={`/producto/${product.id}`}
        className="relative block p-2 pb-0"
        aria-label={`Ver ficha de ${product.name}`}
      >
        <ObjectImage product={product} compact showLabel={false} />
        <span className="absolute left-4 top-4 rounded-full border border-gabinete-oldGold/35 bg-gabinete-exterior/70 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.14em] text-gabinete-oldGold">
          {product.id}
        </span>
        <button
          type="button"
          aria-label={`Marcar ${product.name} como favorito`}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-gabinete-oldGold/35 bg-gabinete-exterior/65 text-gabinete-oldGold backdrop-blur-sm hover:bg-gabinete-brown"
          onClick={(event) => event.preventDefault()}
        >
          <Heart size={15} />
        </button>
      </Link>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-3">
        <div className="flex items-start justify-between gap-3">
          <Link
            to={`/producto/${product.id}`}
            className="font-display text-[1.08rem] leading-tight text-gabinete-paperLight hover:text-gabinete-oldGold"
          >
            {product.name}
          </Link>
          <p className="shrink-0 font-display text-base font-semibold text-gabinete-oldGold">
            {formatCurrency(product.rentalPricePerDay)}
            <span className="font-editorial text-xs font-normal text-gabinete-paper/70"> /día</span>
          </p>
        </div>

        <p className="mt-2 line-clamp-2 min-h-10 font-editorial text-[0.82rem] leading-5 text-gabinete-paper/72">
          {product.description}
        </p>

        <div className="mt-3 rounded-[9px] border border-gabinete-oldGold/28 bg-gabinete-exterior2/58 p-2.5">
          <div className="flex items-end gap-2">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gabinete-oldGold/35 bg-gabinete-oldGold/10 font-display text-gabinete-oldGold">
              {product.visual.sigil}
            </div>
            <p className="line-clamp-2 flex-1 font-editorial text-[0.76rem] font-semibold leading-4 text-gabinete-oldGold">
              CURIOSIDAD: {product.curiosities}
            </p>
            <button
              type="button"
              onClick={() => addProduct(product)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gabinete-oldGold/50 bg-gabinete-oldGold/12 text-gabinete-oldGold hover:bg-gabinete-oldGold hover:text-gabinete-exterior"
              aria-label={`${isSelected(product.id) ? "Sumar otro" : "Sumar"} ${product.name} al carrito`}
              title={isSelected(product.id) ? "Sumar otro" : "Sumar al carrito"}
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>

        <Link
          to={`/producto/${product.id}`}
          className="mt-2 inline-flex items-center justify-end gap-1.5 font-display text-[11px] uppercase tracking-[0.12em] text-gabinete-paper/58 hover:text-gabinete-oldGold"
        >
          Ficha del objeto
          <Eye size={13} />
        </Link>
      </div>
    </article>
  );
}
