import { ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <strong className="footer-wordmark">TOTEM RENTAL</strong>
          <p>
            Objetos que sostienen historias. Utilería, mobiliario, vestuario y piezas especiales
            para cine, TV, publicidad, teatro y contenidos.
          </p>
          <Link to="/catalogo" className="footer-cta">
            Explorar el catálogo <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-column">
          <p>Navegación</p>
          <div>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/colecciones">Colecciones</Link>
            <Link to="/como-funciona">Cómo funciona</Link>
            <Link to="/cuenta">Mi cuenta</Link>
          </div>
        </div>

        <div className="footer-column">
          <p>Servicios</p>
          <div>
            <span>Alquiler semanal o por período</span>
            <span>Selección por proyecto</span>
            <span>Entrega y retiro coordinado</span>
            <span>Asesoría para utilería</span>
          </div>
        </div>

        <div className="footer-column">
          <p>Contacto</p>
          <div>
            <span>Buenos Aires, Argentina</span>
            <a href="mailto:totem.props@gmail.com">totem.props@gmail.com</a>
            <a
              href="https://www.instagram.com/totem.rental?igsh=eGs3aGowZGdkY3F6"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <Instagram size={15} /> @totem.rental
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Totem Rental</span>
        <span>Objetos para producción audiovisual</span>
      </div>
    </footer>
  );
}
