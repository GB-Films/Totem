import { Armchair, BadgeCheck, Brush, Clapperboard, Minus, Palette, Shirt, Sun, Truck, X } from "lucide-react";
import type { Availability, Category } from "../types";
import { availableTags, categories, products } from "../data/products";

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

const categoryIcons: Record<Category, typeof Armchair> = {
  "Utilería": Clapperboard,
  "Mobiliario": Armchair,
  "Vestuario": Shirt,
  "Decoración": Palette,
  "Arte": Brush,
  "Exterior": Sun,
  "Oficina": BadgeCheck,
};

const styleTags = ["vintage", "clásico", "industrial", "minimalista", "rústico"];
const eraTags = ["época", "cine", "teatro", "publicidad", "hero prop"];

export function ProductFilters({ filters, maxCatalogPrice, onChange }: ProductFiltersProps) {
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
    <aside className="catalog-sidebar">
      <div className="category-list">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange({ ...filters, category })}
              className={filters.category === category ? "is-active" : ""}
            >
              <Icon size={20} strokeWidth={1.8} />
              <span>{category}</span>
              <em>({countByCategory(category)})</em>
            </button>
          );
        })}
      </div>

      <div className="filter-section is-open">
        <div className="filter-section-title">
          <strong>Estilo</strong>
          <Minus size={15} />
        </div>
        <div className="checkbox-list">
          {styleTags.map((tag) => (
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
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Época</strong>
          <span>+</span>
        </div>
        <div className="checkbox-list compact-list">
          {eraTags.map((tag) => (
            <label key={tag}>
              <input type="checkbox" checked={filters.tags.includes(tag)} onChange={() => toggleTag(tag)} />
              <span>{tag}</span>
              <em>({countByTag(tag)})</em>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Color</strong>
          <span>+</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Precio máximo</strong>
          <span>${filters.maxPrice.toLocaleString("es-AR")}</span>
        </div>
        <input
          type="range"
          min={0}
          max={maxCatalogPrice}
          step={500}
          value={filters.maxPrice}
          onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
        />
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Disponibilidad</strong>
          <Truck size={15} />
        </div>
        <select
          value={filters.availability}
          onChange={(event) => onChange({ ...filters, availability: event.target.value as CatalogFilters["availability"] })}
          className="side-select"
        >
          <option>Todas</option>
          <option>Disponible</option>
          <option>Consultar</option>
          <option>Reservado</option>
        </select>
      </div>

      <button type="button" onClick={clearFilters} className="clear-filters">
        <X size={14} />
        Limpiar filtros
      </button>

      <div className="hidden-tags" aria-hidden="true">
        {availableTags.join(", ")}
      </div>
    </aside>
  );
}
