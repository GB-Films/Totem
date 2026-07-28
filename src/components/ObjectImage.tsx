import { useState } from "react";
import type { Product } from "../types";

interface ObjectImageProps {
  product: Product;
  compact?: boolean;
  showLabel?: boolean;
}

function ProductIllustration({ id, sigil }: { id: string; sigil: string }) {
  return (
    <div className="prop prop-generic" aria-hidden="true">
      <span>{sigil || id.slice(0, 2)}</span>
    </div>
  );
}

export function ObjectImage({ product, compact = false, showLabel = true }: ObjectImageProps) {
  const [failed, setFailed] = useState(false);
  const uploadedImage = product.images.find((image) => image.trim().length > 0);
  const imageSrc = uploadedImage?.startsWith("/") ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${uploadedImage}` : uploadedImage;
  const showPhoto = Boolean(imageSrc && !failed);

  return (
    <div
      className={`object-plate ${compact ? "object-plate-compact" : ""}`}
      aria-label={`Imagen de referencia de ${product.name}`}
      role="img"
    >
      {showPhoto ? (
        <img
          className="object-photo"
          src={imageSrc}
          alt={product.name}
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <div className="object-wall" />
          <div className="object-floor" />
          <ProductIllustration id={product.id} sigil={product.visual.sigil} />
        </>
      )}
      {showLabel && (
        <div className="object-label">
          <p>{product.id}</p>
          <h3>{product.name}</h3>
        </div>
      )}
    </div>
  );
}
