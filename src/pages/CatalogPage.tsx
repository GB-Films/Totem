import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductFilters, type CatalogFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";
import { products } from "../data/products";

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

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
    <div className="mx-auto max-w-none px-4 py-10 sm:px-8 lg:px-12">
      <div className="max-w-3xl">
        <p className="eyebrow">Catálogo</p>
        <h1 className="mt-3 font-display text-5xl text-gabinete-darkBrown sm:text-6xl">
          Objetos disponibles
        </h1>
        <p className="mt-4 font-editorial text-lg leading-8 text-gabinete-muted">
          Buscá, filtrá y armá una selección. No todos los objetos tienen explicación; algunos solo
          tienen buen encuadre.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr] xl:grid-cols-[280px_1fr_340px]">
        <ProductFilters
          filters={filters}
          maxCatalogPrice={maxCatalogPrice}
          onChange={setFilters}
          resultCount={filteredProducts.length}
        />
        <div className="space-y-8">
          <ProductGrid products={filteredProducts} />
          <div className="xl:hidden">
            <SelectedProductsPanel />
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="sticky top-6">
            <SelectedProductsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
