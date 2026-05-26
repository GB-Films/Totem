import { LayoutDashboard, Monitor, ShoppingCart, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
        <strong>EL GABINETE</strong>
      </span>
    </span>
  );
}

export function Header() {
  const { totalItems } = useSelection();
  const { user, isAdmin } = useAuth();
  const [desktopView, setDesktopView] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("el-gabinete-desktop-view") === "true";
    setDesktopView(stored);
    document.body.classList.toggle("force-desktop-view", stored);
  }, []);

  const toggleDesktopView = () => {
    const next = !desktopView;
    setDesktopView(next);
    window.localStorage.setItem("el-gabinete-desktop-view", String(next));
    document.body.classList.toggle("force-desktop-view", next);
  };

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
            data-mobile={item.mobile ? "true" : "false"}
            className={({ isActive }) => `site-nav-link ${isActive ? "is-active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-actions" aria-label="Acciones rápidas">
        {isAdmin && (
          <Link to="/admin" aria-label="Panel de administración" title="Panel de administración">
            <LayoutDashboard size={23} strokeWidth={1.9} />
          </Link>
        )}
        <Link to="/cuenta" aria-label="Cuenta" title={user?.email ?? "Cuenta"}>
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
        <Link to="/contacto" className="cart-action" aria-label="Ver carrito">
          <ShoppingCart size={24} strokeWidth={1.9} />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
}
