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
    <section className="parchment-panel p-5">
      <p className="eyebrow">Cálculo de alquiler y garantía</p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">La cuenta del gabinete</h2>
      <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
        La garantía es reintegrable, siempre que el objeto vuelva con su historia intacta. El monto
        final puede variar según disponibilidad, logística y condiciones de rodaje.
      </p>

      <div className="mt-5 space-y-3">
        {[
          ["Objetos en selección", selectedCount.toString()],
          ["Subtotal alquiler", formatCurrency(pricing.rentalSubtotal)],
          [
            `Descuento por más de ${LONG_RENTAL_DAYS} días (${LONG_RENTAL_DISCOUNT * 100}%)`,
            `-${formatCurrency(pricing.rentalDiscount)}`,
          ],
          ["Alquiler estimado", formatCurrency(pricing.rentalTotal)],
          ["Garantía reintegrable", formatCurrency(pricing.guaranteeAmount)],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-4 border-b border-gabinete-line/24 pb-3 text-sm"
          >
            <span className="text-gabinete-muted">{label}</span>
            <strong className="text-right font-display text-base font-semibold text-gabinete-darkBrown">
              {value}
            </strong>
          </div>
        ))}

        <div className="rounded-md border border-gabinete-line/30 bg-gabinete-paperLight/28 p-4">
          <div className="flex justify-between gap-4">
            <span className="font-display text-sm uppercase tracking-[0.12em] text-gabinete-brown">
              Total estimado
            </span>
            <strong className="text-right font-display text-2xl text-gabinete-darkBrown">
              {formatCurrency(pricing.totalEstimated)}
            </strong>
          </div>
          <p className="mt-2 font-editorial text-xs leading-5 text-gabinete-muted">
            Delicados suman 10% extra sobre garantía. La reserva o depósito se confirma al consultar.
          </p>
        </div>
      </div>
    </section>
  );
}
