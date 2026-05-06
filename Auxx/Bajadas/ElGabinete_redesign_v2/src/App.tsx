import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CatalogPage } from "./pages/CatalogPage";
import { CollectionsPage } from "./pages/CollectionsPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { InspirationPage } from "./pages/InspirationPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";

const basename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

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
        { path: "inspiracion", element: <InspirationPage /> },
        { path: "sobre-nosotros", element: <AboutPage /> },
        { path: "contacto", element: <ContactPage /> },
      ],
    },
  ],
  { basename },
);

export function App() {
  return <RouterProvider router={router} />;
}
