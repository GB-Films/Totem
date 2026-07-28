import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { categories as allCategories } from "../data/products";
import { getFirebaseDb } from "../services/firebase";
import type { Availability, Category, Product, ProductStatus, ProductVisual } from "../types";

interface CatalogContextValue {
  products: Product[];
  categories: Category[];
  availableTags: string[];
  loading: boolean;
  error: string;
  syncMode: "firebase" | "local";
}

const CatalogContext = createContext<CatalogContextValue | undefined>(undefined);

function getCategories(products: Product[]) {
  const categories = new Set<Category>();
  products.forEach((product) => categories.add(product.category));
  return allCategories.filter((category) => categories.has(category));
}

function getTags(products: Product[]) {
  return Array.from(new Set(products.flatMap((product) => product.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
}

const productStatuses: ProductStatus[] = ["Excelente", "Muy bueno", "Bueno", "Delicado"];
const availabilityStatuses: Availability[] = ["Disponible", "Consultar", "Reservado"];
const visualTones: ProductVisual["tone"][] = ["brass", "green", "red", "blue", "paper", "copper"];

function finiteNumber(value: unknown, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function normalizeGuaranteePercentage(value: unknown) {
  const percentage = Math.max(0, finiteNumber(value, 0.3));
  return percentage > 1 ? Math.min(percentage / 100, 1) : percentage;
}

function normalizeProduct(id: string, data: Partial<Product>): Product {
  const description = typeof data.description === "string" ? data.description.trim() : "";
  const describedStock = description.match(/(\d+)\s+unidades?\s+disponibles?/i);
  const category = allCategories.includes(data.category as Category)
    ? (data.category as Category)
    : "Utilería";
  const status = productStatuses.includes(data.status as ProductStatus)
    ? (data.status as ProductStatus)
    : "Bueno";
  const availability = availabilityStatuses.includes(data.availability as Availability)
    ? (data.availability as Availability)
    : "Consultar";
  const tone = visualTones.includes(data.visual?.tone as ProductVisual["tone"])
    ? (data.visual?.tone as ProductVisual["tone"])
    : "paper";

  return {
    id,
    name: typeof data.name === "string" && data.name.trim() ? data.name.trim() : `Objeto ${id}`,
    images: Array.isArray(data.images)
      ? data.images.filter((image): image is string => typeof image === "string" && image.length > 0)
      : [],
    category,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string" && tag.trim().length > 0)
      : [],
    rentalPricePerDay: Math.max(0, finiteNumber(data.rentalPricePerDay)),
    ...(data.rentalPricePerWeek
      ? { rentalPricePerWeek: Math.max(0, finiteNumber(data.rentalPricePerWeek)) }
      : {}),
    description,
    curiosities: typeof data.curiosities === "string" ? data.curiosities.trim() : "",
    status,
    measurements: typeof data.measurements === "string" ? data.measurements.trim() : "",
    material: typeof data.material === "string" ? data.material.trim() : "",
    color: typeof data.color === "string" ? data.color.trim() : "",
    eraStyle: typeof data.eraStyle === "string" ? data.eraStyle.trim() : "",
    availability,
    estimatedValue: Math.max(0, finiteNumber(data.estimatedValue)),
    guaranteePercentage: normalizeGuaranteePercentage(data.guaranteePercentage),
    minimumDeposit: Math.max(0, finiteNumber(data.minimumDeposit)),
    featuredScore: finiteNumber(data.featuredScore, 0),
    stock: Math.max(
      1,
      Math.floor(finiteNumber(data.stock, describedStock ? Number(describedStock[1]) : 1)),
    ),
    ...(typeof data.internalNotes === "string" && data.internalNotes.trim()
      ? { internalNotes: data.internalNotes.trim() }
      : {}),
    visual: {
      tone,
      sigil: typeof data.visual?.sigil === "string" && data.visual.sigil.trim()
        ? data.visual.sigil
        : "✶",
    },
  };
}

export function CatalogProvider({ children }: PropsWithChildren) {
  const [firebaseProducts, setFirebaseProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db) {
      setLoading(false);
      setError("No se pudo conectar con el catálogo.");
      return;
    }

    return onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        setFirebaseProducts(
          snapshot.docs
            .map((productDoc) => normalizeProduct(productDoc.id, productDoc.data() as Partial<Product>))
            .sort((a, b) => b.featuredScore - a.featuredScore || a.name.localeCompare(b.name)),
        );
        setError("");
        setLoading(false);
      },
      (snapshotError) => {
        console.error(snapshotError);
        setError("No pudimos cargar el catálogo. Revisá tu conexión e intentá de nuevo.");
        setLoading(false);
      },
    );
  }, []);

  const products = firebaseProducts;

  const categories = useMemo(() => getCategories(products), [products]);
  const availableTags = useMemo(() => getTags(products), [products]);

  const value = useMemo(
    () => ({
      products,
      categories,
      availableTags,
      loading,
      error,
      syncMode: "firebase" as const,
    }),
    [availableTags, categories, error, loading, products],
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
