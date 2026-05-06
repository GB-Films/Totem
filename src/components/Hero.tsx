import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero-scene relative mx-4 mt-4 overflow-hidden sm:mx-8 lg:mx-12">
      <div className="absolute inset-0 hero-texture" />
      <div className="relative flex min-h-[inherit] items-center px-6 py-16 sm:px-10 lg:px-14">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gabinete-line/35 bg-gabinete-paperLight/25 px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-gabinete-brown">
            <BookOpen size={15} />
            Archivo secreto de utilería
          </div>
          <h1 className="font-display text-5xl font-semibold uppercase leading-[0.92] tracking-[0.1em] text-gabinete-darkBrown sm:text-7xl lg:text-8xl">
            El Gabinete
          </h1>
          <p className="mt-6 max-w-2xl font-editorial text-3xl italic leading-tight text-gabinete-brown sm:text-4xl">
            Cada objeto tiene un pasado. Vos decidís su próxima historia.
          </p>
          <p className="mt-6 max-w-xl font-editorial text-lg leading-8 text-gabinete-muted">
            Un catálogo de objetos, reliquias, rarezas y piezas escénicas listas para entrar en cámara.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/catalogo" className="gabinete-button px-6 py-3">
              Explorar catálogo
              <ArrowRight size={18} />
            </Link>
            <Link to="/como-funciona" className="gabinete-button-secondary px-6 py-3">
              Cómo funciona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
