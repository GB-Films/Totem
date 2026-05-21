import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { categories as fallbackCategories, products as fallbackProducts } from "../data/products";
import { firebaseEnabled, getFirebaseDb } from "../services/firebase";
import type { Category, Product } from "../types";

interface CatalogContextValue {
  products: Product[];
  categories: Category[];
  availableTags: string[];
  syncMode: "firebase" | "local";
}

const CatalogContext = createContext<CatalogContextValue | undefined>(undefined);

function getCategories(products: Product[]) {
  const categories = new Set<Category>();
  products.forEach((product) => categories.add(product.category));
  return fallbackCategories.filter((category) => categories.has(category));
}

function getTags(products: Product[]) {
  return Array.from(new Set(products.flatMap((product) => product.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function CatalogProvider({ children }: PropsWithChildren) {
  const [firebaseProducts, setFirebaseProducts] = useState<Product[]>([]);

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db) {
      return;
    }

    return onSnapshot(collection(db, "products"), (snapshot) => {
      setFirebaseProducts(snapshot.docs.map((doc) => ({ ...(doc.data() as Product), id: doc.id })));
    });
  }, []);

  const products = useMemo(() => {
    if (!firebaseEnabled || firebaseProducts.length === 0) {
      return fallbackProducts;
    }

    const productsById = new Map(fallbackProducts.map((product) => [product.id, product]));
    firebaseProducts.forEach((product) => productsById.set(product.id, product));
    return Array.from(productsById.values()).sort((a, b) => b.featuredScore - a.featuredScore);
  }, [firebaseProducts]);

  const categories = useMemo(() => getCategories(products), [products]);
  const availableTags = useMemo(() => getTags(products), [products]);

  const value = useMemo(
    () => ({
      products,
      categories,
      availableTags,
      syncMode: firebaseEnabled && firebaseProducts.length > 0 ? "firebase" as const : "local" as const,
    }),
    [availableTags, categories, firebaseProducts.length, products],
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error("useCatalog debe usarse dentro de CatalogProvider");
  }
  return context;
}
