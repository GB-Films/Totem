import { ArrowRight, CalendarDays, CheckCircle2, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ObjectImage } from "../components/ObjectImage";
import { products } from "../data/products";

const useCases = [
  {
    title: "Necesito algo puntual",
    text: "Buscá por nombre, categoría o estilo. Ideal cuando ya sabés qué objeto falta en arte.",
    href: "/catalogo",
  },
  {
    title: "Estoy armando un universo",
    text: "Entrá por colecciones y encontrá piezas que dialogan entre sí sin tener que revolver todo el archivo.",
    href: "/colecciones",
  },
  {
    title: "Todavía estoy bajando ideas",
    text: "Usá inspiración para buscar por atmósfera, época, textura o intención visual.",
    href: "/inspiracion",
  },
];

const benefits = [
  { title: "Alquiler flexible", text: "Por día o por período", icon: CalendarDays },
  { title: "Entrega y retiro", text: "Coordinado según proyecto", icon: Truck },
  { title: "Selección curada", text: "Te ayudamos a elegir", icon: CheckCircle2 },
];

export function HomePage() {
  const featured = [products[0], products[2], products[5], products[6]].filter(Boolean);

  return (
    <>
      <Hero />

      <section className="home-flow-section">
        <div className="home-section-heading">
          <p className="eyebrow">Después de buscar</p>
          <h2>Elegí cómo querés entrar al gabinete.</h2>
          <p>
            La web tiene que servirle tanto a quien llega con una lista cerrada como a quien todavía está encontrando
            el tono visual del proyecto.
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
            <p className="eyebrow">Piezas destacadas</p>
            <h2>Objetos que ya tienen escena.</h2>
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
