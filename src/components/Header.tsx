import { PackageSearch, UserRound } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";

const navItems = [
  { to: "/catalogo", label: "Categorías" },
  { to: "/como-funciona", label: "Cómo alquilar" },
  { to: "/contacto", label: "Contacto" },
  { to: "/catalogo", label: "Curiosidades" },
];

export function Header() {
  const { totalItems } = useSelection();

  return (
    <header className="relative z-40 px-4 pt-7 sm:px-8 lg:px-12">
      <div className="relative flex min-h-24 items-start justify-center">
        <Link
          to="/"
          className="group text-center text-gabinete-darkBrown"
          aria-label="Ir al inicio de EL GABINETE"
        >
          <span className="mx-auto mb-3 block h-px w-44 bg-gradient-to-r from-transparent via-gabinete-brown/60 to-transparent" />
          <span className="block font-display text-lg leading-none tracking-[0.36em]">EL</span>
          <span className="block font-display text-4xl font-semibold leading-none tracking-[0.18em] text-gabinete-brown drop-shadow-sm sm:text-5xl">
            GABINETE
          </span>
          <span className="mt-2 block font-editorial text-sm italic tracking-wide text-gabinete-muted">
            Objetos con pasado para historias por venir
          </span>
          <span className="mx-auto mt-3 block h-px w-56 bg-gradient-to-r from-transparent via-gabinete-brown/60 to-transparent" />
        </Link>

        <div className="absolute right-0 top-1 flex items-center gap-2">
          <Link to="/contacto" className="gabinete-button px-4 py-2">
            <UserRound size={15} />
            Ingresar
          </Link>
          <Link to="/contacto" className="gabinete-button-secondary px-3 py-2" aria-label="Ver selección">
            <PackageSearch size={16} />
            {totalItems > 0 && (
              <span className="ml-1 rounded-full bg-gabinete-brown px-2 py-0.5 font-body text-[11px] text-gabinete-paperLight">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav
        className="archive-rule mt-6 flex items-center justify-center overflow-x-auto whitespace-nowrap py-5"
        aria-label="Navegación principal"
      >
        <div className="flex min-w-max items-center gap-8 px-2 sm:gap-12">
          {navItems.map((item, index) => (
            <NavLink
              key={`${item.label}-${index}`}
              to={item.to}
              className={({ isActive }) =>
                `relative font-display text-[15px] font-medium uppercase tracking-[0.08em] text-gabinete-darkBrown after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gabinete-brown after:transition-all ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
