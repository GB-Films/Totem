const pillars = [
  {
    title: "Catálogo de trabajo",
    text: "Categorías claras, búsqueda rápida y fichas útiles para arte, producción y dirección.",
  },
  {
    title: "Fechas visibles",
    text: "Cada objeto se consulta con calendario para saber si puede entrar en tu rodaje.",
  },
  {
    title: "Curaduría",
    text: "Colecciones y acompañamiento para encontrar piezas que sostengan una escena.",
  },
];

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="simple-page-hero">
        <p className="eyebrow">Sobre nosotros</p>
        <h1 className="mt-3 max-w-[760px] font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-medium uppercase leading-[0.96] tracking-[0.02em] text-gabinete-darkBrown">
          Objetos que sostienen historias.
        </h1>
        <p className="mt-5 max-w-[660px] font-editorial text-base leading-7 text-gabinete-muted">
          Totem Rental ordena utilería, mobiliario, vestuario complementario y piezas especiales para que producción
          pueda elegir con menos fricción y más criterio visual.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="parchment-panel p-6">
            <h2 className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-gabinete-darkBrown">{pillar.title}</h2>
            <p className="mt-4 font-editorial text-base leading-7 text-gabinete-muted">{pillar.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
