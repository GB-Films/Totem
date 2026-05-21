import { Heart, LayoutDashboard, LogOut, Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelection } from "../context/SelectionContext";

const navItems = [
  { to: "/como-funciona", label: "Cómo funciona" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/colecciones", label: "Colecciones" },
  { to: "/inspiracion", label: "Inspiración" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto" },
];

function CabinetLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <span className="brand-cabinet">
        <i />
        <b />
      </span>
      <span className="brand-wordmark brand-wordmark-single">
        <strong>EL GABINETE</strong>
      </span>
    </span>
  );
}

export function Header() {
  const { totalItems } = useSelection();
  const { user, isAdmin, checkingAdmin, loginWithGoogle, logout } = useAuth();

  return (
    <header className="site-header">
      <Link to="/" className="site-logo" aria-label="Ir al inicio de El Gabinete">
        <CabinetLogo />
      </Link>

      <nav className="site-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `site-nav-link ${isActive ? "is-active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-actions" aria-label="Acciones rápidas">
        <Link to="/catalogo" aria-label="Buscar">
          <Search size={24} strokeWidth={1.9} />
        </Link>
        {isAdmin && (
          <Link to="/admin" aria-label="Panel de administración" title="Panel de administración">
            <LayoutDashboard size={23} strokeWidth={1.9} />
          </Link>
        )}
        {user ? (
          <button type="button" aria-label="Cerrar sesión" title={user.email ?? "Cerrar sesión"} onClick={logout}>
            <LogOut size={23} strokeWidth={1.9} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Ingresar con Google"
            title={checkingAdmin ? "Verificando sesión" : "Ingresar con Google"}
            onClick={loginWithGoogle}
          >
            <UserRound size={23} strokeWidth={1.9} />
          </button>
        )}
        <Link to="/colecciones" aria-label="Favoritos y colecciones">
          <Heart size={24} strokeWidth={1.9} />
        </Link>
        <Link to="/contacto" className="cart-action" aria-label="Ver carrito">
          <ShoppingCart size={24} strokeWidth={1.9} />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
}
