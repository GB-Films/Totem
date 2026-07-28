import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ProductFilters, type CatalogFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { useCatalog } from "../context/CatalogContext";
import type { Category } from "../types";

const PRODUCTS_PER_PAGE = 24;

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function CatalogPage() {
  const [searchParams] = useSearchParams();
  const { products, categories, availableTags, loading, error } = useCatalog();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const initialCategory = searchParams.get("categoria");
  const initialSearch = searchParams.get("q") ?? "";
  const maxCatalogPrice = Math.max(0, ...products.map((product) => product.rentalPricePerWeek));
  const quickFilterChips = availableTags.slice(0, 6);

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

  useEffect(() => {
    if (maxCatalogPrice > 0) {
      setFilters((current) => ({
        ...current,
        maxPrice: current.maxPrice === 0 ? maxCatalogPrice : Math.min(current.maxPrice, maxCatalogPrice),
      }));
    }
  }, [maxCatalogPrice]);

  useEffect(() => {
    if (initialCategory && categories.includes(initialCategory as Category)) {
      setFilters((current) => ({ ...current, category: initialCategory as Category }));
    }
  }, [categories, initialCategory]);

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
      const matchesPrice = product.rentalPricePerWeek <= filters.maxPrice;
      const matchesAvailability =
        filters.availability === "Todas" || product.availability === filters.availability;

      return matchesSearch && matchesCategory && matchesTags && matchesPrice && matchesAvailability;
    });

    return filtered.sort((a, b) => {
      if (filters.sort === "name") return a.name.localeCompare(b.name);
      if (filters.sort === "priceAsc") return a.rentalPricePerWeek - b.rentalPricePerWeek;
      if (filters.sort === "priceDesc") return b.rentalPricePerWeek - a.rentalPricePerWeek;
      return b.featuredScore - a.featuredScore;
    });
  }, [filters, products]);

  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [
    filters.search,
    filters.category,
    filters.tags,
    filters.maxPrice,
    filters.availability,
    filters.sort,
  ]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

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

  const setCategory = (category: CatalogFilters["category"]) => {
    setFilters((current) => ({ ...current, category }));
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
          <p className="eyebrow">Archivo disponible</p>
          <h1>Catálogo de props</h1>
          <p>Filtrá por tipo, estilo, uso, precio o disponibilidad. Cada ficha incluye medidas, estado y calendario.</p>
        </div>

        <div className="catalog-search-block-v3">
          <p className="mobile-search-kicker">¿Qué estás buscando?</p>
          <label className="catalog-search-v3">
            <Search size={26} strokeWidth={1.8} />
            <input
              value={filters.search}
              onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
              placeholder="¿Qué objeto estás buscando?"
              aria-label="Buscar objeto"
            />
          </label>

          <div className="mobile-category-strip-v3" aria-label="Categorías rápidas">
            <button
              type="button"
              onClick={() => setCategory("Todas")}
              className={filters.category === "Todas" ? "is-active" : ""}
            >
              Todo
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setCategory(category)}
                className={filters.category === category ? "is-active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="catalog-toolbar-v3">
            <button
              type="button"
              className="catalog-filter-button-v3"
              onClick={() => setFiltersOpen(true)}
              aria-expanded={filtersOpen}
            >
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
        <div className={`catalog-filters-shell-v3 ${filtersOpen ? "is-open" : ""}`}>
          <button
            type="button"
            className="catalog-filter-backdrop-v3"
            aria-label="Cerrar filtros"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="catalog-filter-drawer-v3">
            <div className="catalog-filter-drawer-head-v3">
              <strong>Filtros</strong>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Cerrar filtros">
                <X size={18} />
              </button>
            </div>
            <ProductFilters
              filters={filters}
              maxCatalogPrice={maxCatalogPrice}
              onChange={setFilters}
              resultCount={filteredProducts.length}
              products={products}
              categories={categories}
              availableTags={availableTags}
            />
          </div>
        </div>

        <section className="catalog-results-v3">
          <div className="catalog-results-head-v3">
            <p>
              <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "objeto encontrado" : "objetos encontrados"}
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

          {loading ? (
            <div className="catalog-loading" role="status">
              <span />
              <p>Abriendo el catálogo…</p>
            </div>
          ) : error ? (
            <div className="catalog-error" role="alert">
              <strong>No pudimos abrir el catálogo.</strong>
              <p>{error}</p>
              <button type="button" onClick={() => window.location.reload()}>Reintentar</button>
            </div>
          ) : (
            <ProductGrid
              products={visibleProducts}
              totalCount={filteredProducts.length}
              onLoadMore={() =>
                setVisibleCount((current) =>
                  Math.min(current + PRODUCTS_PER_PAGE, filteredProducts.length),
                )
              }
            />
          )}
        </section>
      </div>
    </div>
  );
}
