import { SlidersHorizontal, X } from "lucide-react";
import type { Availability, Category } from "../types";
import { availableTags } from "../data/products";
import { TagPill } from "./TagPill";

export interface CatalogFilters {
  search: string;
  category: "Todas" | Category;
  tags: string[];
  maxPrice: number;
  availability: "Todas" | Availability;
  sort: "featured" | "name" | "priceAsc" | "priceDesc";
}

interface ProductFiltersProps {
  filters: CatalogFilters;
  maxCatalogPrice: number;
  onChange: (filters: CatalogFilters) => void;
  resultCount: number;
}

export function ProductFilters({
  filters,
  maxCatalogPrice,
  onChange,
  resultCount,
}: ProductFiltersProps) {
  const toggleTag = (tag: string) => {
    const tags = filters.tags.includes(tag)
      ? filters.tags.filter((candidate) => candidate !== tag)
      : [...filters.tags, tag];
    onChange({ ...filters, tags });
  };

  const clearFilters = () => {
    onChange({
      search: "",
      category: "Todas",
      tags: [],
      maxPrice: maxCatalogPrice,
      availability: "Todas",
      sort: "featured",
    });
  };

  return (
    <aside className="parchment-panel p-4 lg:sticky lg:top-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-gabinete-darkBrown">
          <SlidersHorizontal size={18} />
          <h2 className="font-display text-lg uppercase tracking-[0.12em]">Explora y filtra</h2>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center gap-1 rounded-full border border-gabinete-line/35 px-3 py-1.5 text-xs text-gabinete-muted hover:border-gabinete-brown hover:text-gabinete-darkBrown"
        >
          <X size={14} />
          Limpiar
        </button>
      </div>

      <p className="mt-4 rounded-md border border-gabinete-line/30 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-sm text-gabinete-muted">
        {resultCount} objeto{resultCount === 1 ? "" : "s"} en inventario.
      </p>

      <label
        className="mt-5 block font-display text-xs uppercase tracking-[0.14em] text-gabinete-brown"
        htmlFor="price-filter"
      >
        Precio máximo por día
      </label>
      <input
        id="price-filter"
        type="range"
        min={0}
        max={maxCatalogPrice}
        step={500}
        value={filters.maxPrice}
        onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
        className="mt-3 w-full"
      />
      <p className="mt-1 text-sm text-gabinete-muted">
        Hasta ${filters.maxPrice.toLocaleString("es-AR")}
      </p>

      <label
        className="mt-5 block font-display text-xs uppercase tracking-[0.14em] text-gabinete-brown"
        htmlFor="availability-filter"
      >
        Estado de archivo
      </label>
      <select
        id="availability-filter"
        value={filters.availability}
        onChange={(event) =>
          onChange({
            ...filters,
            availability: event.target.value as CatalogFilters["availability"],
          })
        }
        className="gabinete-input mt-2 px-3 py-3 text-sm"
      >
        <option>Todas</option>
        <option>Disponible</option>
        <option>Consultar</option>
        <option>Reservado</option>
      </select>

      <label
        className="mt-5 block font-display text-xs uppercase tracking-[0.14em] text-gabinete-brown"
        htmlFor="sort-filter"
      >
        Ordenar el inventario
      </label>
      <select
        id="sort-filter"
        value={filters.sort}
        onChange={(event) =>
          onChange({ ...filters, sort: event.target.value as CatalogFilters["sort"] })
        }
        className="gabinete-input mt-2 px-3 py-3 text-sm"
      >
        <option value="featured">Más destacados</option>
        <option value="name">Nombre</option>
        <option value="priceAsc">Precio menor a mayor</option>
        <option value="priceDesc">Precio mayor a menor</option>
      </select>

      <div className="mt-5">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.14em] text-gabinete-brown">
          Etiquetas
        </p>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <TagPill
              key={tag}
              tag={tag}
              active={filters.tags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
