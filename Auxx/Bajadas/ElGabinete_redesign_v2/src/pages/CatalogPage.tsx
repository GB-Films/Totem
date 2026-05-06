import { Search, SlidersHorizontal, X } from "lucide-react";
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
  }, [filters, maxCatalogPrice]);

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
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mb-6 flex items-center gap-2 font-editorial text-sm text-gabinete-muted">
        <Link to="/" className="hover:text-gabinete-darkBrown">Inicio</Link>
        <span>›</span>
        <span className="text-gabinete-darkBrown">Catálogo</span>
      </div>

      <section className="rounded-[30px] border border-gabinete-line bg-white/50 p-6 shadow-paper sm:p-8 lg:p-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(520px,740px)] xl:items-end">
          <div>
            <p className="eyebrow">Catálogo de props</p>
            <h1 className="mt-3 max-w-[680px] font-display text-[clamp(3.5rem,5.8vw,6.1rem)] leading-[0.94] tracking-[-0.05em] text-gabinete-darkBrown">
              Encontrá por objeto, estilo o tipo de proyecto.
            </h1>
            <p className="mt-5 max-w-[640px] font-editorial text-lg leading-8 text-gabinete-muted">
              Pensamos el catálogo para que puedas entrar por lo que necesitás: una pieza puntual, una categoría,
              un estilo visual o una atmósfera de rodaje.
            </p>
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-4 rounded-full border border-gabinete-darkBrown bg-white px-6 py-4 shadow-paper">
              <Search className="h-7 w-7 shrink-0 text-gabinete-darkBrown" strokeWidth={1.8} />
              <input
                value={filters.search}
                onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
                placeholder="¿Qué objeto estás buscando?"
                aria-label="Buscar objeto"
                className="w-full border-0 bg-transparent font-display text-2xl text-gabinete-darkBrown outline-none placeholder:text-gabinete-faint sm:text-3xl"
              />
            </label>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-gabinete-line bg-gabinete-paperLight px-5 py-3 font-editorial text-sm font-semibold text-gabinete-darkBrown"
              >
                <SlidersHorizontal size={16} />
                Filtros
              </button>

              {quickFilterChips.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleChip(tag)}
                  className={`rounded-full border px-5 py-3 font-editorial text-sm transition ${
                    filters.tags.includes(tag)
                      ? "border-gabinete-darkBrown bg-gabinete-darkBrown text-white"
                      : "border-gabinete-line bg-white/80 text-gabinete-darkBrown"
                  }`}
                >
                  {tag}
                </button>
              ))}

              {filters.tags.length > 0 && (
                <button
                  type="button"
                  onClick={clearQuickFilters}
                  className="inline-flex items-center gap-2 rounded-full border border-gabinete-line bg-white/70 px-4 py-3 font-editorial text-sm text-gabinete-muted"
                >
                  <X size={14} /> Limpiar
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
        <ProductFilters
          filters={filters}
          maxCatalogPrice={maxCatalogPrice}
          onChange={setFilters}
          resultCount={filteredProducts.length}
        />

        <section>
          <div className="mb-5 flex flex-col gap-3 rounded-[20px] border border-gabinete-line bg-white/45 px-5 py-4 shadow-paper sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-editorial text-sm uppercase tracking-[0.12em] text-gabinete-faint">
                Resultados
              </p>
              <p className="mt-1 font-editorial text-lg text-gabinete-darkBrown">
                {filteredProducts.length} objetos disponibles para explorar
              </p>
            </div>

            <label className="inline-flex items-center gap-3 rounded-full border border-gabinete-line bg-white px-4 py-3">
              <span className="font-editorial text-sm text-gabinete-muted">Ordenar por</span>
              <select
                value={filters.sort}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, sort: event.target.value as CatalogFilters["sort"] }))
                }
                className="border-0 bg-transparent font-editorial font-medium text-gabinete-darkBrown outline-none"
              >
                <option value="featured">Más relevantes</option>
                <option value="name">Nombre</option>
                <option value="priceAsc">Precio menor a mayor</option>
                <option value="priceDesc">Precio mayor a menor</option>
              </select>
            </label>
          </div>

          <ProductGrid products={filteredProducts} />

          <div className="mt-8 grid gap-4 rounded-[24px] border border-gabinete-line bg-white/50 p-6 text-left shadow-paper md:grid-cols-3">
            <div>
              <p className="font-editorial text-xs font-bold uppercase tracking-[0.15em] text-gabinete-darkBrown">
                Alquiler flexible
              </p>
              <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
                Por día o por el período que necesites.
              </p>
            </div>
            <div>
              <p className="font-editorial text-xs font-bold uppercase tracking-[0.15em] text-gabinete-darkBrown">
                Entrega y retiro
              </p>
              <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
                Coordinado a medida según tu producción.
              </p>
            </div>
            <div>
              <p className="font-editorial text-xs font-bold uppercase tracking-[0.15em] text-gabinete-darkBrown">
                Atención personalizada
              </p>
              <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
                Si no sabés cómo buscar, te ayudamos a armar la selección.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
