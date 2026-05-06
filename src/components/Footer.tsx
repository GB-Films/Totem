import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-coal">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-bone">EL GABINETE</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-bone/60">
            Objetos listos para escena, reliquias disponibles para rodaje y piezas con más pasado
            del que conviene preguntar.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-bone">Archivo</p>
          <div className="mt-3 grid gap-2 text-sm text-bone/60">
            <Link to="/catalogo" className="hover:text-bone">Catálogo</Link>
            <Link to="/como-funciona" className="hover:text-bone">Cómo funciona</Link>
            <Link to="/contacto" className="hover:text-bone">Solicitud de reserva</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-bone">Contacto</p>
          <p className="mt-3 text-sm leading-6 text-bone/60">
            Buenos Aires, Argentina
            <br />
            hola@elgabineteprops.com
          </p>
        </div>
      </div>
    </footer>
  );
}
