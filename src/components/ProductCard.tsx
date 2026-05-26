import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useSelection } from "../context/SelectionContext";
import type { Product } from "../types";
import { formatCurrency } from "../utils/format";
import { ObjectImage } from "./ObjectImage";

interface ProductCardProps {
  product: Product;
}

const specialBadges: Record<string, string> = {
  "EG-001": "Más pedido",
  "EG-003": "Nuevo",
};

export function ProductCard({ product }: ProductCardProps) {
  const { isSelected } = useSelection();
  const { isFavorite, toggleFavorite } = useFavorites();
  const selected = isSelected(product.id);
  const favorite = isFavorite(product.id);

  return (
    <article className={`product-card ${selected ? "is-selected" : ""}`}>
      <Link to={`/producto/${product.id}`} className="product-media" aria-label={`Ver ficha de ${product.name}`}>
        <ObjectImage product={product} compact showLabel={false} />
        {specialBadges[product.id] && <span className="product-badge">{specialBadges[product.id]}</span>}
        <button
          type="button"
          aria-label={`Marcar ${product.name} como favorito`}
          className={`favorite-btn ${favorite ? "is-favorite" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            toggleFavorite(product.id);
          }}
        >
          <Heart size={22} strokeWidth={1.8} fill={favorite ? "currentColor" : "none"} />
        </button>
      </Link>

      <div className="product-info">
        <Link to={`/producto/${product.id}`} className="product-title">
          {product.name}
        </Link>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-measures">{product.measurements}</p>

        <div className="product-bottom">
          <div className="product-price">
            <strong>{formatCurrency(product.rentalPricePerDay)}</strong>
            <span>/día</span>
          </div>
          <span className={`product-status status-${product.availability.toLowerCase()}`}>
            {product.availability}
          </span>
          <Link
            to={`/producto/${product.id}`}
            className="add-mini"
            aria-label={`Elegir fechas y sumar ${product.name} al carrito`}
            title="Elegir fechas"
          >
            <ShoppingCart size={16} />
          </Link>
          <Link to={`/producto/${product.id}`} className="detail-btn">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
