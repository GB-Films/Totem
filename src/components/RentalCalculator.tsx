import type { Product, SelectionItem } from "../types";
import { formatCurrency } from "../utils/format";
import {
  calculateSelectionPricing,
  getBillableWeeks,
  RESERVATION_DEPOSIT_RATE,
} from "../utils/pricing";

interface RentalCalculatorProps {
  products: Product[];
  selection: SelectionItem[];
  wide?: boolean;
}

export function RentalCalculator({ products, selection, wide = false }: RentalCalculatorProps) {
  const pricing = calculateSelectionPricing(products, selection);
  const selectedCount = selection.reduce((total, item) => total + item.quantity, 0);
  const billableWeeks = selection.map((item) => getBillableWeeks(item.rentalDays));
  const minimumWeeks = billableWeeks.length > 0 ? Math.min(...billableWeeks) : 1;
  const maximumWeeks = billableWeeks.length > 0 ? Math.max(...billableWeeks) : 1;
  const billedWeeksLabel = minimumWeeks === maximumWeeks
    ? `${minimumWeeks} ${minimumWeeks === 1 ? "semana" : "semanas"}`
    : `${minimumWeeks} a ${maximumWeeks} semanas, según el objeto`;

  return (
    <section className={`rental-calculator parchment-panel p-5 ${wide ? "rental-calculator-wide" : ""}`}>
      <div className="rental-calculator-intro">
        <p className="eyebrow">Cálculo de alquiler y garantía</p>
        <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Resumen estimado</h2>
        <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
          La garantía es reintegrable, siempre que el objeto vuelva con su historia intacta. El monto
          final puede variar según disponibilidad, logística y condiciones de rodaje. La facturación
          mínima es semanal y cada semana iniciada se cobra completa.
        </p>
      </div>

      <div className="rental-calculator-breakdown mt-5">
        <div className="rental-calculator-rows space-y-3">
          {[
            ["Objetos en selección", selectedCount.toString()],
            ["Semanas facturadas", billedWeeksLabel],
            ["Alquiler del período", formatCurrency(pricing.rentalTotal)],
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
        </div>

        <div className="rental-calculator-total mt-3 rounded-md border border-gabinete-line/30 bg-gabinete-paperLight/28 p-4">
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
