const pillars = [
  {
    title: "Catálogo pensado para producción",
    text: "La navegación prioriza categorías claras, búsqueda rápida y fichas con información útil para arte y producción.",
  },
  {
    title: "Búsqueda simple desde el inicio",
    text: "La home arranca con una única acción principal: decir qué estás buscando. Eso ordena toda la experiencia.",
  },
  {
    title: "Curaduría y acompañamiento",
    text: "No es sólo una grilla de objetos: también hay colecciones, inspiración y acompañamiento para llegar a la selección correcta.",
  },
];

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="rounded-[30px] border border-gabinete-line bg-white/55 p-8 shadow-paper lg:p-10">
        <p className="eyebrow">Sobre nosotros</p>
        <h1 className="mt-3 max-w-[860px] font-display text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[0.95] tracking-[-0.05em] text-gabinete-darkBrown">
          Un gabinete de props para encontrar más rápido y elegir mejor.
        </h1>
        <p className="mt-5 max-w-[780px] font-editorial text-lg leading-8 text-gabinete-muted">
          El sitio está pensado como herramienta de trabajo y no sólo como vitrina: ordena objetos, facilita la búsqueda
          y acompaña el proceso desde la idea hasta la consulta final.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-[24px] border border-gabinete-line bg-white/60 p-7 shadow-paper">
            <h2 className="font-display text-4xl leading-none text-gabinete-darkBrown">{pillar.title}</h2>
            <p className="mt-4 font-editorial text-base leading-7 text-gabinete-muted">{pillar.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
