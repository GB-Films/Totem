import { ArrowRight, Palette, Armchair, Sofa, Shirt, Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCatalog } from "../context/CatalogContext";
import type { Category } from "../types";

const categoryIcons: Partial<Record<Category, typeof Armchair>> = {
  "Utilería": Armchair,
  "Mobiliario": Sofa,
  "Vestuario": Shirt,
  "Arte": Palette,
};

export function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { categories, products } = useCatalog();

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    navigate(`/catalogo${params}`);
  };

  return (
    <section className="hero-scene">
      <img
        className="hero-media"
        src={`${import.meta.env.BASE_URL}hero-studio-clean.png`}
        alt=""
        aria-hidden="true"
      />
      <div className="hero-content">
        <h1>
          <span>Objetos con pasado,</span>
          <span>historias por venir.</span>
        </h1>
        <p className="hero-lead">
          Un archivo de piezas curiosas, domésticas y extraordinarias. Buscá, revisá fechas y armá
          una selección lista para entrar en cuadro.
        </p>
        <p className="hero-piece-count">
          <strong>{products.length || "—"}</strong>
          <span>Piezas disponibles</span>
        </p>

        <form className="hero-search" onSubmit={submitSearch}>
          <Search size={24} strokeWidth={1.8} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscá un objeto, estilo o escena"
            aria-label="Buscar objetos"
          />
          <button type="submit" aria-label="Buscar en catálogo">
            <span>Buscar</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="hero-categories" aria-label="Categorías destacadas">
          {categories.slice(0, 5).map((category) => {
            const Icon = categoryIcons[category] ?? Armchair;
            return (
              <Link key={category} to={`/catalogo?categoria=${encodeURIComponent(category)}`}>
                <Icon size={21} />
                {category}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
