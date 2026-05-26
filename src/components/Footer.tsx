import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-gabinete-line/60 bg-white/35">
      <div className="mx-auto grid w-full max-w-[1520px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr] lg:px-12">
        <div>
          <p className="font-display text-3xl tracking-[0.16em] text-gabinete-darkBrown">TOTEM RENTAL</p>
          <p className="mt-4 max-w-md font-editorial text-sm leading-7 text-gabinete-muted">
            Cada objeto tiene un pasado. Vos decidís su próxima historia. Utilería, mobiliario,
            vestuario y piezas especiales para cine, TV, publicidad, teatro y contenidos.
          </p>
        </div>

        <div>
          <p className="font-editorial text-xs font-semibold uppercase tracking-[0.18em] text-gabinete-faint">
            Navegación
          </p>
          <div className="mt-4 grid gap-2 text-sm text-gabinete-darkBrown">
            <Link to="/catalogo" className="hover:text-gabinete-brown">Catálogo</Link>
            <Link to="/colecciones" className="hover:text-gabinete-brown">Colecciones</Link>
            <Link to="/como-funciona" className="hover:text-gabinete-brown">Cómo funciona</Link>
            <Link to="/cuenta" className="hover:text-gabinete-brown">Cuenta</Link>
          </div>
        </div>

        <div>
          <p className="font-editorial text-xs font-semibold uppercase tracking-[0.18em] text-gabinete-faint">
            Servicios
          </p>
          <div className="mt-4 grid gap-2 text-sm text-gabinete-darkBrown">
            <span>Alquiler por día o período</span>
            <span>Armado de selección por proyecto</span>
            <span>Entrega y retiro coordinado</span>
            <span>Asesoría para arte y utilería</span>
          </div>
        </div>

        <div>
          <p className="font-editorial text-xs font-semibold uppercase tracking-[0.18em] text-gabinete-faint">
            Atención
          </p>
          <div className="mt-4 space-y-2 font-editorial text-sm leading-7 text-gabinete-darkBrown">
            <p>Buenos Aires, Argentina</p>
            <p>hola@totemrental.com</p>
            <p>Atención personalizada para cada proyecto</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
