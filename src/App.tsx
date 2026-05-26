import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CatalogPage } from "./pages/CatalogPage";
import { CollectionsPage } from "./pages/CollectionsPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { AccountPage } from "./pages/AccountPage";

const basename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");
const AdminPage = lazy(() => import("./pages/AdminPage").then((module) => ({ default: module.AdminPage })));

function AdminRoute() {
  return (
    <Suspense fallback={<div className="admin-page">Cargando panel...</div>}>
      <AdminPage />
    </Suspense>
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
        { path: "admin", element: <AdminRoute /> },
      ],
    },
  ],
  { basename },
);

export function App() {
  return <RouterProvider router={router} />;
}
