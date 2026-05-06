import { ArrowRight, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ProductFilters, type CatalogFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { categories, products } from "../data/products";
import type { Category } from "../types";

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const defaultChips = ["vintage", "estudio", "living", "oficina", "rodaje", "exterior"];

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
    tags: defaultChips,
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

  return (
    <div className="catalog-page">
      <div className="catalog-breadcrumb">
        <Link to="/">Inicio</Link>
        <ArrowRight size={13} />
        <span>Catálogo</span>
      </div>

      <div className="catalog-hero-row">
        <div>
          <h1>Catálogo de props</h1>
          <div className="title-separator"><span>✶</span></div>
          <p>Descubrí objetos únicos para cine, TV, publicidad, teatro y creación de contenido.</p>
        </div>

        <div className="catalog-search-wrap">
          <label className="catalog-search">
            <Search size={26} />
            <input
              value={filters.search}
              onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
              placeholder="¿Qué objeto estás buscando?"
              aria-label="Buscar objeto"
            />
            <button type="button" aria-label="Buscar">
              <ArrowRight size={24} />
            </button>
          </label>
        </div>
      </div>

      <div className="catalog-layout">
        <ProductFilters
          filters={filters}
          maxCatalogPrice={maxCatalogPrice}
          onChange={setFilters}
          resultCount={filteredProducts.length}
        />

        <section className="catalog-main">
          <div className="catalog-toolbar">
            <button type="button" className="filter-chip filter-chip-main">
              <SlidersHorizontal size={17} />
              Filtros
            </button>
            {defaultChips.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleChip(tag)}
                className={`filter-chip ${filters.tags.includes(tag) ? "is-active" : ""}`}
              >
                {tag}
                <X size={14} />
              </button>
            ))}
            <label className="sort-select">
              <span>Ordenar por:</span>
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
              <ChevronDown size={16} />
            </label>
          </div>

          <ProductGrid products={filteredProducts} />

          <div className="catalog-pagination" aria-label="Paginación">
            <button>←</button>
            <button className="is-current">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>39</button>
            <button>→</button>
          </div>

          <p className="catalog-count">Mostrando 1-{Math.min(filteredProducts.length, 8)} de {filteredProducts.length || 312} props</p>
        </section>
      </div>

      <div className="catalog-benefits">
        <div><span>▣</span><strong>Alquiler flexible</strong><em>Por día o por el período que necesites.</em></div>
        <div><span>▱</span><strong>Entrega y retiro</strong><em>A todo el país, coordinado a tu medida.</em></div>
        <div><span>☏</span><strong>Atención personalizada</strong><em>Te asesoramos para cada proyecto.</em></div>
      </div>
    </div>
  );
}
