import { CalendarDays } from "lucide-react";
import { useAvailability } from "../context/AvailabilityContext";
import type { Product } from "../types";
import { buildCalendarDays, formatDateRange, rangesOverlap, todayIso } from "../utils/dates";

interface AvailabilityCalendarProps {
  product: Product;
  startDate?: string;
  endDate?: string;
  compact?: boolean;
}

export function AvailabilityCalendar({
  product,
  startDate,
  endDate,
  compact = false,
}: AvailabilityCalendarProps) {
  const { getProductReservations } = useAvailability();
  const reservations = getProductReservations(product.id);
  const days = buildCalendarDays(todayIso(), compact ? 28 : 42);
  const hasSelectedRange = Boolean(startDate && endDate);

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

          return (
            <span
              key={day}
              title={day}
              className={`grid aspect-square place-items-center rounded-md border text-xs ${
                reserved
                  ? "border-gabinete-error/35 bg-gabinete-error/12 text-gabinete-error"
                  : selected
                    ? "border-gabinete-available/45 bg-gabinete-available/14 text-gabinete-available"
                    : "border-gabinete-line/18 bg-gabinete-paperLight/18 text-gabinete-muted"
              }`}
            >
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
        En esta versión estática, las fechas se actualizan en este navegador. Para que todos los
        visitantes vean el mismo calendario hace falta conectar un backend o CMS.
      </p>
    </section>
  );
}
