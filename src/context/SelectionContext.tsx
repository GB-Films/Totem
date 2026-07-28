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
import { getInclusiveDays, todayIso } from "../utils/dates";

interface SelectionContextValue {
  selection: SelectionItem[];
  totalItems: number;
  addProduct: (product: Product, startDate: string, endDate: string) => void;
  removeProduct: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number, maxQuantity?: number) => void;
  updateRentalDays: (productId: string, rentalDays: number) => void;
  updateRentalDates: (productId: string, startDate: string, endDate: string) => void;
  clearSelection: () => void;
  isSelected: (productId: string) => boolean;
}

const STORAGE_KEY = "el-gabinete-selection";
const SelectionContext = createContext<SelectionContextValue | undefined>(undefined);

function normalizeSelectionItem(item: SelectionItem): SelectionItem {
  const startDate = item.startDate ?? todayIso();
  const endDate = item.endDate ?? startDate;
  return {
    ...item,
    quantity: Math.max(1, item.quantity || 1),
    startDate,
    endDate,
    rentalDays: getInclusiveDays(startDate, endDate),
  };
}

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
    return Array.isArray(parsed) ? parsed.map(normalizeSelectionItem) : [];
  } catch {
    return [];
  }
}

export function SelectionProvider({ children }: PropsWithChildren) {
  const [selection, setSelection] = useState<SelectionItem[]>(readInitialSelection);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
  }, [selection]);

  const addProduct = useCallback((product: Product, startDate: string, endDate: string) => {
    setSelection((current) => {
      const existing = current.find((item) => item.productId === product.id);
      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? {
              ...item,
                quantity: Math.min(product.stock, item.quantity + 1),
                startDate,
                endDate,
                rentalDays: getInclusiveDays(startDate, endDate),
              }
            : item,
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          quantity: 1,
          rentalDays: getInclusiveDays(startDate, endDate),
          startDate,
          endDate,
        },
      ];
    });
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setSelection((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, maxQuantity = Number.MAX_SAFE_INTEGER) => {
    setSelection((current) =>
      current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(maxQuantity, Math.max(1, quantity || 1)) }
          : item,
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

  const updateRentalDates = useCallback((productId: string, startDate: string, endDate: string) => {
    setSelection((current) =>
      current.map((item) =>
        item.productId === productId
          ? { ...item, startDate, endDate, rentalDays: getInclusiveDays(startDate, endDate) }
          : item,
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
      updateRentalDates,
      clearSelection,
      isSelected,
    }),
    [
      addProduct,
      clearSelection,
      isSelected,
      removeProduct,
      selection,
      updateQuantity,
      updateRentalDates,
      updateRentalDays,
    ],
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
