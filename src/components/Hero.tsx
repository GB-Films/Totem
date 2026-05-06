import { ArrowRight, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero-scene relative min-h-[calc(100vh-73px)] overflow-hidden">
      <div className="absolute inset-0 hero-texture" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-coal to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brass/35 bg-coal/45 px-4 py-2 text-xs uppercase tracking-[0.24em] text-brass backdrop-blur">
            <ScrollText size={15} />
            Archivo de objetos raros
          </div>
          <h1 className="font-display text-6xl leading-[0.9] tracking-wide text-bone sm:text-7xl lg:text-8xl">
            EL GABINETE
          </h1>
          <p className="mt-6 max-w-2xl font-display text-3xl leading-tight text-bone/90 sm:text-4xl">
            Cada objeto tiene un pasado. Vos decidís su próxima historia.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-bone/68">
            Un catálogo de objetos, reliquias, rarezas y piezas escénicas listas para entrar en cámara.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brass px-5 py-3 font-semibold text-coal shadow-relic transition hover:bg-bone"
            >
              Explorar catálogo
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/como-funciona"
              className="inline-flex items-center justify-center rounded-md border border-bone/25 px-5 py-3 font-semibold text-bone transition hover:border-brass hover:bg-brass/10"
            >
              Cómo funciona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
