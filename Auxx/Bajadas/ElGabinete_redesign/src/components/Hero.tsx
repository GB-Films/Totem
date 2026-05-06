import { ArrowRight, CalendarDays, CheckCircle2, Palette, Truck, Armchair, Sofa, Shirt, Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categoryPills = [
  { label: "Utilería", icon: Armchair },
  { label: "Mobiliario", icon: Sofa },
  { label: "Vestuario", icon: Shirt },
  { label: "Decoración", icon: Palette },
  { label: "Arte", icon: Palette },
];

const benefits = [
  { title: "Alquiler flexible", text: "Por día o por período", icon: CalendarDays },
  { title: "Entrega y retiro", text: "A todo el país", icon: Truck },
  { title: "Atención personalizada", text: "Para cada proyecto", icon: CheckCircle2 },
];

export function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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
        <h1>Encontrá los objetos que dan vida a tus producciones.</h1>
        <div className="hero-separator"><span>✶</span></div>
        <p>Utilería, mobiliario, decoración y vestuario para cine, TV, publicidad, teatro y creación de contenido.</p>

        <form className="hero-search" onSubmit={submitSearch}>
          <Search size={34} strokeWidth={1.8} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="¿Qué estás buscando?"
            aria-label="Buscar objetos"
          />
          <button type="submit" aria-label="Buscar en catálogo">
            <ArrowRight size={34} />
          </button>
        </form>

        <div className="hero-categories">
          {categoryPills.map(({ label, icon: Icon }) => (
            <Link key={label} to={`/catalogo?categoria=${encodeURIComponent(label)}`}>
              <Icon size={21} />
              {label}
            </Link>
          ))}
        </div>

        <div className="hero-benefits">
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
