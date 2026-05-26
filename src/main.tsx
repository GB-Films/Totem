import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext";
import { AvailabilityProvider } from "./context/AvailabilityContext";
import { CatalogProvider } from "./context/CatalogContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SelectionProvider } from "./context/SelectionContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CatalogProvider>
        <AvailabilityProvider>
          <FavoritesProvider>
            <SelectionProvider>
              <App />
            </SelectionProvider>
          </FavoritesProvider>
        </AvailabilityProvider>
      </CatalogProvider>
    </AuthProvider>
  </React.StrictMode>,
);
