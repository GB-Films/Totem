import type { ReservationStatus } from "../types";

export const PAYMENT_ALIAS = "totem.rental";
export const PAYMENT_CVU = "0000003100074005001115";
export const PAYMENT_HOLDER = "Paula Florencia Burna Elstner";
export const RESERVATION_HOLD_HOURS = 24;

interface PaymentHold {
  status?: ReservationStatus;
  holdExpiresAt?: string;
  createdAt?: unknown;
}

function dateLikeToMillis(value: unknown) {
  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value).getTime();
    return Number.isNaN(parsed) ? null : parsed;
  }

  if (!value || typeof value !== "object") {
    return null;
  }

  const timestamp = value as {
    seconds?: number;
    toDate?: () => Date;
    toMillis?: () => number;
  };

  if (typeof timestamp.toMillis === "function") {
    const millis = timestamp.toMillis();
    return Number.isFinite(millis) ? millis : null;
  }

  if (typeof timestamp.toDate === "function") {
    const millis = timestamp.toDate().getTime();
    return Number.isNaN(millis) ? null : millis;
  }

  return typeof timestamp.seconds === "number" ? timestamp.seconds * 1000 : null;
}

export function getReservationHoldExpiration(hold: PaymentHold) {
  const explicitExpiration = dateLikeToMillis(hold.holdExpiresAt);
  if (explicitExpiration !== null) {
    return explicitExpiration;
  }

  const createdAt = dateLikeToMillis(hold.createdAt);
  return createdAt === null
    ? null
    : createdAt + RESERVATION_HOLD_HOURS * 60 * 60 * 1000;
}

export function isReservationHoldExpired(hold: PaymentHold, now = Date.now()) {
  if (hold.status !== "payment_pending") {
    return false;
  }

  const expiration = getReservationHoldExpiration(hold);
  return expiration !== null && expiration <= now;
}

export const reservationStatusSteps: Array<{
  status: ReservationStatus;
  label: string;
  description: string;
}> = [
  {
    status: "request_sent",
    label: "Solicitud enviada",
    description: "El pedido quedó registrado con las piezas y fechas elegidas.",
  },
  {
    status: "payment_pending",
    label: "Pago de seña pendiente",
    description: `Transferí la seña al alias ${PAYMENT_ALIAS}.`,
  },
  {
    status: "confirmed",
    label: "Confirmada",
    description: "El pago fue validado y las fechas quedaron confirmadas.",
  },
  {
    status: "ready_for_pickup",
    label: "Lista para retiro",
    description: "La selección está preparada para retirar.",
  },
  {
    status: "active",
    label: "En alquiler",
    description: "Los objetos están fuera de Totem Rental.",
  },
  {
    status: "returned",
    label: "Devuelta",
    description: "La reserva fue devuelta y cerrada.",
  },
];

export function getReservationStatusLabel(status?: ReservationStatus) {
  if (status === "pending") {
    return "Pendiente";
  }

  if (status === "cancelled") {
    return "Cancelada";
  }

  return reservationStatusSteps.find((step) => step.status === status)?.label ?? "Confirmada";
}

export function getReservationStatusIndex(status?: ReservationStatus) {
  if (status === "pending") {
    return 0;
  }

  const index = reservationStatusSteps.findIndex((step) => step.status === status);
  return index >= 0 ? index : 2;
}
