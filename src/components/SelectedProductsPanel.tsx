import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAvailability } from "../context/AvailabilityContext";
import { useCatalog } from "../context/CatalogContext";
import { useSelection } from "../context/SelectionContext";
import { formatCurrency } from "../utils/format";
import { addDaysIso, formatDateRange, getInclusiveDays, hasOperationalEndpoints, todayIso } from "../utils/dates";
import { calculateProductPricing } from "../utils/pricing";
import { ObjectImage } from "./ObjectImage";
import { RentalCalculator } from "./RentalCalculator";

interface SelectedProductsPanelProps {
  showAction?: boolean;
}

export function SelectedProductsPanel({ showAction = true }: SelectedProductsPanelProps) {
  const {
    selection,
    updateQuantity,
    updateRentalDates,
    removeProduct,
    clearSelection,
  } = useSelection();
  const { hasConflict, loadingAvailability, availabilityError } = useAvailability();
  const { products, loading } = useCatalog();
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
    return hasConflict(product.id, startDate, endDate, item.quantity);
  });
  const hasNonOperationalEndpoints = selectedProducts.some(({ item }) => {
    const startDate = item.startDate ?? todayIso();
    const endDate = item.endDate ?? addDaysIso(startDate, Math.max(1, item.rentalDays) - 1);
    return !hasOperationalEndpoints(startDate, endDate);
  });
  const hasUnavailableProducts = selectedProducts.some(
    ({ product }) => product.availability !== "Disponible" || product.rentalPricePerWeek <= 0,
  );
  const canPrepareRental = selectedProducts.length > 0
    && !hasAnyConflict
    && !hasNonOperationalEndpoints
    && !hasUnavailableProducts;
  const availabilityReady = !loadingAvailability && !availabilityError;

  return (
    <aside className="space-y-4">
      <section className="parchment-panel p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{showAction ? "Carrito" : "Paso 02"}</p>
            <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">
              {showAction ? "Objetos elegidos" : "Revisá objetos y fechas"}
            </h2>
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

        {loading && selection.length > 0 ? (
          <p className="mt-5 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
            Recuperando tu selección…
          </p>
        ) : selectedProducts.length === 0 ? (
          <p className="mt-5 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
            Todavía no hay objetos en el carrito. Elegí fechas libres desde la ficha de cada objeto.
          </p>
        ) : (
          <div className="mt-5 space-y-4">
            {selectedProducts.map(({ item, product }) => {
              const pricing = calculateProductPricing(product, item);
              const startDate = item.startDate ?? todayIso();
              const endDate = item.endDate ?? addDaysIso(startDate, Math.max(1, item.rentalDays) - 1);
              const conflict = hasConflict(product.id, startDate, endDate, item.quantity);
              const operationalEndpoints = hasOperationalEndpoints(startDate, endDate);
              return (
                <div key={product.id} className="selected-item-card">
                  <div className="selected-item-main">
                    <Link to={`/producto/${product.id}`} className="selected-item-image selected-item-link">
                      <ObjectImage product={product} compact showLabel={false} />
                    </Link>
                    <div className="selected-item-info">
                      <div className="selected-item-topline">
                        <div>
                          <Link to={`/producto/${product.id}`} className="selected-item-name selected-item-name-link">
                            {product.name}
                          </Link>
                          <p className="selected-item-meta">
                            {product.id} · {formatCurrency(product.rentalPricePerWeek)} / semana
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Quitar ${product.name}`}
                          onClick={() => removeProduct(product.id)}
                          className="selected-remove-button"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <p className="selected-item-range">{formatDateRange(startDate, endDate)}</p>

                      <div className="selected-compact-controls">
                        <label>
                          <span>Cant.</span>
                          <div className="selected-stepper">
                            <button
                              type="button"
                              aria-label="Restar cantidad"
                              onClick={() => updateQuantity(product.id, item.quantity - 1, product.stock)}
                            >
                              <Minus size={12} />
                            </button>
                            <input
                              type="number"
                              min={1}
                              value={item.quantity}
                              max={product.stock}
                              onChange={(event) => updateQuantity(product.id, Number(event.target.value), product.stock)}
                            />
                            <button
                              type="button"
                              aria-label="Sumar cantidad"
                              disabled={item.quantity >= product.stock}
                              onClick={() => updateQuantity(product.id, item.quantity + 1, product.stock)}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </label>
                        <label>
                          <span>Días de uso</span>
                          <input
                            type="number"
                            min={1}
                            value={getInclusiveDays(startDate, endDate)}
                            onChange={(event) => {
                              const nextDays = Math.max(1, Number(event.target.value) || 1);
                              updateRentalDates(product.id, startDate, addDaysIso(startDate, nextDays - 1));
                            }}
                          />
                        </label>
                      </div>

                      <div className="selected-date-controls">
                        <label>
                          <span>Desde</span>
                          <input
                            type="date"
                            min={todayIso()}
                            value={startDate}
                            onChange={(event) => {
                              const nextStart = event.target.value;
                              const nextEnd = endDate < nextStart ? nextStart : endDate;
                              updateRentalDates(product.id, nextStart, nextEnd);
                            }}
                          />
                        </label>
                        <label>
                          <span>Hasta</span>
                          <input
                            type="date"
                            min={startDate}
                            value={endDate}
                            onChange={(event) => updateRentalDates(product.id, startDate, event.target.value)}
                          />
                        </label>
                      </div>

                      <p className={`selected-item-status ${conflict ? "is-conflict" : "is-free"}`}>
                        {conflict
                          ? "Estas fechas se pisan con una reserva confirmada."
                          : !operationalEndpoints
                            ? "Retiro y devolución deben ser en días hábiles, sin fines de semana ni feriados."
                            : `Fechas libres: ${formatDateRange(startDate, endDate)}.`}
                      </p>
                      {product.stock > 1 && (
                        <p className="selected-stock-note">{product.stock} unidades disponibles</p>
                      )}

                      <div className="selected-item-pricing">
                        <span>Alquiler <strong>{formatCurrency(pricing.rentalTotal)}</strong></span>
                        <span>Garantía <strong>{formatCurrency(pricing.guaranteeAmount)}</strong></span>
                        <span>Total <strong>{formatCurrency(pricing.totalEstimated)}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {hasAnyConflict && (
              <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 font-editorial text-sm text-gabinete-error">
                Para confirmar la reserva necesitás elegir fechas libres para todos los objetos.
              </p>
            )}
            {hasNonOperationalEndpoints && (
              <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 font-editorial text-sm text-gabinete-error">
                Cambiá las fechas: no se puede retirar ni devolver fines de semana o feriados.
              </p>
            )}
            {hasUnavailableProducts && (
              <p className="rounded-md border border-gabinete-line/35 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-sm text-gabinete-muted">
                Uno de los objetos requiere consulta de precio o disponibilidad. Podés quitarlo o escribirnos por WhatsApp.
              </p>
            )}
            {showAction && canPrepareRental && availabilityReady ? (
              <Link to="/contacto" className="gabinete-button w-full px-4 py-3">
                Registrar pedido
              </Link>
            ) : showAction ? (
              <button
                type="button"
                disabled
                className="gabinete-button w-full cursor-not-allowed px-4 py-3 opacity-50"
              >
                {loadingAvailability ? "Verificando disponibilidad…" : "Alquiler no disponible"}
              </button>
            ) : null}
          </div>
        )}
      </section>
      <RentalCalculator products={products} selection={selection} />
    </aside>
  );
}
