import { Menu, PackageSearch, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/como-funciona", label: "Cómo funciona" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useSelection();

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-coal/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md border border-brass/40 bg-brass/10 font-display text-2xl text-brass">
            G
          </span>
          <span>
            <span className="block font-display text-xl tracking-[0.18em] text-bone">EL GABINETE</span>
            <span className="hidden text-xs uppercase tracking-[0.24em] text-bone/45 sm:block">
              props para escena
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition ${
                  isActive ? "bg-bone/10 text-bone" : "text-bone/65 hover:bg-bone/5 hover:text-bone"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contacto"
            className="hidden items-center gap-2 rounded-md border border-brass/50 px-3 py-2 text-sm font-medium text-bone transition hover:bg-brass/10 sm:inline-flex"
          >
            <PackageSearch size={17} />
            Consulta
            {totalItems > 0 && (
              <span className="rounded-full bg-brass px-2 py-0.5 text-xs text-coal">{totalItems}</span>
            )}
          </Link>
          <button
            type="button"
            className="rounded-md border border-bone/10 p-2 text-bone md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-bone/10 bg-coal px-4 py-4 md:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm transition ${
                    isActive ? "bg-bone/10 text-bone" : "text-bone/70 hover:bg-bone/5 hover:text-bone"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
