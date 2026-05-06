import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CatalogPage } from "./pages/CatalogPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

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
        { path: "contacto", element: <ContactPage /> },
      ],
    },
  ],
  { basename },
);

export function App() {
  return <RouterProvider router={router} />;
}
