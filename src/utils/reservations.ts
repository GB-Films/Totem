import type { ReservationStatus } from "../types";

export const PAYMENT_ALIAS = "tomiboe";

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
    description: `Pagá la seña por Mercado Pago al alias ${PAYMENT_ALIAS}.`,
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
