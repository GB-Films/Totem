import { Truck, X } from "lucide-react";
import type { Availability, Category, Product } from "../types";

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
  products: Product[];
  categories: Category[];
  availableTags: string[];
}

export function ProductFilters({
  filters,
  maxCatalogPrice,
  onChange,
  resultCount,
  products,
  categories,
  availableTags,
}: ProductFiltersProps) {
  const visibleTags = availableTags.slice(0, 12);
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

  const toggleTag = (tag: string) => {
    const tags = filters.tags.includes(tag)
      ? filters.tags.filter((candidate) => candidate !== tag)
      : [...filters.tags, tag];
    onChange({ ...filters, tags });
  };

  const countByCategory = (category: Category) => products.filter((product) => product.category === category).length;
  const countByTag = (tag: string) => products.filter((product) => product.tags.includes(tag)).length;

  return (
    <aside className="catalog-sidebar-v3">
      <div className="filter-summary-v3">
        <span>Filtrar catálogo</span>
        <em>{resultCount} resultados</em>
      </div>

      <div className="category-list-v3">
        <button
          type="button"
          onClick={() => onChange({ ...filters, category: "Todas" })}
          className={filters.category === "Todas" ? "is-active" : ""}
        >
          <span>Todos</span>
          <em>{products.length}</em>
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange({ ...filters, category })}
            className={filters.category === category ? "is-active" : ""}
          >
            <span>{category}</span>
            <em>{countByCategory(category)}</em>
          </button>
        ))}
      </div>

      <details className="filter-section-v3" open>
        <summary className="filter-section-title-v3">
          <strong>Etiquetas</strong>
          <span>{filters.tags.length || "+"}</span>
        </summary>
        <div className="checkbox-list-v3">
          {visibleTags.map((tag) => (
            <label key={tag}>
              <input
                type="checkbox"
                checked={filters.tags.includes(tag)}
                onChange={() => toggleTag(tag)}
              />
              <span>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
              <em>({countByTag(tag)})</em>
            </label>
          ))}
        </div>
      </details>

      <div className="filter-section-v3">
        <div className="filter-section-title-v3">
          <strong>Precio semanal máximo</strong>
          <span>${filters.maxPrice.toLocaleString("es-AR")}</span>
        </div>
        <input
          type="range"
          min={0}
          max={Math.max(500, maxCatalogPrice)}
          step={500}
          value={filters.maxPrice}
          onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
        />
      </div>

      <div className="filter-section-v3">
        <div className="filter-section-title-v3">
          <strong>Disponibilidad</strong>
          <Truck size={15} />
        </div>
        <select
          value={filters.availability}
          onChange={(event) => onChange({ ...filters, availability: event.target.value as CatalogFilters["availability"] })}
          className="side-select-v3"
        >
          <option>Todas</option>
          <option>Disponible</option>
          <option>Consultar</option>
          <option>Reservado</option>
        </select>
      </div>

      <button type="button" onClick={clearFilters} className="clear-filters-v3">
        <X size={14} />
        Limpiar filtros
      </button>

      <div className="hidden-tags" aria-hidden="true">
        {availableTags.join(", ")}
      </div>
    </aside>
  );
}
