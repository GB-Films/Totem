import { ArrowRight, CalendarDays, CheckCircle2, Palette, Truck, Armchair, Sofa, Shirt, Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCatalog } from "../context/CatalogContext";
import type { Category } from "../types";

const categoryIcons: Partial<Record<Category, typeof Armchair>> = {
  "Utilería": Armchair,
  "Mobiliario": Sofa,
  "Vestuario": Shirt,
  "Decoración": Palette,
  "Arte": Palette,
};

const benefits = [
  { title: "Alquiler flexible", text: "Por día o por período", icon: CalendarDays },
  { title: "Entrega y retiro", text: "Coordinado para tu proyecto", icon: Truck },
  { title: "Atención personalizada", text: "Para cada proyecto", icon: CheckCircle2 },
];

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
      <div className="hero-blueprint" aria-hidden="true">
        <i />
        <span />
      </div>
      <div className="hero-stage" aria-hidden="true">
        <div className="stage-light"><span /><i /><b /></div>
        <div className="stage-trunk"><i /><b /></div>
        <div className="stage-bust"><i /><b /></div>
      </div>

      <div className="hero-content">
        <p className="hero-kicker">Archivo de utilería · Buenos Aires</p>
        <h1>Objetos con carácter para historias que se ven.</h1>
        <p className="hero-lead">
          Utilería, mobiliario, decoración y vestuario listos para cine, TV, publicidad, teatro y contenido.
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

        <div className="hero-benefits" aria-label="Beneficios del servicio">
          {benefits.map(({ title, text, icon: Icon }) => (
            <div key={title}>
              <Icon size={29} strokeWidth={1.7} />
              <span>
                <strong>{title}</strong>
                <em>{text}</em>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
