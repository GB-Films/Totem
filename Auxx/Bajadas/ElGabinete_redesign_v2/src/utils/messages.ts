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
    "Hola, EL GABINETE. Quiero consultar disponibilidad para una selección de props.",
    "",
    `Nombre: ${values.name || "-"}`,
    `Productora / Empresa: ${values.company || "-"}`,
    `Email: ${values.email || "-"}`,
    `Teléfono: ${values.phone || "-"}`,
    `Proyecto: ${values.projectName || "-"}`,
    `Tipo de proyecto: ${values.projectType || "-"}`,
    `Fechas generales: ${values.dates || "-"}`,
    "",
    "Productos seleccionados:",
    buildSelectionSummary(products, selection),
    "",
    `Alquiler estimado: ${formatCurrency(pricing.rentalTotal)}`,
    `Garantía reintegrable estimada: ${formatCurrency(pricing.guaranteeAmount)}`,
    `Total estimado general: ${formatCurrency(pricing.totalEstimated)}`,
    "",
    `Mensaje: ${values.message || "-"}`,
  ].join("\n");
}

export function buildMailtoUrl(message: string) {
  const subject = encodeURIComponent("Consulta de reserva - EL GABINETE");
  const body = encodeURIComponent(message);
  return `mailto:hola@elgabineteprops.com?subject=${subject}&body=${body}`;
}

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
