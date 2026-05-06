import type { Product, SelectionItem } from "../types";
import { formatCurrency } from "../utils/format";
import { calculateSelectionPricing, LONG_RENTAL_DISCOUNT, LONG_RENTAL_DAYS } from "../utils/pricing";

interface RentalCalculatorProps {
  products: Product[];
  selection: SelectionItem[];
}

export function RentalCalculator({ products, selection }: RentalCalculatorProps) {
  const pricing = calculateSelectionPricing(products, selection);
  const selectedCount = selection.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="rounded-lg border border-brass/20 bg-coal/75 p-5 shadow-cabinet">
      <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Calculadora</p>
      <h2 className="mt-2 font-display text-3xl text-bone">Alquiler + garantía</h2>
      <p className="mt-2 text-sm leading-6 text-bone/65">
        La garantía es un depósito reintegrable. El monto final puede variar según disponibilidad,
        cantidad de piezas, logística, estado del objeto y condiciones de producción.
      </p>

      <div className="mt-5 space-y-3">
        <div className="flex justify-between gap-4 border-b border-bone/10 pb-3 text-sm">
          <span className="text-bone/60">Productos seleccionados</span>
          <strong className="text-bone">{selectedCount}</strong>
        </div>
        <div className="flex justify-between gap-4 border-b border-bone/10 pb-3 text-sm">
          <span className="text-bone/60">Subtotal alquiler</span>
          <strong className="text-bone">{formatCurrency(pricing.rentalSubtotal)}</strong>
        </div>
        <div className="flex justify-between gap-4 border-b border-bone/10 pb-3 text-sm">
          <span className="text-bone/60">
            Descuento por más de {LONG_RENTAL_DAYS} días ({LONG_RENTAL_DISCOUNT * 100}%)
          </span>
          <strong className="text-bone">-{formatCurrency(pricing.rentalDiscount)}</strong>
        </div>
        <div className="flex justify-between gap-4 border-b border-bone/10 pb-3 text-sm">
          <span className="text-bone/60">Alquiler estimado</span>
          <strong className="text-bone">{formatCurrency(pricing.rentalTotal)}</strong>
        </div>
        <div className="flex justify-between gap-4 border-b border-bone/10 pb-3 text-sm">
          <span className="text-bone/60">Garantía reintegrable estimada</span>
          <strong className="text-bone">{formatCurrency(pricing.guaranteeAmount)}</strong>
        </div>
        <div className="rounded-md bg-brass/15 p-4">
          <div className="flex justify-between gap-4">
            <span className="font-medium text-bone">Total estimado general</span>
            <strong className="text-xl text-bone">{formatCurrency(pricing.totalEstimated)}</strong>
          </div>
          <p className="mt-2 text-xs text-bone/60">
            Delicados suman 10% extra sobre garantía. La reserva o depósito se confirma al consultar.
          </p>
        </div>
      </div>
    </section>
  );
}
