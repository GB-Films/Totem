import type { ReservationRange } from "../types";
import { addDaysIso, todayIso } from "../utils/dates";

export function getSeedReservations(): ReservationRange[] {
  const today = todayIso();

  return [
    {
      id: "seed-eg-001",
      productId: "EG-001",
      startDate: addDaysIso(today, 4),
      endDate: addDaysIso(today, 6),
      source: "mock",
      note: "Rodaje policial",
    },
    {
      id: "seed-eg-004",
      productId: "EG-004",
      startDate: addDaysIso(today, 10),
      endDate: addDaysIso(today, 12),
      source: "mock",
      note: "Sesión editorial",
    },
    {
      id: "seed-eg-007",
      productId: "EG-007",
      startDate: addDaysIso(today, 2),
      endDate: addDaysIso(today, 3),
      source: "mock",
      note: "Videoclip fantasía",
    },
    {
      id: "seed-eg-012",
      productId: "EG-012",
      startDate: today,
      endDate: addDaysIso(today, 14),
      source: "mock",
      note: "Reserva vigente",
    },
  ];
}
