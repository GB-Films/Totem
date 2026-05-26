import { Link } from "react-router-dom";

const steps = [
  {
    title: "Buscá",
    text: "Entrá al catálogo y filtrá por categoría, estilo, precio o disponibilidad.",
  },
  {
    title: "Elegí fechas",
    text: "Cada objeto muestra calendario. Si el período está libre, podés sumarlo a tu selección.",
  },
  {
    title: "Confirmá",
    text: "Revisá alquiler, garantía reintegrable y seña estimada antes de enviar la solicitud.",
  },
  {
    title: "Coordinamos",
    text: "Cerramos entrega, retiro y detalles de producción por WhatsApp o email.",
  },
];

export function HowItWorksPage() {
  return (
    <div className="simple-page mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="simple-page-hero">
        <div>
          <p className="eyebrow">Cómo funciona</p>
          <h1 className="mt-3 max-w-[760px] font-display text-[clamp(2.4rem,4.6vw,4.6rem)] font-medium uppercase leading-[0.96] tracking-[0.02em] text-gabinete-darkBrown">
            Alquilar props, sin vueltas.
          </h1>
          <p className="mt-5 max-w-[660px] font-editorial text-base leading-7 text-gabinete-muted">
            Totem Rental funciona como una herramienta de producción: buscás, verificás fechas y armás una selección lista
            para coordinar.
          </p>
        </div>
        <Link to="/catalogo" className="gabinete-button w-fit px-5 py-3">
          Ver catálogo
        </Link>
      </section>

      <section className="minimal-process-grid mt-8">
        {steps.map((step, index) => (
          <article key={step.title} className="minimal-process-card">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className="process-note mt-8">
        <p>
          La garantía es reintegrable. El monto final puede variar según logística, cantidad de piezas y condiciones del
          rodaje.
        </p>
      </section>
    </div>
  );
}
