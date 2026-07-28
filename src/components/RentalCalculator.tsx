import type { Product, SelectionItem } from "../types";
import { formatCurrency } from "../utils/format";
import {
  calculateSelectionPricing,
  RESERVATION_DEPOSIT_RATE,
} from "../utils/pricing";

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
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Resumen estimado</h2>
      <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
        La garantía es reintegrable, siempre que el objeto vuelva con su historia intacta. El monto
        final puede variar según disponibilidad, logística y condiciones de rodaje. La facturación
        mínima es semanal y cada semana iniciada se cobra completa.
      </p>

      <div className="mt-5 space-y-3">
        {[
          ["Objetos en selección", selectedCount.toString()],
          ["Alquiler semanal estimado", formatCurrency(pricing.rentalTotal)],
          [`Seña de reserva (${RESERVATION_DEPOSIT_RATE * 100}%)`, formatCurrency(pricing.reserveDeposit)],
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
            Algunos objetos delicados pueden requerir una garantía mayor. La disponibilidad queda bloqueada al confirmar la reserva.
          </p>
        </div>
      </div>
    </section>
  );
}
