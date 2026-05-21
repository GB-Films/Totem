import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AvailabilityProvider } from "./context/AvailabilityContext";
import { CatalogProvider } from "./context/CatalogContext";
import { SelectionProvider } from "./context/SelectionContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CatalogProvider>
      <AvailabilityProvider>
        <SelectionProvider>
          <App />
        </SelectionProvider>
      </AvailabilityProvider>
    </CatalogProvider>
  </React.StrictMode>,
);
