import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useSelection } from "../context/SelectionContext";
import type { Product } from "../types";
import { formatCurrency } from "../utils/format";
import { ObjectImage } from "./ObjectImage";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isSelected } = useSelection();
  const { isFavorite, toggleFavorite } = useFavorites();
  const selected = isSelected(product.id);
  const favorite = isFavorite(product.id);

  return (
    <article className={`product-card ${selected ? "is-selected" : ""}`}>
      <div className="product-media">
        <Link to={`/producto/${product.id}`} aria-label={`Ver ficha de ${product.name}`}>
          <ObjectImage product={product} compact showLabel={false} />
          {product.featuredScore >= 90 && <span className="product-badge">Destacado</span>}
        </Link>
        <button
          type="button"
          aria-label={favorite ? `Quitar ${product.name} de favoritos` : `Guardar ${product.name} en favoritos`}
          className={`favorite-btn ${favorite ? "is-favorite" : ""}`}
          onClick={() => toggleFavorite(product.id)}
        >
          <Heart size={22} strokeWidth={1.8} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="product-info">
        <div className="product-heading">
          <p className="product-category">{product.category} · {product.id}</p>
          <Link to={`/producto/${product.id}`} className="product-title">
            {product.name}
          </Link>
        </div>
        <p className="product-description">
          {product.description || "Consultanos por detalles, medidas y opciones para tu producción."}
        </p>
        {product.measurements && <p className="product-measures">{product.measurements}</p>}

        <div className="product-bottom">
          <div className="product-price">
            <strong>{product.rentalPricePerDay > 0 ? formatCurrency(product.rentalPricePerDay) : "Consultar"}</strong>
            {product.rentalPricePerDay > 0 && <span>/día</span>}
          </div>
          <span className={`product-status status-${product.availability.toLowerCase()}`}>
            {product.availability}
          </span>
          <Link to={`/producto/${product.id}`} className="detail-btn">
            Ver ficha <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
