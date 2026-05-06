import type { Product } from "../types";

interface ObjectImageProps {
  product: Product;
  compact?: boolean;
}

const toneLabels: Record<Product["visual"]["tone"], string> = {
  brass: "from-brass/45 via-coal to-ash",
  green: "from-bottle/70 via-coal to-ash",
  red: "from-blood/70 via-coal to-ash",
  blue: "from-slate-700 via-coal to-ash",
  paper: "from-parchment/45 via-coal to-ash",
  copper: "from-copper/55 via-coal to-ash",
};

export function ObjectImage({ product, compact = false }: ObjectImageProps) {
  return (
    <div
      className={`object-plate relative overflow-hidden rounded-md border border-bone/10 bg-gradient-to-br ${toneLabels[product.visual.tone]} ${
        compact ? "aspect-[4/3]" : "aspect-[16/12]"
      }`}
      aria-label={`Imagen de referencia de ${product.name}`}
      role="img"
    >
      <div className="absolute inset-0 object-plate-texture" />
      <div className="absolute inset-5 rounded-full border border-brass/20" />
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brass/25 bg-coal/55 shadow-relic backdrop-blur-sm sm:h-32 sm:w-32">
        <span className="font-display text-5xl text-bone/85 sm:text-7xl">{product.visual.sigil}</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-brass/80">{product.id}</p>
          <p className="mt-1 line-clamp-2 font-display text-xl leading-none text-bone sm:text-2xl">
            {product.name}
          </p>
        </div>
        <span className="hidden rounded-full border border-bone/15 bg-coal/50 px-3 py-1 text-xs text-bone/70 sm:inline-flex">
          placa de archivo
        </span>
      </div>
    </div>
  );
}
