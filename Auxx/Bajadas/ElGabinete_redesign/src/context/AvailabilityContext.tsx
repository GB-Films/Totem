import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { getSeedReservations } from "../data/availability";
import type { ReservationRange, SelectionItem } from "../types";
import { rangesOverlap } from "../utils/dates";

interface AvailabilityContextValue {
  reservations: ReservationRange[];
  getProductReservations: (productId: string) => ReservationRange[];
  hasConflict: (productId: string, startDate?: string, endDate?: string) => boolean;
  addReservationsFromSelection: (selection: SelectionItem[], note?: string) => void;
}

const STORAGE_KEY = "el-gabinete-local-reservations";
const AvailabilityContext = createContext<AvailabilityContextValue | undefined>(undefined);

function readLocalReservations(): ReservationRange[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored) as ReservationRange[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalReservations(reservations: ReservationRange[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
}

export function AvailabilityProvider({ children }: PropsWithChildren) {
  const seedReservations = useMemo(() => getSeedReservations(), []);
  const [localReservations, setLocalReservations] = useState<ReservationRange[]>(readLocalReservations);

  const reservations = useMemo(
    () => [...seedReservations, ...localReservations],
    [localReservations, seedReservations],
  );

  const getProductReservations = useCallback(
    (productId: string) =>
      reservations
        .filter((reservation) => reservation.productId === productId)
        .sort((a, b) => a.startDate.localeCompare(b.startDate)),
    [reservations],
  );

  const hasConflict = useCallback(
    (productId: string, startDate?: string, endDate?: string) =>
      getProductReservations(productId).some((reservation) =>
        rangesOverlap(startDate, endDate, reservation.startDate, reservation.endDate),
      ),
    [getProductReservations],
  );

  const addReservationsFromSelection = useCallback(
    (selection: SelectionItem[], note = "Consulta enviada") => {
      const datedSelection = selection.filter((item) => item.startDate && item.endDate);
      if (datedSelection.length === 0) {
        return;
      }

      setLocalReservations((current) => {
        const timestamp = Date.now();
        const nextReservations = datedSelection.map<ReservationRange>((item, index) => ({
          id: `local-${timestamp}-${index}-${item.productId}`,
          productId: item.productId,
          startDate: item.startDate!,
          endDate: item.endDate!,
          source: "local",
          note,
        }));
        const next = [...current, ...nextReservations];
        writeLocalReservations(next);
        return next;
      });
    },
    [],
  );

  const value = useMemo(
    () => ({
      reservations,
      getProductReservations,
      hasConflict,
      addReservationsFromSelection,
    }),
    [addReservationsFromSelection, getProductReservations, hasConflict, reservations],
  );

  return <AvailabilityContext.Provider value={value}>{children}</AvailabilityContext.Provider>;
}

export function useAvailability() {
  const context = useContext(AvailabilityContext);
  if (!context) {
    throw new Error("useAvailability debe usarse dentro de AvailabilityProvider");
  }
  return context;
}
