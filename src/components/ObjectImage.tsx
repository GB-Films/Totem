import { useState } from "react";
import type { Product } from "../types";

interface ObjectImageProps {
  product: Product;
  compact?: boolean;
  showLabel?: boolean;
}

function ProductIllustration({ id, sigil }: { id: string; sigil: string }) {
  switch (id) {
    case "EG-001":
      return <div className="prop prop-sofa" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-002":
      return <div className="prop prop-chair" aria-hidden="true"><span>DIRECTOR</span><i /><b /></div>;
    case "EG-003":
      return <div className="prop prop-spotlight" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-004":
      return <div className="prop prop-clapper" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-005":
      return <div className="prop prop-suitcase" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-006":
      return <div className="prop prop-bust" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-007":
      return <div className="prop prop-typewriter" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-008":
      return <div className="prop prop-coatrack" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-009":
      return <div className="prop prop-lamp" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-010":
      return <div className="prop prop-screen" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-011":
      return <div className="prop prop-globe" aria-hidden="true"><span /><i /><b /></div>;
    case "EG-012":
      return <div className="prop prop-hat" aria-hidden="true"><span /><i /><b /></div>;
    default:
      return <div className="prop prop-generic" aria-hidden="true"><span>{sigil}</span></div>;
  }
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
