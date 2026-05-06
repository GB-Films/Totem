import { ArrowRight, CalendarDays, CheckCircle2, Search, Sparkles, Truck } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ObjectImage } from "../components/ObjectImage";
import { products } from "../data/products";

const homeCategories = [
  { label: "Utilería", query: "Utilería" },
  { label: "Mobiliario", query: "Mobiliario" },
  { label: "Vestuario", query: "Vestuario" },
  { label: "Decoración", query: "Decoración" },
  { label: "Arte", query: "Arte" },
];

const benefits = [
  {
    title: "Alquiler flexible",
    text: "Por día o por período",
    icon: CalendarDays,
  },
  {
    title: "Entrega y retiro",
    text: "A todo el país",
    icon: Truck,
  },
  {
    title: "Atención personalizada",
    text: "Para cada proyecto",
    icon: CheckCircle2,
  },
];

const quickLinks = [
  {
    title: "Rodaje en interiores",
    text: "Objetos para living, oficina, estudio o sets controlados.",
    href: "/catalogo?categoria=Mobiliario",
  },
  {
    title: "Props con personalidad",
    text: "Piezas hero, objetos con historia y detalles que levantan arte.",
    href: "/colecciones",
  },
  {
    title: "¿No sabés cómo buscar?",
    text: "Entrá por inspiración, estilo o universo visual.",
    href: "/inspiracion",
  },
];

export function HomePage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const spotlight = useMemo(
    () => [products[2], products[5], products[4]].filter(Boolean),
    [],
  );

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    navigate(`/catalogo${params}`);
  };

  return (
    <>
      <section className="border-b border-gabinete-line/45 bg-gradient-to-b from-white/55 to-transparent">
        <div className="mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-[1520px] flex-col justify-center px-4 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="font-display text-[clamp(3.6rem,6vw,6.8rem)] leading-[0.95] tracking-[-0.04em] text-gabinete-darkBrown">
              Encontrá los objetos
              <br />
              que dan vida a tus producciones.
            </h1>

            <div className="mx-auto mt-6 flex w-fit items-center gap-4 text-gabinete-brown">
              <span className="h-px w-16 bg-gabinete-brown/70" />
              <Sparkles size={22} />
              <span className="h-px w-16 bg-gabinete-brown/70" />
            </div>

            <p className="mx-auto mt-6 max-w-[760px] font-editorial text-lg leading-8 text-gabinete-muted sm:text-xl">
              Utilería, mobiliario, decoración y vestuario para cine, TV, publicidad, teatro y creación de contenido.
            </p>

            <form
              onSubmit={submitSearch}
              className="mx-auto mt-10 flex w-full max-w-[980px] items-center gap-4 rounded-full border border-gabinete-darkBrown bg-white/85 px-6 py-4 shadow-paper"
            >
              <Search className="h-8 w-8 shrink-0 text-gabinete-darkBrown" strokeWidth={1.8} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="¿Qué estás buscando?"
                aria-label="Buscar objetos"
                className="w-full border-0 bg-transparent font-display text-2xl text-gabinete-darkBrown outline-none placeholder:text-gabinete-faint sm:text-3xl"
              />
              <button
                type="submit"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gabinete-darkBrown text-white transition hover:translate-x-1"
                aria-label="Buscar en catálogo"
              >
                <ArrowRight className="h-8 w-8" />
              </button>
            </form>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {homeCategories.map((item, index) => (
                <Link
                  key={item.label}
                  to={`/catalogo?categoria=${encodeURIComponent(item.query)}`}
                  className={`rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 hover:border-gabinete-darkBrown ${
                    index === 1
                      ? "border-gabinete-brown/35 bg-white/70 text-gabinete-brown"
                      : "border-gabinete-line bg-white/55 text-gabinete-darkBrown"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-14 grid gap-5 border-t border-gabinete-line/60 pt-8 text-left md:grid-cols-3">
              {benefits.map(({ title, text, icon: Icon }, index) => (
                <div key={title} className="flex items-start gap-4 md:pr-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-gabinete-darkBrown" strokeWidth={1.8} />
                  <div>
                    <p className="font-editorial text-xs font-bold uppercase tracking-[0.14em] text-gabinete-darkBrown">
                      {title}
                    </p>
                    <p className="mt-1 font-editorial text-sm uppercase tracking-[0.08em] text-gabinete-muted">
                      {text}
                    </p>
                  </div>
                  {index < benefits.length - 1 && <span className="ml-auto hidden h-10 w-px bg-gabinete-line lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1520px] px-4 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="rounded-[24px] border border-gabinete-line bg-white/55 p-7 shadow-paper transition hover:-translate-y-1"
            >
              <p className="font-display text-3xl text-gabinete-darkBrown">{item.title}</p>
              <p className="mt-3 font-editorial text-base leading-7 text-gabinete-muted">{item.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-editorial text-sm font-semibold uppercase tracking-[0.12em] text-gabinete-brown">
                Explorar <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1520px] px-4 pb-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selecciones destacadas</p>
            <h2 className="mt-3 font-display text-5xl text-gabinete-darkBrown">Para empezar a buscar mejor</h2>
          </div>
          <Link to="/catalogo" className="gabinete-button px-5 py-3">
            Ver catálogo completo
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1520px] gap-6 px-4 pb-16 sm:px-8 lg:grid-cols-3 lg:px-12">
        {spotlight.map((product) => (
          <Link
            key={product.id}
            to={`/producto/${product.id}`}
            className="overflow-hidden rounded-[24px] border border-gabinete-line bg-white/60 shadow-paper transition hover:-translate-y-1"
          >
            <ObjectImage product={product} compact />
            <div className="p-6">
              <p className="font-editorial text-xs font-semibold uppercase tracking-[0.14em] text-gabinete-brown">
                {product.category}
              </p>
              <h3 className="mt-2 font-display text-3xl leading-none text-gabinete-darkBrown">
                {product.name}
              </h3>
              <p className="mt-3 font-editorial text-base leading-7 text-gabinete-muted">
                {product.description}
              </p>
              <p className="mt-5 font-editorial text-sm font-semibold uppercase tracking-[0.12em] text-gabinete-darkBrown">
                Ver detalle
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
