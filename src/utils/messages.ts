import type { Product, SelectionItem } from "../types";
import { formatDateRange } from "./dates";
import { formatCurrency } from "./format";
import { calculateSelectionPricing } from "./pricing";

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectName: string;
  projectType: string;
  dates: string;
  message: string;
}

export function buildSelectionSummary(products: Product[], selection: SelectionItem[]) {
  if (selection.length === 0) {
    return "Sin objetos seleccionados todavía.";
  }

  return selection
    .map((item) => {
      const product = products.find((candidate) => candidate.id === item.productId);
      if (!product) {
        return null;
      }
      return `- ${product.name} (${product.id}) x${item.quantity}, ${item.rentalDays} día(s), ${formatDateRange(item.startDate, item.endDate)}`;
    })
    .filter(Boolean)
    .join("\n");
}

export function buildContactMessage(
  values: ContactFormValues,
  products: Product[],
  selection: SelectionItem[],
) {
  const pricing = calculateSelectionPricing(products, selection);
  return [
    "Hola, TOTEM RENTAL. Quiero avanzar con esta reserva de props.",
    "",
    ...(values.name || values.email
      ? [
          "Datos de contacto:",
          ...(values.name ? [`Nombre: ${values.name}`] : []),
          ...(values.email ? [`Email: ${values.email}`] : []),
          ...(values.phone ? [`Celular: ${values.phone}`] : []),
          "",
        ]
      : []),
    ...(values.projectName
      ? [
          `Proyecto: ${values.projectName}`,
          ...(values.projectType ? [`Tipo: ${values.projectType}`] : []),
          "",
        ]
      : []),
    "",
    "Productos seleccionados:",
    buildSelectionSummary(products, selection),
    "",
    `Alquiler estimado: ${formatCurrency(pricing.rentalTotal)}`,
    `Seña estimada 20%: ${formatCurrency(pricing.reserveDeposit)}`,
    `Garantía reintegrable estimada: ${formatCurrency(pricing.guaranteeAmount)}`,
    `Total estimado general: ${formatCurrency(pricing.totalEstimated)}`,
    ...(values.message ? ["", `Nota: ${values.message}`] : []),
  ].join("\n");
}

export function buildMailtoUrl(message: string) {
  const subject = encodeURIComponent("Consulta de reserva - TOTEM RENTAL");
  const body = encodeURIComponent(message);
  return `mailto:hola@totemrental.com?subject=${subject}&body=${body}`;
}

export function buildWhatsappUrl(message: string) {
  const configuredNumber = String(import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  return `https://wa.me/${configuredNumber}?text=${encodeURIComponent(message)}`;
}
