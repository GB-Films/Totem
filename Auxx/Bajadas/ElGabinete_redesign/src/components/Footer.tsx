import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mx-4 mt-10 border-t border-gabinete-line/35 px-2 py-10 text-gabinete-muted sm:mx-8 lg:mx-12">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-gabinete-darkBrown">EL GABINETE</p>
          <p className="mt-3 max-w-md font-editorial text-sm leading-7">
            Reliquias, rarezas y piezas con pasado. Cada pieza espera su próximo plano.
          </p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.16em] text-gabinete-darkBrown">
            Archivo
          </p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link to="/catalogo" className="hover:text-gabinete-darkBrown">Catálogo</Link>
            <Link to="/como-funciona" className="hover:text-gabinete-darkBrown">Cómo alquilar</Link>
            <Link to="/contacto" className="hover:text-gabinete-darkBrown">Solicitud de reserva</Link>
          </div>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-[0.16em] text-gabinete-darkBrown">
            Contacto
          </p>
          <p className="mt-3 font-editorial text-sm leading-7">
            Buenos Aires, Argentina
            <br />
            hola@elgabineteprops.com
          </p>
        </div>
      </div>
    </footer>
  );
}
