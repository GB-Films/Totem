import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const inspirationBlocks = [
  {
    title: "Living con historia",
    text: "Sofás, valijas, lámparas y arte para escenas íntimas, entrevistas o ficción contemporánea.",
    href: "/catalogo?categoria=Mobiliario",
  },
  {
    title: "Backstage / estudio",
    text: "Props reconocibles del mundo audiovisual para piezas meta, making of, prensa y campañas.",
    href: "/catalogo?q=rodaje",
  },
  {
    title: "Oficina / editorial",
    text: "Máquinas de escribir, lámparas banker y objetos que construyen mundo con pocos elementos.",
    href: "/catalogo?q=oficina",
  },
  {
    title: "Clima clásico",
    text: "Bustos, percheros, piezas de decoración y objetos de tono más solemne o elegante.",
    href: "/catalogo?categoria=Arte",
  },
];

export function InspirationPage() {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="rounded-[30px] border border-gabinete-line bg-white/55 p-8 shadow-paper lg:p-10">
        <p className="eyebrow">Inspiración</p>
        <h1 className="mt-3 max-w-[860px] font-display text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[0.95] tracking-[-0.05em] text-gabinete-darkBrown">
          Si no sabés qué buscar, empezá por una atmósfera.
        </h1>
        <p className="mt-5 max-w-[780px] font-editorial text-lg leading-8 text-gabinete-muted">
          Esta pestaña funciona como puerta de entrada editorial: menos técnica, más inspiracional. Ideal para
          dirección de arte, creatividad o clientes que todavía están armando el universo visual.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {inspirationBlocks.map((block) => (
          <Link
            key={block.title}
            to={block.href}
            className="rounded-[24px] border border-gabinete-line bg-white/60 p-7 shadow-paper transition hover:-translate-y-1"
          >
            <p className="font-display text-4xl leading-none text-gabinete-darkBrown">{block.title}</p>
            <p className="mt-4 font-editorial text-base leading-7 text-gabinete-muted">{block.text}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-editorial text-sm font-semibold uppercase tracking-[0.12em] text-gabinete-brown">
              Ver referencias <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
