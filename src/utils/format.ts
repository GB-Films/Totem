export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);

export const formatPercent = (value: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value);
