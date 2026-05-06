import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAvailability } from "../context/AvailabilityContext";
import { useSelection } from "../context/SelectionContext";
import { products } from "../data/products";
import { formatCurrency } from "../utils/format";
import { addDaysIso, formatDateRange, getInclusiveDays, todayIso } from "../utils/dates";
import { calculateProductPricing } from "../utils/pricing";
import { AvailabilityCalendar } from "./AvailabilityCalendar";
import { RentalCalculator } from "./RentalCalculator";

export function SelectedProductsPanel() {
  const {
    selection,
    updateQuantity,
    updateRentalDates,
    removeProduct,
    clearSelection,
  } = useSelection();
  const { hasConflict } = useAvailability();
  const selectedProducts = selection
    .map((item) => ({
      item,
      product: products.find((product) => product.id === item.productId),
    }))
    .filter((entry): entry is { item: typeof selection[number]; product: (typeof products)[number] } =>
      Boolean(entry.product),
    );
  const hasAnyConflict = selectedProducts.some(({ item, product }) => {
    const startDate = item.startDate ?? todayIso();
    const endDate = item.endDate ?? addDaysIso(startDate, Math.max(1, item.rentalDays) - 1);
    return hasConflict(product.id, startDate, endDate);
  });
  const canPrepareRental = selectedProducts.length > 0 && !hasAnyConflict;

  return (
    <aside className="space-y-4">
      <section className="parchment-panel p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Selección</p>
            <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Objetos apartados</h2>
          </div>
          {selection.length > 0 && (
            <button
              type="button"
              onClick={clearSelection}
              className="rounded-full border border-gabinete-line/35 px-3 py-2 text-xs text-gabinete-muted hover:border-gabinete-error hover:text-gabinete-error"
            >
              Vaciar
            </button>
          )}
        </div>

        {selectedProducts.length === 0 ? (
          <p className="mt-5 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
            Todavía no hay objetos seleccionados. El primer hallazgo siempre tarda un poco.
          </p>
        ) : (
          <div className="mt-5 space-y-4">
            {selectedProducts.map(({ item, product }) => {
              const pricing = calculateProductPricing(product, item);
              const startDate = item.startDate ?? todayIso();
              const endDate = item.endDate ?? addDaysIso(startDate, Math.max(1, item.rentalDays) - 1);
              const conflict = hasConflict(product.id, startDate, endDate);
              return (
                <div key={product.id} className="rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/18 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-lg text-gabinete-darkBrown">{product.name}</p>
                      <p className="mt-1 text-xs text-gabinete-muted">
                        {product.id} · {formatCurrency(product.rentalPricePerDay)} / día
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Quitar ${product.name}`}
                      onClick={() => removeProduct(product.id)}
                      className="rounded-full border border-gabinete-line/25 p-2 text-gabinete-muted hover:border-gabinete-error hover:text-gabinete-error"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <label className="text-xs uppercase tracking-[0.08em] text-gabinete-muted">
                      Cantidad
                      <div className="gabinete-input mt-1 flex items-center">
                        <button
                          type="button"
                          aria-label="Restar cantidad"
                          onClick={() => updateQuantity(product.id, item.quantity - 1)}
                          className="p-2 text-gabinete-muted hover:text-gabinete-darkBrown"
                        >
                          <Minus size={14} />
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(event) => updateQuantity(product.id, Number(event.target.value))}
                          className="w-full bg-transparent p-2 text-center text-sm text-gabinete-text outline-none"
                        />
                        <button
                          type="button"
                          aria-label="Sumar cantidad"
                          onClick={() => updateQuantity(product.id, item.quantity + 1)}
                          className="p-2 text-gabinete-muted hover:text-gabinete-darkBrown"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </label>
                    <label className="text-xs uppercase tracking-[0.08em] text-gabinete-muted">
                      Días
                      <input
                        type="number"
                        min={1}
                        value={getInclusiveDays(startDate, endDate)}
                        readOnly
                        className="gabinete-input mt-1 p-2 text-center text-sm"
                      />
                    </label>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="text-xs uppercase tracking-[0.08em] text-gabinete-muted">
                      Desde
                      <input
                        type="date"
                        min={todayIso()}
                        value={startDate}
                        onChange={(event) => {
                          const nextStart = event.target.value;
                          const nextEnd = endDate < nextStart ? nextStart : endDate;
                          updateRentalDates(product.id, nextStart, nextEnd);
                        }}
                        className="gabinete-input mt-1 p-2 text-sm"
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.08em] text-gabinete-muted">
                      Hasta
                      <input
                        type="date"
                        min={startDate}
                        value={endDate}
                        onChange={(event) => updateRentalDates(product.id, startDate, event.target.value)}
                        className="gabinete-input mt-1 p-2 text-sm"
                      />
                    </label>
                  </div>
                  <p
                    className={`mt-3 rounded-md border px-3 py-2 font-editorial text-xs leading-5 ${
                      conflict
                        ? "border-gabinete-error/35 bg-gabinete-error/10 text-gabinete-error"
                        : "border-gabinete-available/35 bg-gabinete-available/10 text-gabinete-available"
                    }`}
                  >
                    {conflict
                      ? "Estas fechas se pisan con una solicitud existente."
                      : `Fechas libres: ${formatDateRange(startDate, endDate)}.`}
                  </p>
                  <div className="mt-3">
                    <AvailabilityCalendar
                      product={product}
                      startDate={startDate}
                      endDate={endDate}
                      compact
                    />
                  </div>
                  <p className="mt-3 text-right text-sm text-gabinete-muted">
                    Estimado:{" "}
                    <strong className="font-display text-gabinete-darkBrown">
                      {formatCurrency(pricing.totalEstimated)}
                    </strong>
                  </p>
                </div>
              );
            })}
            {hasAnyConflict && (
              <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 font-editorial text-sm text-gabinete-error">
                El alquiler queda bloqueado hasta elegir fechas libres para todos los objetos.
              </p>
            )}
            {canPrepareRental ? (
              <Link to="/contacto" className="gabinete-button w-full px-4 py-3">
                Preparar alquiler
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="gabinete-button w-full cursor-not-allowed px-4 py-3 opacity-50"
              >
                Alquiler no disponible
              </button>
            )}
          </div>
        )}
      </section>
      <RentalCalculator products={products} selection={selection} />
    </aside>
  );
}
