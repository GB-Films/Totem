import { ArrowRight, CalendarDays, CheckCircle2, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ObjectImage } from "../components/ObjectImage";
import { useCatalog } from "../context/CatalogContext";

const useCases = [
  {
    title: "Ya sé qué necesito",
    text: "Buscá por nombre, categoría, estilo o disponibilidad y pasá directo a elegir fechas.",
    href: "/catalogo",
  },
  {
    title: "Estoy armando el universo",
    text: "Explorá colecciones de piezas que funcionan juntas para construir una misma atmósfera.",
    href: "/colecciones",
  },
  {
    title: "Quiero armar una preselección",
    text: "Guardá favoritos, compará opciones y volvé cuando el proyecto tenga fechas definidas.",
    href: "/cuenta",
  },
];

const benefits = [
  { title: "Alquiler flexible", text: "Por día o por período", icon: CalendarDays },
  { title: "Entrega y retiro", text: "Coordinado según proyecto", icon: Truck },
  { title: "Selección curada", text: "Te ayudamos a elegir", icon: CheckCircle2 },
];

export function HomePage() {
  const { products } = useCatalog();
  const featured = [products[0], products[2], products[5], products[6]].filter(Boolean);

  return (
    <>
      <Hero />

      <section className="home-flow-section">
        <div className="home-section-heading">
          <p className="eyebrow">Encontrá más rápido</p>
          <h2>Una entrada para cada etapa del proyecto.</h2>
          <p>
            Desde una lista cerrada hasta una primera búsqueda visual: empezá por donde te resulte más útil.
          </p>
        </div>

        <div className="home-use-grid">
          {useCases.map((item) => (
            <Link key={item.title} to={item.href} className="home-use-card">
              <span className="home-use-star">✶</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <em>
                Explorar <ArrowRight size={15} />
              </em>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-featured-section">
        <div className="home-section-heading is-inline">
          <div>
          <p className="eyebrow">Selección del archivo</p>
          <h2>Piezas listas para entrar en cuadro.</h2>
          </div>
          <Link to="/catalogo" className="gabinete-button px-5 py-3">
            Ver catálogo completo
          </Link>
        </div>

        <div className="home-featured-grid">
          {featured.map((product) => (
            <Link key={product.id} to={`/producto/${product.id}`} className="home-featured-card">
              <ObjectImage product={product} compact showLabel={false} />
              <div>
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
        <Sparkles className="home-benefit-mark" size={22} />
      </section>
    </>
  );
}
