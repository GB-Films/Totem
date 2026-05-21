import { CalendarDays } from "lucide-react";
import { useAvailability } from "../context/AvailabilityContext";
import type { Product } from "../types";
import { buildCalendarDays, formatDateRange, rangesOverlap, todayIso } from "../utils/dates";

interface AvailabilityCalendarProps {
  product: Product;
  startDate?: string;
  endDate?: string;
  compact?: boolean;
  onRangeChange?: (startDate: string, endDate: string) => void;
}

export function AvailabilityCalendar({
  product,
  startDate,
  endDate,
  compact = false,
  onRangeChange,
}: AvailabilityCalendarProps) {
  const { getProductReservations } = useAvailability();
  const reservations = getProductReservations(product.id);
  const days = buildCalendarDays(todayIso(), compact ? 28 : 42);
  const hasSelectedRange = Boolean(startDate && endDate);
  const interactive = Boolean(onRangeChange);

  const rangeHasReservation = (rangeStart: string, rangeEnd: string) =>
    reservations.some((reservation) =>
      rangesOverlap(rangeStart, rangeEnd, reservation.startDate, reservation.endDate),
    );

  const selectDay = (day: string) => {
    if (!onRangeChange || rangeHasReservation(day, day)) {
      return;
    }

    if (!startDate || !endDate || startDate !== endDate) {
      onRangeChange(day, day);
      return;
    }

    const nextStart = day < startDate ? day : startDate;
    const nextEnd = day < startDate ? startDate : day;

    if (rangeHasReservation(nextStart, nextEnd)) {
      onRangeChange(day, day);
      return;
    }

    onRangeChange(nextStart, nextEnd);
  };

  return (
    <section className="parchment-panel p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <CalendarDays size={15} />
            Calendario
          </p>
          <h2 className="mt-2 font-display text-2xl text-gabinete-darkBrown">
            Disponibilidad de {product.name}
          </h2>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-1.5">
        {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => (
          <span
            key={`${day}-${index}`}
            className="text-center font-display text-[11px] uppercase text-gabinete-faint"
          >
            {day}
          </span>
        ))}
        {days.map((day) => {
          const reserved = reservations.some((reservation) =>
            rangesOverlap(day, day, reservation.startDate, reservation.endDate),
          );
          const selected = hasSelectedRange && rangesOverlap(day, day, startDate, endDate);

          const dayClass = `grid aspect-square place-items-center rounded-md border text-xs transition ${
            reserved
              ? "border-gabinete-error/35 bg-gabinete-error/12 text-gabinete-error"
              : selected
                ? "border-gabinete-available/45 bg-gabinete-available/14 text-gabinete-available"
                : "border-gabinete-line/18 bg-gabinete-paperLight/18 text-gabinete-muted"
          } ${interactive && !reserved ? "cursor-pointer hover:border-gabinete-brown hover:text-gabinete-darkBrown" : ""}`;

          return interactive ? (
            <button
              key={day}
              type="button"
              title={day}
              disabled={reserved}
              onClick={() => selectDay(day)}
              className={dayClass}
            >
              {Number(day.slice(-2))}
            </button>
          ) : (
            <span key={day} title={day} className={dayClass}>
              {Number(day.slice(-2))}
            </span>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-xs text-gabinete-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-gabinete-line/25 bg-gabinete-paperLight/30" />
          Libre
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-gabinete-error/35 bg-gabinete-error/12" />
          Solicitado
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-gabinete-available/45 bg-gabinete-available/14" />
          Tu selección
        </span>
      </div>

      {reservations.length > 0 && (
        <div className="mt-5 border-t border-gabinete-line/24 pt-4">
          <p className="font-display text-xs uppercase tracking-[0.14em] text-gabinete-brown">
            Fechas ya solicitadas
          </p>
          <div className="mt-3 space-y-2">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="rounded-md border border-gabinete-line/20 bg-gabinete-paperLight/18 px-3 py-2 text-sm text-gabinete-muted"
              >
                <span className="font-medium text-gabinete-darkBrown">
                  {formatDateRange(reservation.startDate, reservation.endDate)}
                </span>
                {reservation.note && <span> · {reservation.note}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 font-editorial text-xs leading-5 text-gabinete-muted">
        {interactive
          ? "Tocá una fecha de inicio y luego una de cierre. Las fechas rojas ya no se pueden reservar."
          : "Las fechas confirmadas se sincronizan con Firebase cuando la nube está configurada."}
      </p>
    </section>
  );
}
