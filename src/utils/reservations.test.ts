import { describe, expect, it } from "vitest";
import {
  getReservationHoldExpiration,
  isReservationHoldExpired,
  RESERVATION_HOLD_HOURS,
} from "./reservations";

describe("reservation payment holds", () => {
  const createdAt = Date.UTC(2026, 6, 28, 14, 30);
  const expiresAt = createdAt + RESERVATION_HOLD_HOURS * 60 * 60 * 1000;

  it("expires a pending payment at the explicit hold deadline", () => {
    const hold = {
      status: "payment_pending" as const,
      holdExpiresAt: new Date(expiresAt).toISOString(),
    };

    expect(isReservationHoldExpired(hold, expiresAt - 1)).toBe(false);
    expect(isReservationHoldExpired(hold, expiresAt)).toBe(true);
  });

  it("derives the 24 hour deadline from createdAt for legacy records", () => {
    const hold = {
      status: "payment_pending" as const,
      createdAt: { toMillis: () => createdAt },
    };

    expect(getReservationHoldExpiration(hold)).toBe(expiresAt);
    expect(isReservationHoldExpired(hold, expiresAt)).toBe(true);
  });

  it("does not expire a confirmed reservation", () => {
    expect(isReservationHoldExpired({
      status: "confirmed",
      holdExpiresAt: new Date(createdAt).toISOString(),
    }, expiresAt)).toBe(false);
  });
});
