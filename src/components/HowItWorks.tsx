import { ClipboardList, MessageSquare, Search } from "lucide-react";

const steps = [
  {
    title: "Explorás el catálogo",
    text: "Buscá por categoría, precio, época, tono o ese detalle que dirección de arte todavía no sabe nombrar.",
    icon: Search,
  },
  {
    title: "Armás tu selección",
    text: "Sumá objetos a consulta, ajustá cantidades y días. No hay checkout: esto sigue siendo producción real.",
    icon: ClipboardList,
  },
  {
    title: "Consultás disponibilidad y garantía",
    text: "Recibimos el resumen y confirmamos stock, depósito reintegrable, logística y condiciones.",
    icon: MessageSquare,
  },
];

export function HowItWorks() {
  return (
    <section className="section-band">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Método</p>
          <h2 className="mt-3 font-display text-4xl text-gabinete-darkBrown sm:text-5xl">
            Cómo funciona
          </h2>
          <p className="mt-4 font-editorial text-gabinete-muted">
            Tres pasos, pocos rituales administrativos y una selección pensada para entrar bien en cámara.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="parchment-panel p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gabinete-line/40 bg-gabinete-paperLight/24 text-gabinete-brown">
                    <Icon size={21} />
                  </span>
                  <span className="font-display text-4xl text-gabinete-line/35">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-gabinete-darkBrown">{step.title}</h3>
                <p className="mt-3 font-editorial text-sm leading-6 text-gabinete-muted">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
