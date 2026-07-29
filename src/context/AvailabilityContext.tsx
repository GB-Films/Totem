import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  collection,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { getFirebaseDb } from "../services/firebase";
import type {
  Booking,
  BookingItem,
  ReservationRange,
  ReservationStatus,
  SelectionItem,
} from "../types";
import { rangesOverlap } from "../utils/dates";
import { calculateProductPricing, calculateSelectionPricing } from "../utils/pricing";
import {
  isReservationHoldExpired,
  PAYMENT_ALIAS,
  RESERVATION_HOLD_HOURS,
} from "../utils/reservations";
import { useAuth } from "./AuthContext";
import { useCatalog } from "./CatalogContext";

interface BookingMeta {
  customerName: string;
  customerEmail: string;
  createdByUid: string;
  pickupOption: Booking["pickupOption"];
  projectName?: string;
  note?: string;
}

interface AvailabilityContextValue {
  reservations: ReservationRange[];
  bookings: Booking[];
  loadingAvailability: boolean;
  loadingBookings: boolean;
  availabilityError: string;
  getProductReservations: (productId: string) => ReservationRange[];
  hasConflict: (
    productId: string,
    startDate?: string,
    endDate?: string,
    requestedQuantity?: number,
  ) => boolean;
  createBooking: (selection: SelectionItem[], meta: BookingMeta) => Promise<Booking>;
  syncMode: "firebase";
}

const AvailabilityContext = createContext<AvailabilityContextValue | undefined>(undefined);
const HOLD_REFRESH_INTERVAL = 30 * 1000;

function isBlockingStatus(status?: ReservationStatus) {
  return !status
    || ["request_sent", "payment_pending", "confirmed", "ready_for_pickup", "active", "pending"].includes(status);
}

function blocksAvailability(reservation: ReservationRange, now: number) {
  if (!isBlockingStatus(reservation.status)) {
    return false;
  }

  if (isReservationHoldExpired(reservation, now)) {
    return false;
  }

  return true;
}

function createBookingCode() {
  const date = new Date();
  const compactDate = [
    String(date.getFullYear()).slice(-2),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TR-${compactDate}-${random}`;
}

function createHoldExpiration() {
  return new Date(
    Date.now() + RESERVATION_HOLD_HOURS * 60 * 60 * 1000,
  ).toISOString();
}

function toBooking(id: string, data: Omit<Booking, "id">): Booking {
  return {
    id,
    code: data.code || id.slice(0, 8).toUpperCase(),
    items: Array.isArray(data.items) ? data.items : [],
    status: data.status ?? "payment_pending",
    customerName: data.customerName ?? "",
    customerEmail: data.customerEmail ?? "",
    createdByUid: data.createdByUid ?? "",
    paymentAlias: PAYMENT_ALIAS,
    pickupOption: data.pickupOption ?? "reservation_day",
    projectName: data.projectName,
    note: data.note,
    reserveDeposit: Number(data.reserveDeposit) || 0,
    guaranteeAmount: Number(data.guaranteeAmount) || 0,
    rentalTotal: Number(data.rentalTotal) || 0,
    totalEstimated: Number(data.totalEstimated) || 0,
    holdExpiresAt: data.holdExpiresAt,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

export function AvailabilityProvider({ children }: PropsWithChildren) {
  const db = getFirebaseDb();
  const { user, isAdmin } = useAuth();
  const { products } = useCatalog();
  const [reservations, setReservations] = useState<ReservationRange[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(true);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [availabilityError, setAvailabilityError] = useState("");
  const [holdClock, setHoldClock] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(
      () => setHoldClock(Date.now()),
      HOLD_REFRESH_INTERVAL,
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!db) {
      setLoadingAvailability(false);
      setAvailabilityError("No se pudo conectar con la disponibilidad.");
      return;
    }

    return onSnapshot(
      collection(db, "reservationRanges"),
      (snapshot) => {
        setReservations(
          snapshot.docs.map((rangeDoc) => {
            const data = rangeDoc.data() as Omit<ReservationRange, "id" | "source">;
            return {
              id: rangeDoc.id,
              bookingId: data.bookingId,
              productId: data.productId,
              startDate: data.startDate,
              endDate: data.endDate,
              quantity: Math.max(1, Number(data.quantity) || 1),
              status: data.status,
              holdExpiresAt: data.holdExpiresAt,
              createdAt: data.createdAt,
              source: "firebase",
            };
          }),
        );
        setLoadingAvailability(false);
        setAvailabilityError("");
      },
      (snapshotError) => {
        console.error(snapshotError);
        setLoadingAvailability(false);
        setAvailabilityError("No pudimos actualizar la disponibilidad.");
      },
    );
  }, [db]);

  useEffect(() => {
    if (!db || !user) {
      setBookings([]);
      setLoadingBookings(false);
      return;
    }

    setLoadingBookings(true);
    const bookingsQuery = isAdmin
      ? collection(db, "bookings")
      : query(collection(db, "bookings"), where("createdByUid", "==", user.uid));

    return onSnapshot(
      bookingsQuery,
      (snapshot) => {
        setBookings(
          snapshot.docs
            .map((bookingDoc) => toBooking(
              bookingDoc.id,
              bookingDoc.data() as Omit<Booking, "id">,
            ))
            .sort((a, b) => {
              const aDate = a.items[0]?.startDate ?? "";
              const bDate = b.items[0]?.startDate ?? "";
              return bDate.localeCompare(aDate);
            }),
        );
        setLoadingBookings(false);
      },
      (snapshotError) => {
        console.error(snapshotError);
        setLoadingBookings(false);
      },
    );
  }, [db, isAdmin, user]);

  const getProductReservations = useCallback(
    (productId: string) =>
      reservations
        .filter((reservation) =>
          reservation.productId === productId
          && blocksAvailability(reservation, holdClock),
        )
        .sort((a, b) => a.startDate.localeCompare(b.startDate)),
    [holdClock, reservations],
  );

  const effectiveBookings = useMemo(
    () => bookings.map((booking) => ({
      ...booking,
      holdExpired: isReservationHoldExpired(booking, holdClock),
    })),
    [bookings, holdClock],
  );

  const hasConflict = useCallback(
    (productId: string, startDate?: string, endDate?: string, requestedQuantity = 1) => {
      if (!startDate || !endDate) {
        return false;
      }

      const product = products.find((candidate) => candidate.id === productId);
      const stock = product?.stock ?? 1;
      const overlappingQuantity = getProductReservations(productId)
        .filter((reservation) =>
          rangesOverlap(startDate, endDate, reservation.startDate, reservation.endDate),
        )
        .reduce((total, reservation) => total + Math.max(1, reservation.quantity ?? 1), 0);
      return overlappingQuantity + Math.max(1, requestedQuantity) > stock;
    },
    [getProductReservations, products],
  );

  const createBooking = useCallback(
    async (selection: SelectionItem[], meta: BookingMeta) => {
      if (!db) {
        throw new Error("No se pudo conectar con la base de datos.");
      }
      if (loadingAvailability) {
        throw new Error("La disponibilidad todavía se está actualizando. Probá de nuevo en unos segundos.");
      }

      const items = selection.map<BookingItem>((item) => {
        const product = products.find((candidate) => candidate.id === item.productId);
        if (!product || !item.startDate || !item.endDate) {
          throw new Error("La selección contiene un objeto o fechas que ya no están disponibles.");
        }
        if (product.availability !== "Disponible") {
          throw new Error(`${product.name} requiere consulta antes de reservar.`);
        }
        if (product.rentalPricePerWeek <= 0) {
          throw new Error(`${product.name} todavía no tiene un precio publicado.`);
        }
        if (item.quantity > product.stock) {
          throw new Error(`Sólo hay ${product.stock} unidad${product.stock === 1 ? "" : "es"} de ${product.name}.`);
        }
        if (hasConflict(product.id, item.startDate, item.endDate, item.quantity)) {
          throw new Error(`Las fechas elegidas para ${product.name} ya no están disponibles.`);
        }

        const pricing = calculateProductPricing(product, item);
        return {
          productId: product.id,
          productName: product.name,
          quantity: item.quantity,
          rentalDays: item.rentalDays,
          startDate: item.startDate,
          endDate: item.endDate,
          ...pricing,
        };
      });

      if (items.length === 0) {
        throw new Error("No hay objetos para reservar.");
      }

      const pricing = calculateSelectionPricing(products, selection);
      const bookingRef = doc(collection(db, "bookings"));
      const code = createBookingCode();
      const holdExpiresAt = createHoldExpiration();
      const booking: Booking = {
        id: bookingRef.id,
        code,
        items,
        status: "payment_pending",
        customerName: meta.customerName,
        customerEmail: meta.customerEmail,
        createdByUid: meta.createdByUid,
        paymentAlias: PAYMENT_ALIAS,
        pickupOption: meta.pickupOption,
        ...(meta.projectName?.trim() ? { projectName: meta.projectName.trim() } : {}),
        ...(meta.note?.trim() ? { note: meta.note.trim() } : {}),
        reserveDeposit: pricing.reserveDeposit,
        guaranteeAmount: pricing.guaranteeAmount,
        rentalTotal: pricing.rentalTotal,
        totalEstimated: pricing.totalEstimated,
        holdExpiresAt,
      };

      const batch = writeBatch(db);
      const { id: bookingId, ...bookingData } = booking;
      void bookingId;
      batch.set(bookingRef, {
        ...bookingData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      items.forEach((item) => {
        const rangeRef = doc(collection(db, "reservationRanges"));
        batch.set(rangeRef, {
          bookingId: bookingRef.id,
          productId: item.productId,
          quantity: item.quantity,
          startDate: item.startDate,
          endDate: item.endDate,
          status: booking.status,
          holdExpiresAt,
          createdAt: serverTimestamp(),
        });
      });

      await batch.commit();
      return booking;
    },
    [db, hasConflict, loadingAvailability, products],
  );

  const value = useMemo(
    () => ({
      reservations,
      bookings: effectiveBookings,
      loadingAvailability,
      loadingBookings,
      availabilityError,
      getProductReservations,
      hasConflict,
      createBooking,
      syncMode: "firebase" as const,
    }),
    [
      availabilityError,
      createBooking,
      effectiveBookings,
      getProductReservations,
      hasConflict,
      loadingAvailability,
      loadingBookings,
      reservations,
    ],
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
