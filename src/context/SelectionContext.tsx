import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product, SelectionItem } from "../types";

interface SelectionContextValue {
  selection: SelectionItem[];
  totalItems: number;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateRentalDays: (productId: string, rentalDays: number) => void;
  clearSelection: () => void;
  isSelected: (productId: string) => boolean;
}

const STORAGE_KEY = "el-gabinete-selection";
const SelectionContext = createContext<SelectionContextValue | undefined>(undefined);

function readInitialSelection(): SelectionItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored) as SelectionItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function SelectionProvider({ children }: PropsWithChildren) {
  const [selection, setSelection] = useState<SelectionItem[]>(readInitialSelection);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  }, [selection]);

  const addProduct = useCallback((product: Product) => {
    setSelection((current) => {
      const existing = current.find((item) => item.productId === product.id);
      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { productId: product.id, quantity: 1, rentalDays: 1 }];
    });
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setSelection((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setSelection((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  }, []);

  const updateRentalDays = useCallback((productId: string, rentalDays: number) => {
    setSelection((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, rentalDays: Math.max(1, rentalDays) } : item,
      ),
    );
  }, []);

  const clearSelection = useCallback(() => setSelection([]), []);

  const isSelected = useCallback(
    (productId: string) => selection.some((item) => item.productId === productId),
    [selection],
  );

  const value = useMemo(
    () => ({
      selection,
      totalItems: selection.reduce((total, item) => total + item.quantity, 0),
      addProduct,
      removeProduct,
      updateQuantity,
      updateRentalDays,
      clearSelection,
      isSelected,
    }),
    [addProduct, clearSelection, isSelected, removeProduct, selection, updateQuantity, updateRentalDays],
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection debe usarse dentro de SelectionProvider");
  }
  return context;
}
