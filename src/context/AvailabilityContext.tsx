import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { RESERVATIONS_ENABLED } from "../config/features";
import { getSeedReservations } from "../data/availability";
import { firebaseEnabled, getFirebaseDb } from "../services/firebase";
import type { ReservationRange, SelectionItem } from "../types";
import { getInclusiveDays, rangesOverlap } from "../utils/dates";

interface ReservationMeta {
  customerName?: string;
  customerEmail?: string;
  createdByUid?: string;
  status?: ReservationRange["status"];
  paymentAlias?: string;
  pickupOption?: ReservationRange["pickupOption"];
  reserveDeposit?: number;
  guaranteeAmount?: number;
  totalEstimated?: number;
}

interface AvailabilityContextValue {
  reservations: ReservationRange[];
  getProductReservations: (productId: string) => ReservationRange[];
  hasConflict: (productId: string, startDate?: string, endDate?: string) => boolean;
  addReservationsFromSelection: (selection: SelectionItem[], note?: string, meta?: ReservationMeta) => Promise<void>;
  syncMode: "firebase" | "local";
}

const STORAGE_KEY = "el-gabinete-local-reservations";
const AvailabilityContext = createContext<AvailabilityContextValue | undefined>(undefined);

function blocksAvailability(reservation: ReservationRange) {
  return reservation.status !== "cancelled" && reservation.status !== "returned";
}

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
  const [firebaseReservations, setFirebaseReservations] = useState<ReservationRange[]>([]);

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db) {
      return;
    }

    return onSnapshot(collection(db, "reservations"), (snapshot) => {
      setFirebaseReservations(
        snapshot.docs.map((doc) => {
          const data = doc.data() as Omit<ReservationRange, "id" | "source">;
          return {
            id: doc.id,
            productId: data.productId,
            startDate: data.startDate,
            endDate: data.endDate,
            note: data.note,
            quantity: data.quantity,
            rentalDays: data.rentalDays,
            status: data.status,
            customerName: data.customerName,
            customerEmail: data.customerEmail,
            createdByUid: data.createdByUid,
            paymentAlias: data.paymentAlias,
            pickupOption: data.pickupOption,
            reserveDeposit: data.reserveDeposit,
            guaranteeAmount: data.guaranteeAmount,
            totalEstimated: data.totalEstimated,
            source: "firebase",
          };
        }),
      );
    });
  }, []);

  const reservations = useMemo(
    () => (firebaseEnabled ? firebaseReservations : RESERVATIONS_ENABLED ? [...seedReservations, ...localReservations] : []),
    [firebaseReservations, localReservations, seedReservations],
  );

  const getProductReservations = useCallback(
    (productId: string) =>
      reservations
        .filter((reservation) => reservation.productId === productId && blocksAvailability(reservation))
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
    async (selection: SelectionItem[], note = "Reserva pendiente de pago", meta: ReservationMeta = {}) => {
      if (!RESERVATIONS_ENABLED) {
        return;
      }

      const datedSelection = selection.filter((item) => item.startDate && item.endDate);
      if (datedSelection.length === 0) {
        return;
      }

      const db = getFirebaseDb();
      if (db) {
        await Promise.all(
          datedSelection.map((item) => {
            const payload: Omit<ReservationRange, "id" | "source"> & { createdAt: ReturnType<typeof serverTimestamp> } = {
              productId: item.productId,
              quantity: Math.max(1, item.quantity),
              rentalDays: getInclusiveDays(item.startDate, item.endDate),
              startDate: item.startDate!,
              endDate: item.endDate!,
              note,
              status: meta.status ?? "payment_pending",
              createdAt: serverTimestamp(),
            };

            if (meta.customerName) {
              payload.customerName = meta.customerName;
            }

            if (meta.customerEmail) {
              payload.customerEmail = meta.customerEmail;
            }

            if (meta.createdByUid) {
              payload.createdByUid = meta.createdByUid;
            }

            if (meta.paymentAlias) {
              payload.paymentAlias = meta.paymentAlias;
            }

            if (meta.pickupOption) {
              payload.pickupOption = meta.pickupOption;
            }

            if (typeof meta.reserveDeposit === "number") {
              payload.reserveDeposit = meta.reserveDeposit;
            }

            if (typeof meta.guaranteeAmount === "number") {
              payload.guaranteeAmount = meta.guaranteeAmount;
            }

            if (typeof meta.totalEstimated === "number") {
              payload.totalEstimated = meta.totalEstimated;
            }

            return addDoc(collection(db, "reservations"), payload);
          }),
        );
        return;
      }

      setLocalReservations((current) => {
        const timestamp = Date.now();
        const nextReservations = datedSelection.map<ReservationRange>((item, index) => ({
          id: `local-${timestamp}-${index}-${item.productId}`,
          productId: item.productId,
          quantity: Math.max(1, item.quantity),
          rentalDays: getInclusiveDays(item.startDate, item.endDate),
          startDate: item.startDate!,
          endDate: item.endDate!,
          source: "local",
          status: meta.status ?? "payment_pending",
          note,
          customerName: meta.customerName,
          customerEmail: meta.customerEmail,
          createdByUid: meta.createdByUid,
          paymentAlias: meta.paymentAlias,
          pickupOption: meta.pickupOption,
          reserveDeposit: meta.reserveDeposit,
          guaranteeAmount: meta.guaranteeAmount,
          totalEstimated: meta.totalEstimated,
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
      syncMode: firebaseEnabled ? "firebase" as const : "local" as const,
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
