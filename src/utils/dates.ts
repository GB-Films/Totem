const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function todayIso() {
  return toIsoDate(new Date());
}

export function addDaysIso(dateIso: string, days: number) {
  const date = parseIsoDate(dateIso);
  date.setDate(date.getDate() + days);
  return toIsoDate(date);
}

export function parseIsoDate(dateIso: string) {
  const [year, month, day] = dateIso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function getInclusiveDays(startDate?: string, endDate?: string) {
  if (!startDate || !endDate) {
    return 1;
  }
  const start = parseIsoDate(startDate).getTime();
  const end = parseIsoDate(endDate).getTime();
  if (Number.isNaN(start) || Number.isNaN(end) || end < start) {
    return 1;
  }
  return Math.floor((end - start) / MS_PER_DAY) + 1;
}

export function rangesOverlap(
  startA?: string,
  endA?: string,
  startB?: string,
  endB?: string,
) {
  if (!startA || !endA || !startB || !endB) {
    return false;
  }
  return startA <= endB && startB <= endA;
}

export function formatDateRange(startDate?: string, endDate?: string) {
  if (!startDate || !endDate) {
    return "Fechas a definir";
  }
  return `${formatDisplayDate(startDate)} al ${formatDisplayDate(endDate)}`;
}

export function formatDisplayDate(dateIso: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parseIsoDate(dateIso));
}

export function buildCalendarDays(startDate: string, amount: number) {
  return Array.from({ length: amount }, (_, index) => addDaysIso(startDate, index));
}
