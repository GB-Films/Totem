import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Availability, Category } from "../types";
import { availableTags, categories } from "../data/products";
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
    <aside className="rounded-lg border border-bone/10 bg-coal/60 p-4 shadow-cabinet lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-bone">
          <SlidersHorizontal size={18} />
          <h2 className="font-display text-2xl">Filtros</h2>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center gap-1 rounded-md border border-bone/10 px-2 py-1 text-xs text-bone/70 hover:border-brass hover:text-bone"
        >
          <X size={14} />
          Limpiar
        </button>
      </div>

      <label className="mt-5 block text-sm font-medium text-bone" htmlFor="catalog-search">
        Buscar en el archivo
      </label>
      <div className="mt-2 flex items-center rounded-md border border-bone/15 bg-ink px-3 focus-within:border-brass">
        <Search size={17} className="text-bone/45" />
        <input
          id="catalog-search"
          value={filters.search}
          onChange={(event) => onChange({ ...filters, search: event.target.value })}
          className="w-full bg-transparent px-3 py-3 text-sm text-bone outline-none placeholder:text-bone/35"
          placeholder="teléfono, ritual, policial..."
        />
      </div>

      <label className="mt-5 block text-sm font-medium text-bone" htmlFor="category-filter">
        Categoría
      </label>
      <select
        id="category-filter"
        value={filters.category}
        onChange={(event) =>
          onChange({ ...filters, category: event.target.value as CatalogFilters["category"] })
        }
        className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-sm text-bone outline-none focus:border-brass"
      >
        <option>Todas</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <label className="mt-5 block text-sm font-medium text-bone" htmlFor="price-filter">
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
        className="mt-3 w-full accent-brass"
      />
      <p className="mt-1 text-sm text-bone/60">Hasta ${filters.maxPrice.toLocaleString("es-AR")}</p>

      <label className="mt-5 block text-sm font-medium text-bone" htmlFor="availability-filter">
        Disponibilidad
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
        className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-sm text-bone outline-none focus:border-brass"
      >
        <option>Todas</option>
        <option>Disponible</option>
        <option>Consultar</option>
        <option>Reservado</option>
      </select>

      <label className="mt-5 block text-sm font-medium text-bone" htmlFor="sort-filter">
        Ordenar por
      </label>
      <select
        id="sort-filter"
        value={filters.sort}
        onChange={(event) =>
          onChange({ ...filters, sort: event.target.value as CatalogFilters["sort"] })
        }
        className="mt-2 w-full rounded-md border border-bone/15 bg-ink px-3 py-3 text-sm text-bone outline-none focus:border-brass"
      >
        <option value="featured">Más destacados</option>
        <option value="name">Nombre</option>
        <option value="priceAsc">Precio menor a mayor</option>
        <option value="priceDesc">Precio mayor a menor</option>
      </select>

      <div className="mt-5">
        <p className="mb-3 text-sm font-medium text-bone">Tags</p>
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

      <p className="mt-5 rounded-md border border-brass/20 bg-brass/10 px-3 py-2 text-sm text-bone/75">
        {resultCount} objeto{resultCount === 1 ? "" : "s"} listo{resultCount === 1 ? "" : "s"} para escena.
      </p>
    </aside>
  );
}
