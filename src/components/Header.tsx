import { LayoutDashboard, Monitor, ShoppingCart, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelection } from "../context/SelectionContext";

const navItems = [
  { to: "/como-funciona", label: "Cómo funciona", mobile: false },
  { to: "/catalogo", label: "Catálogo", mobile: true },
  { to: "/colecciones", label: "Colecciones", mobile: true },
  { to: "/sobre-nosotros", label: "Sobre nosotros", mobile: false },
];

function CabinetLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <span className="brand-cabinet">
        <i />
        <b />
      </span>
      <span className="brand-wordmark brand-wordmark-single">
        <strong>TOTEM RENTAL</strong>
      </span>
    </span>
  );
}

export function Header() {
  const { totalItems } = useSelection();
  const { user, isAdmin } = useAuth();
  const location = useLocation();
  const [desktopView, setDesktopView] = useState(false);
  const isCartActive = location.pathname === "/contacto";
  const isAccountActive = location.pathname === "/cuenta";
  const isAdminActive = location.pathname.startsWith("/admin");

  useEffect(() => {
    const stored = window.localStorage.getItem("totem-rental-desktop-view") === "true";
    setDesktopView(stored);
    document.body.classList.toggle("force-desktop-view", stored);
  }, []);

  const toggleDesktopView = () => {
    const next = !desktopView;
    setDesktopView(next);
    window.localStorage.setItem("totem-rental-desktop-view", String(next));
    document.body.classList.toggle("force-desktop-view", next);
  };

  return (
    <header className="site-header">
      <Link to="/" className="site-logo" aria-label="Ir al inicio de Totem Rental">
        <CabinetLogo />
      </Link>

      <nav className="site-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            data-mobile={item.mobile ? "true" : "false"}
            className={({ isActive }) => `site-nav-link ${isActive ? "is-active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-actions" aria-label="Acciones rápidas">
        {isAdmin && (
          <Link
            to="/admin"
            aria-label="Panel de administración"
            title="Panel de administración"
            className={`action-link ${isAdminActive ? "is-active" : ""}`}
          >
            <LayoutDashboard size={23} strokeWidth={1.9} />
          </Link>
        )}
        <Link
          to="/cuenta"
          aria-label="Cuenta"
          title={user?.email ?? "Cuenta"}
          className={`action-link ${isAccountActive ? "is-active" : ""}`}
        >
          <UserRound size={23} strokeWidth={1.9} />
        </Link>
        <button
          type="button"
          className="desktop-view-toggle"
          aria-pressed={desktopView}
          aria-label={desktopView ? "Usar versión mobile" : "Usar versión escritorio"}
          title={desktopView ? "Usar versión mobile" : "Usar versión escritorio"}
          onClick={toggleDesktopView}
        >
          <Monitor size={22} strokeWidth={1.9} />
          <span>{desktopView ? "Mobile" : "Escritorio"}</span>
        </button>
        <Link
          to="/contacto"
          className={`cart-action action-link ${isCartActive ? "is-active" : ""}`}
          aria-label="Ver carrito"
        >
          <ShoppingCart size={24} strokeWidth={1.9} />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
}
