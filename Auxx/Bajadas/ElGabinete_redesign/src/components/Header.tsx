import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";

const navItems = [
  { to: "/como-funciona", label: "Cómo funciona" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/catalogo", label: "Colecciones" },
  { to: "/catalogo", label: "Inspiración" },
  { to: "/como-funciona", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto" },
];

function CabinetLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <span className="brand-cabinet">
        <i />
        <b />
      </span>
      <span className="brand-wordmark">
        <strong>EL GABINETE</strong>
        <em>DE LOS CURIOSOS</em>
      </span>
    </span>
  );
}

export function Header() {
  const { totalItems } = useSelection();

  return (
    <header className="site-header">
      <Link to="/" className="site-logo" aria-label="Ir al inicio de El Gabinete de los Curiosos">
        <CabinetLogo />
      </Link>

      <nav className="site-nav" aria-label="Navegación principal">
        {navItems.map((item, index) => (
          <NavLink
            key={`${item.label}-${index}`}
            to={item.to}
            className={({ isActive }) => `site-nav-link ${isActive ? "is-active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-actions" aria-label="Acciones rápidas">
        <Link to="/catalogo" aria-label="Buscar">
          <Search size={25} strokeWidth={1.9} />
        </Link>
        <Link to="/contacto" aria-label="Cuenta">
          <UserRound size={24} strokeWidth={1.9} />
        </Link>
        <Link to="/catalogo" aria-label="Favoritos">
          <Heart size={25} strokeWidth={1.9} />
        </Link>
        <Link to="/contacto" className="cart-action" aria-label="Ver selección">
          <ShoppingCart size={25} strokeWidth={1.9} />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
}
