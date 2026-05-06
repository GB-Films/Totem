import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductFilters, type CatalogFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";
import { categories, products } from "../data/products";
import type { Category } from "../types";

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const featuredCategories: Array<"Todas" | Category> = [
  "Todas",
  "Tecnología vintage",
  "Fantasía / ficción",
  "Mobiliario",
  "Decoración",
  "Utilería de acción",
  "Objetos religiosos / místicos",
];

export function CatalogPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("categoria");
  const maxCatalogPrice = Math.max(...products.map((product) => product.rentalPricePerDay));
  const [filters, setFilters] = useState<CatalogFilters>({
    search: "",
    category:
      initialCategory && products.some((product) => product.category === initialCategory)
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
        filters.tags.length === 0 || filters.tags.every((tag) => product.tags.includes(tag));
      const matchesPrice = product.rentalPricePerDay <= filters.maxPrice;
      const matchesAvailability =
        filters.availability === "Todas" || product.availability === filters.availability;
      return matchesSearch && matchesCategory && matchesTags && matchesPrice && matchesAvailability;
    });

    return filtered.sort((a, b) => {
      if (filters.sort === "name") {
        return a.name.localeCompare(b.name);
      }
      if (filters.sort === "priceAsc") {
        return a.rentalPricePerDay - b.rentalPricePerDay;
      }
      if (filters.sort === "priceDesc") {
        return b.rentalPricePerDay - a.rentalPricePerDay;
      }
      return b.featuredScore - a.featuredScore;
    });
  }, [filters]);

  return (
    <div className="mx-auto max-w-none px-4 py-8 sm:px-8 lg:px-12">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr] xl:grid-cols-[250px_1fr_330px]">
        <ProductFilters
          filters={filters}
          maxCatalogPrice={maxCatalogPrice}
          onChange={setFilters}
          resultCount={filteredProducts.length}
        />

        <section className="min-w-0">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow justify-center">Catálogo</p>
            <h1 className="mt-3 font-display text-4xl text-gabinete-darkBrown sm:text-5xl lg:text-6xl">
              Alquilá objetos extraordinarios para producciones inolvidables.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-editorial text-base leading-7 text-gabinete-muted sm:text-lg">
              Utilería, decoración y piezas escénicas con alma propia para cine, teatro, publicidad,
              videoclips, fotos y eventos.
            </p>
            <div className="gabinete-input mx-auto mt-7 flex max-w-3xl items-center rounded-full bg-gabinete-paperLight/38 px-5 shadow-paper">
              <input
                value={filters.search}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, search: event.target.value }))
                }
                className="w-full bg-transparent px-2 py-4 text-base text-gabinete-text outline-none placeholder:text-gabinete-faint sm:text-lg"
                placeholder="Busca por objeto, época, estilo o colección..."
                aria-label="Buscar en el gabinete"
              />
              <Search size={24} className="text-gabinete-darkBrown" />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {featuredCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilters((current) => ({ ...current, category }))}
                className={
                  filters.category === category
                    ? "gabinete-button px-4 py-2 text-xs"
                    : "gabinete-button-secondary px-4 py-2 text-xs"
                }
              >
                {category === "Todas" ? "Todos" : category}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories
              .filter((category) => !featuredCategories.includes(category))
              .slice(0, 6)
              .map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilters((current) => ({ ...current, category }))}
                  className={
                    filters.category === category
                      ? "rounded-full border border-gabinete-brown bg-gabinete-brown px-3 py-1.5 text-xs text-gabinete-paperLight"
                      : "rounded-full border border-gabinete-line/35 bg-gabinete-paperLight/18 px-3 py-1.5 text-xs text-gabinete-muted hover:border-gabinete-brown hover:text-gabinete-darkBrown"
                  }
                >
                  {category}
                </button>
              ))}
          </div>

          <div className="mt-8">
            <ProductGrid products={filteredProducts} />
          </div>

          <div className="mt-8 xl:hidden">
            <SelectedProductsPanel />
          </div>
        </section>

        <div className="hidden xl:block">
          <div className="sticky top-6">
            <SelectedProductsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
