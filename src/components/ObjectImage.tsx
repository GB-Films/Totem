import { useEffect, useState } from "react";
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
  const [imageIndex, setImageIndex] = useState(0);
  const preferredImages = compact
    ? [...(product.thumbnailImages ?? []), ...product.images]
    : [...(product.detailImages ?? []), ...product.images];
  const usableImages = preferredImages.filter((image) => image.trim().length > 0);
  const uploadedImage = usableImages[imageIndex];
  const imageSrc = uploadedImage?.startsWith("/") ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${uploadedImage}` : uploadedImage;
  const showPhoto = Boolean(imageSrc);

  useEffect(() => {
    setImageIndex(0);
  }, [compact, product.id, product.thumbnailImages, product.detailImages, product.images]);

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
          loading={compact ? "lazy" : "eager"}
          decoding="async"
          width={compact ? 640 : 1600}
          height={compact ? 640 : 1600}
          onError={() => setImageIndex((current) => current + 1)}
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
