import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useAvailability } from "../context/AvailabilityContext";
import type { Product } from "../types";
import {
  formatDateRange,
  getNonOperationalReason,
  isOperationalDate,
  parseIsoDate,
  rangesOverlap,
  todayIso,
  toIsoDate,
} from "../utils/dates";
import { getReservationStatusLabel } from "../utils/reservations";

interface AvailabilityCalendarProps {
  product: Product;
  startDate?: string;
  endDate?: string;
  compact?: boolean;
  onRangeChange?: (startDate: string, endDate: string) => void;
}

const weekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function monthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function buildMonthDays(month: Date) {
  const first = monthStart(month);
  const startOffset = (first.getDay() + 6) % 7;
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - startOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return {
      iso: toIsoDate(date),
      inMonth: date.getMonth() === first.getMonth(),
    };
  });
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function AvailabilityCalendar({
  product,
  startDate,
  endDate,
  compact = false,
  onRangeChange,
}: AvailabilityCalendarProps) {
  const {
    getProductReservations,
    hasConflict,
    loadingAvailability,
    availabilityError,
  } = useAvailability();
  const reservations = getProductReservations(product.id);
  const today = todayIso();
  const [visibleMonth, setVisibleMonth] = useState(() =>
    monthStart(startDate ? parseIsoDate(startDate) : parseIsoDate(today)),
  );
  const days = useMemo(() => buildMonthDays(visibleMonth), [visibleMonth]);
  const hasSelectedRange = Boolean(startDate && endDate);
  const interactive = Boolean(onRangeChange) && !loadingAvailability && !availabilityError;

  const rangeHasReservation = (rangeStart: string, rangeEnd: string) =>
    hasConflict(product.id, rangeStart, rangeEnd, 1);

  const selectDay = (day: string) => {
    if (!onRangeChange || day < today || !isOperationalDate(day) || rangeHasReservation(day, day)) {
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

      <div className="calendar-month-bar">
        <button type="button" onClick={() => setVisibleMonth((current) => addMonths(current, -1))}>
          <ChevronLeft size={18} />
        </button>
        <strong>{formatMonth(visibleMonth)}</strong>
        <button type="button" onClick={() => setVisibleMonth((current) => addMonths(current, 1))}>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className={`availability-calendar-grid ${compact ? "is-compact" : ""}`}>
        {weekdays.map((day) => (
          <span key={day} className="calendar-weekday">
            {day}
          </span>
        ))}
        {days.map(({ iso, inMonth }) => {
          const reserved = hasConflict(product.id, iso, iso, 1);
          const selected = hasSelectedRange && rangesOverlap(iso, iso, startDate, endDate);
          const selectedStart = selected && iso === startDate;
          const selectedEnd = selected && iso === endDate;
          const past = iso < today;
          const nonOperational = !isOperationalDate(iso);
          const disabled = loadingAvailability || Boolean(availabilityError) || reserved || past || nonOperational;
          const reason = getNonOperationalReason(iso);

          const dayClass = [
            "calendar-day",
            !inMonth ? "is-outside" : "",
            past ? "is-past" : "",
            nonOperational && !past ? "is-closed" : "",
            reserved ? "is-reserved" : "",
            selected ? "is-selected" : "",
            selectedStart ? "is-start" : "",
            selectedEnd ? "is-end" : "",
            interactive && !disabled ? "is-clickable" : "",
          ].filter(Boolean).join(" ");

          return interactive ? (
            <button
              key={iso}
              type="button"
              title={reason ? `${iso} · Sin retiro/devolución por ${reason}` : iso}
              disabled={disabled}
              onClick={() => selectDay(iso)}
              className={dayClass}
            >
              {Number(iso.slice(-2))}
            </button>
          ) : (
            <span key={iso} title={reason ? `${iso} · Sin retiro/devolución por ${reason}` : iso} className={dayClass}>
              {Number(iso.slice(-2))}
            </span>
          );
        })}
      </div>

      <div className="calendar-legend">
        <span className="inline-flex items-center gap-2">
          <span className="calendar-key is-free" />
          Libre
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="calendar-key is-reserved" />
          No disponible
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="calendar-key is-closed" />
          Sin retiro/devolución
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="calendar-key is-selected" />
          Tu selección
        </span>
      </div>

      {reservations.length > 0 && (
        <div className="mt-5 border-t border-gabinete-line/24 pt-4">
          <p className="font-display text-xs uppercase tracking-[0.14em] text-gabinete-brown">
            Períodos no disponibles
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
                <span> · {getReservationStatusLabel(reservation.status)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 font-editorial text-xs leading-5 text-gabinete-muted">
        {availabilityError
          ? availabilityError
          : loadingAvailability
          ? "Estamos actualizando las fechas disponibles…"
          : interactive
          ? "Tocá una fecha de inicio y luego una de cierre. No se puede retirar ni devolver fines de semana o feriados."
          : "Las fechas confirmadas se sincronizan con Firebase cuando la nube está configurada."}
      </p>
    </section>
  );
}
