import { ArrowRight, CalendarDays, CheckCircle2, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ObjectImage } from "../components/ObjectImage";
import { WhereSeen } from "../components/WhereSeen";
import { useCatalog } from "../context/CatalogContext";

const useCases = [
  {
    title: "Tengo una pista",
    text: "Buscá por nombre, categoría, estilo o disponibilidad y pasá directo a elegir fechas.",
    href: "/catalogo",
  },
  {
    title: "Estoy armando un mundo",
    text: "Explorá colecciones de piezas que funcionan juntas para construir una misma atmósfera.",
    href: "/colecciones",
  },
  {
    title: "Vine a curiosear",
    text: "Guardá favoritos, compará opciones y volvé cuando el proyecto tenga fechas definidas.",
    href: "/cuenta",
  },
];

const benefits = [
  { title: "Alquiler flexible", text: "Desde una semana", icon: CalendarDays },
  { title: "Entrega y retiro", text: "Coordinado según proyecto", icon: Truck },
  { title: "Selección curada", text: "Te ayudamos a elegir", icon: CheckCircle2 },
];

export function HomePage() {
  const { products, loading } = useCatalog();
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="home-flow-section">
        <div className="home-section-heading">
          <p className="eyebrow">Tres puertas al archivo</p>
          <h2>Cada historia empieza buscando distinto.</h2>
          <p>
            Desde una lista cerrada hasta una búsqueda visual: entrá por donde te resulte más útil.
          </p>
        </div>

        <div className="home-use-grid">
          {useCases.map((item, index) => (
            <Link key={item.title} to={item.href} className="home-use-card app-interactive-tile">
              <span className="home-use-star">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <em>
                Explorar <ArrowRight className="interactive-tile-arrow" size={15} />
              </em>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-featured-section">
        <div className="home-section-heading is-inline">
          <div>
          <p className="eyebrow">Hallazgos de esta semana</p>
          <h2>Cuatro piezas pidiendo una escena.</h2>
          </div>
          <Link to="/catalogo" className="gabinete-button px-5 py-3">
            Ver catálogo completo
          </Link>
        </div>

        <div className="home-featured-grid">
          {loading && <div className="home-featured-loading">Cargando piezas del catálogo…</div>}
          {!loading && featured.length === 0 && (
            <div className="home-featured-loading">
              Estamos preparando el catálogo. Escribinos y te ayudamos a encontrar una pieza.
            </div>
          )}
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/producto/${product.id}`}
              className="home-featured-card app-interactive-tile"
            >
              <ObjectImage product={product} compact showLabel={false} />
              <div>
                <span>{product.category} · Archivo {product.id}</span>
                <h3>{product.name}</h3>
                <p>{product.description || "Consultá medidas, disponibilidad y detalles de esta pieza."}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhereSeen />

      <section className="home-benefit-strip">
        {benefits.map(({ title, text, icon: Icon }) => (
          <div key={title}>
            <Icon size={26} strokeWidth={1.7} />
            <span>
              <strong>{title}</strong>
              <em>{text}</em>
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
