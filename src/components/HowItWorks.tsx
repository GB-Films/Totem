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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Método</p>
          <h2 className="mt-3 font-display text-4xl text-bone sm:text-5xl">Cómo funciona</h2>
          <p className="mt-4 text-bone/65">
            Tres pasos, pocos rituales administrativos y una selección pensada para entrar bien en cámara.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-lg border border-bone/10 bg-ash/60 p-6 shadow-cabinet">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-brass/30 bg-brass/10 text-brass">
                    <Icon size={21} />
                  </span>
                  <span className="font-display text-4xl text-bone/20">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-bone">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-bone/62">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
