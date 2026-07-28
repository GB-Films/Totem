import { ArrowRight, Palette, Armchair, Sofa, Shirt, Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCatalog } from "../context/CatalogContext";
import type { Category } from "../types";
import totemLogoLight from "../assets/brand/totem-logo-light.png";

const categoryIcons: Partial<Record<Category, typeof Armchair>> = {
  "Utilería": Armchair,
  "Mobiliario": Sofa,
  "Vestuario": Shirt,
  "Arte": Palette,
};

export function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { categories } = useCatalog();

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    navigate(`/catalogo${params}`);
  };

  return (
    <section className="hero-scene">
      <img
        className="hero-media"
        src={`${import.meta.env.BASE_URL}og.png`}
        alt=""
        aria-hidden="true"
      />

      <div className="hero-content">
        <img className="hero-brand-mark" src={totemLogoLight} alt="Totem" />
        <p className="hero-kicker">Rental de utilería · Buenos Aires</p>
        <h1>Alquiler de utilería para historias que se ven.</h1>
        <p className="hero-lead">
          Objetos con pasado, listos para entrar en una nueva escena. Buscá, revisá fechas y armá
          una selección para tu producción.
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
