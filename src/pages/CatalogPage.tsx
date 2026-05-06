import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ProductFilters, type CatalogFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { categories, products } from "../data/products";
import type { Category } from "../types";

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const quickFilterChips = ["vintage", "estudio", "living", "oficina", "rodaje", "exterior"];

export function CatalogPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("categoria");
  const initialSearch = searchParams.get("q") ?? "";
  const maxCatalogPrice = Math.max(...products.map((product) => product.rentalPricePerDay));

  const [filters, setFilters] = useState<CatalogFilters>({
    search: initialSearch,
    category:
      initialCategory && categories.includes(initialCategory as Category)
        ? (initialCategory as CatalogFilters["category"])
        : "Todas",
    tags: [],
    maxPrice: maxCatalogPrice,
    availability: "Todas",
    sort: "featured",
  });

  const filteredProducts = useMemo(() => {
    const query = normalize(filters.search.trim());
    const filtered = products.filter((product) => {
      const searchable = normalize(
        [
          product.name,
          product.description,
          product.category,
          product.curiosities,
          product.tags.join(" "),
          product.eraStyle,
          product.material,
        ].join(" "),
      );

      const matchesSearch = query.length === 0 || searchable.includes(query);
      const matchesCategory = filters.category === "Todas" || product.category === filters.category;
      const matchesTags =
        filters.tags.length === 0 || filters.tags.some((tag) => product.tags.includes(tag));
      const matchesPrice = product.rentalPricePerDay <= filters.maxPrice;
      const matchesAvailability =
        filters.availability === "Todas" || product.availability === filters.availability;

      return matchesSearch && matchesCategory && matchesTags && matchesPrice && matchesAvailability;
    });

    return filtered.sort((a, b) => {
      if (filters.sort === "name") return a.name.localeCompare(b.name);
      if (filters.sort === "priceAsc") return a.rentalPricePerDay - b.rentalPricePerDay;
      if (filters.sort === "priceDesc") return b.rentalPricePerDay - a.rentalPricePerDay;
      return b.featuredScore - a.featuredScore;
    });
  }, [filters]);

  const toggleChip = (tag: string) => {
    setFilters((current) => ({
      ...current,
      tags: current.tags.includes(tag)
        ? current.tags.filter((candidate) => candidate !== tag)
        : [...current.tags, tag],
    }));
  };

  const clearQuickFilters = () => {
    setFilters((current) => ({ ...current, tags: [] }));
  };

  return (
    <div className="catalog-page-v3">
      <div className="catalog-breadcrumb-v3">
        <Link to="/">Inicio</Link>
        <ArrowRight size={12} />
        <span>Catálogo</span>
      </div>

      <section className="catalog-intro-v3">
        <div className="catalog-title-block-v3">
          <h1>Catálogo de props</h1>
          <div className="title-separator"><span>✶</span></div>
          <p>Objetos únicos para cine, TV, publicidad, teatro y creación de contenido.</p>
        </div>

        <div className="catalog-search-block-v3">
          <label className="catalog-search-v3">
            <Search size={26} strokeWidth={1.8} />
            <input
              value={filters.search}
              onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
              placeholder="¿Qué objeto estás buscando?"
              aria-label="Buscar objeto"
            />
          </label>

          <div className="catalog-toolbar-v3">
            <button type="button" className="catalog-filter-button-v3">
              <SlidersHorizontal size={16} />
              Filtros
            </button>

            {quickFilterChips.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleChip(tag)}
                className={`catalog-chip-v3 ${filters.tags.includes(tag) ? "is-active" : ""}`}
              >
                {tag}
                {filters.tags.includes(tag) && <X size={13} />}
              </button>
            ))}

            {filters.tags.length > 0 && (
              <button type="button" onClick={clearQuickFilters} className="catalog-clear-v3">
                Limpiar
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="catalog-body-v3">
        <ProductFilters
          filters={filters}
          maxCatalogPrice={maxCatalogPrice}
          onChange={setFilters}
          resultCount={filteredProducts.length}
        />

        <section className="catalog-results-v3">
          <div className="catalog-results-head-v3">
            <p>
              <strong>{filteredProducts.length}</strong> objetos encontrados
            </p>

            <label>
              <span>Ordenar:</span>
              <select
                value={filters.sort}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, sort: event.target.value as CatalogFilters["sort"] }))
                }
              >
                <option value="featured">Más relevantes</option>
                <option value="name">Nombre</option>
                <option value="priceAsc">Precio menor a mayor</option>
                <option value="priceDesc">Precio mayor a menor</option>
              </select>
            </label>
          </div>

          <ProductGrid products={filteredProducts} />
        </section>
      </div>
    </div>
  );
}
