import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="app-frame">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <div className="parchment-shell text-gabinete-text">
        <Header />
        <main id="contenido-principal">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
