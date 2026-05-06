import type { Product } from "../types";

interface ObjectImageProps {
  product: Product;
  compact?: boolean;
  showLabel?: boolean;
}

const toneLabels: Record<Product["visual"]["tone"], string> = {
  brass: "from-gabinete-oldGold/55 via-gabinete-paper2 to-gabinete-brown/35",
  green: "from-gabinete-available/35 via-gabinete-paper2 to-gabinete-brown/35",
  red: "from-gabinete-error/30 via-gabinete-paper2 to-gabinete-brown/35",
  blue: "from-gabinete-exterior3/30 via-gabinete-paper2 to-gabinete-brown/30",
  paper: "from-gabinete-paperLight via-gabinete-paper2 to-gabinete-paper3",
  copper: "from-gabinete-copper/38 via-gabinete-paper2 to-gabinete-brown/32",
};

export function ObjectImage({ product, compact = false, showLabel = true }: ObjectImageProps) {
  return (
    <div
      className={`object-plate relative overflow-hidden rounded-[9px] border border-gabinete-line/35 bg-gradient-to-br ${toneLabels[product.visual.tone]} ${
        compact ? "aspect-[5/3]" : "aspect-[5/4]"
      }`}
      aria-label={`Imagen de referencia de ${product.name}`}
      role="img"
    >
      <div className="absolute inset-0 object-plate-texture" />
      <div className="absolute inset-4 rounded-[8px] border border-gabinete-paperLight/20" />
      <div className="absolute left-1/2 top-[43%] grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gabinete-paperLight/25 bg-gabinete-darkBrown/30 shadow-relic backdrop-blur-[1px] sm:h-32 sm:w-32">
        <span className="font-display text-5xl text-gabinete-paperLight/88 sm:text-7xl">
          {product.visual.sigil}
        </span>
      </div>
      {showLabel && (
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display text-[10px] uppercase tracking-[0.28em] text-gabinete-paperLight/78">
            {product.id}
          </p>
          <p className="mt-1 line-clamp-2 font-display text-xl leading-none text-gabinete-paperLight sm:text-2xl">
            {product.name}
          </p>
        </div>
      )}
    </div>
  );
}
