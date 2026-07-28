import { Heart, LayoutDashboard, Menu, Monitor, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import { useSelection } from "../context/SelectionContext";
import totemLogoDark from "../assets/brand/totem-logo-dark.png";

const navItems = [
  { to: "/catalogo", label: "Catálogo" },
  { to: "/colecciones", label: "Colecciones" },
  { to: "/como-funciona", label: "Cómo funciona" },
  { to: "/sobre-nosotros", label: "Nosotros" },
];

function CabinetLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <img className="brand-wordmark-image" src={totemLogoDark} alt="" />
      <span className="brand-descriptor">rental de objetos</span>
    </span>
  );
}

export function Header() {
  const { totalItems } = useSelection();
  const { favoriteIds } = useFavorites();
  const { user, isAdmin } = useAuth();
  const location = useLocation();
  const [desktopView, setDesktopView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isCartActive = location.pathname === "/contacto";
  const isAccountActive = location.pathname === "/cuenta";
  const isAdminActive = location.pathname.startsWith("/admin");

  useEffect(() => {
    const stored = window.localStorage.getItem("totem-rental-desktop-view") === "true";
    setDesktopView(stored);
    document.body.classList.toggle("force-desktop-view", stored);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const toggleDesktopView = () => {
    const next = !desktopView;
    setDesktopView(next);
    window.localStorage.setItem("totem-rental-desktop-view", String(next));
    document.body.classList.toggle("force-desktop-view", next);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo" aria-label="Ir al inicio de Totem Rental">
          <CabinetLogo />
        </Link>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          <div className="mobile-nav-heading">
            <span>Explorar Totem</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
              <X size={22} />
            </button>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-nav-link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mobile-nav-extras">
            <Link to="/cuenta">
              <Heart size={17} />
              Favoritos
              {favoriteIds.length > 0 && <span>{favoriteIds.length}</span>}
            </Link>
            <button type="button" onClick={toggleDesktopView} aria-pressed={desktopView}>
              <Monitor size={17} />
              {desktopView ? "Usar vista móvil" : "Usar vista de escritorio"}
            </button>
          </div>
        </nav>

        <div className="site-actions" aria-label="Acciones rápidas">
          {isAdmin && (
            <Link
              to="/admin"
              aria-label="Panel de administración"
              title="Panel de administración"
              className={`action-link admin-action ${isAdminActive ? "is-active" : ""}`}
            >
              <LayoutDashboard size={20} strokeWidth={1.8} />
            </Link>
          )}
          <Link
            to="/cuenta"
            aria-label={user?.email ? `Cuenta de ${user.email}` : "Ingresar o ver cuenta"}
            title={user?.email ?? "Cuenta"}
            className={`action-link ${isAccountActive ? "is-active" : ""}`}
          >
            <UserRound size={20} strokeWidth={1.8} />
            {favoriteIds.length > 0 && <span className="favorite-count">{favoriteIds.length}</span>}
          </Link>
          <Link
            to="/contacto"
            className={`cart-action action-link ${isCartActive ? "is-active" : ""}`}
            aria-label={`Ver selección, ${totalItems} ${totalItems === 1 ? "objeto" : "objetos"}`}
          >
            <ShoppingBag size={21} strokeWidth={1.8} />
            <span>{totalItems}</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
