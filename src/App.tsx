import { lazy, Suspense } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

const basename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");
const CatalogPage = lazy(() => import("./pages/CatalogPage").then((module) => ({ default: module.CatalogPage })));
const CollectionsPage = lazy(() => import("./pages/CollectionsPage").then((module) => ({ default: module.CollectionsPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((module) => ({ default: module.ContactPage })));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage").then((module) => ({ default: module.HowItWorksPage })));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage").then((module) => ({ default: module.ProductDetailPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })));
const AccountPage = lazy(() => import("./pages/AccountPage").then((module) => ({ default: module.AccountPage })));
const AdminPage = lazy(() => import("./pages/AdminPage").then((module) => ({ default: module.AdminPage })));

function PageLoading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <span />
      Preparando el archivo…
    </div>
  );
}

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>Ese cajón no existe.</h1>
      <p>La página pudo haberse movido. Volvé al catálogo para seguir explorando.</p>
      <Link to="/catalogo" className="gabinete-button">Ir al catálogo</Link>
    </section>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "catalogo", element: <CatalogPage /> },
        { path: "producto/:id", element: <ProductDetailPage /> },
        { path: "como-funciona", element: <HowItWorksPage /> },
        { path: "colecciones", element: <CollectionsPage /> },
        { path: "sobre-nosotros", element: <AboutPage /> },
        { path: "cuenta", element: <AccountPage /> },
        { path: "contacto", element: <ContactPage /> },
        { path: "admin", element: <AdminPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);

export function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
