import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelection } from "../context/SelectionContext";
import { products } from "../data/products";
import { formatCurrency } from "../utils/format";
import { calculateProductPricing } from "../utils/pricing";
import { RentalCalculator } from "./RentalCalculator";

export function SelectedProductsPanel() {
  const { selection, updateQuantity, updateRentalDays, removeProduct, clearSelection } = useSelection();
  const selectedProducts = selection
    .map((item) => ({
      item,
      product: products.find((product) => product.id === item.productId),
    }))
    .filter((entry): entry is { item: typeof selection[number]; product: (typeof products)[number] } =>
      Boolean(entry.product),
    );

  return (
    <aside className="space-y-4">
      <section className="rounded-lg border border-bone/10 bg-ash/70 p-5 shadow-cabinet">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Selección</p>
            <h2 className="mt-2 font-display text-3xl text-bone">Tu consulta</h2>
          </div>
          {selection.length > 0 && (
            <button
              type="button"
              onClick={clearSelection}
              className="rounded-md border border-bone/15 px-3 py-2 text-xs text-bone/65 hover:border-blood hover:text-bone"
            >
              Vaciar
            </button>
          )}
        </div>

        {selectedProducts.length === 0 ? (
          <p className="mt-5 rounded-md border border-bone/10 bg-coal/60 p-4 text-sm leading-6 text-bone/65">
            Todavía no hay objetos seleccionados. El primer hallazgo siempre tarda un poco.
          </p>
        ) : (
          <div className="mt-5 space-y-4">
            {selectedProducts.map(({ item, product }) => {
              const pricing = calculateProductPricing(product, item);
              return (
                <div key={product.id} className="rounded-md border border-bone/10 bg-coal/55 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-bone">{product.name}</p>
                      <p className="mt-1 text-xs text-bone/55">
                        {product.id} · {formatCurrency(product.rentalPricePerDay)} / día
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Quitar ${product.name}`}
                      onClick={() => removeProduct(product.id)}
                      className="rounded-md border border-bone/10 p-2 text-bone/55 hover:border-blood hover:text-bone"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <label className="text-xs text-bone/60">
                      Cantidad
                      <div className="mt-1 flex items-center rounded-md border border-bone/10 bg-ink">
                        <button
                          type="button"
                          aria-label="Restar cantidad"
                          onClick={() => updateQuantity(product.id, item.quantity - 1)}
                          className="p-2 text-bone/60 hover:text-bone"
                        >
                          <Minus size={14} />
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(event) => updateQuantity(product.id, Number(event.target.value))}
                          className="w-full bg-transparent p-2 text-center text-sm text-bone outline-none"
                        />
                        <button
                          type="button"
                          aria-label="Sumar cantidad"
                          onClick={() => updateQuantity(product.id, item.quantity + 1)}
                          className="p-2 text-bone/60 hover:text-bone"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </label>
                    <label className="text-xs text-bone/60">
                      Días
                      <input
                        type="number"
                        min={1}
                        value={item.rentalDays}
                        onChange={(event) => updateRentalDays(product.id, Number(event.target.value))}
                        className="mt-1 w-full rounded-md border border-bone/10 bg-ink p-2 text-center text-sm text-bone outline-none focus:border-brass"
                      />
                    </label>
                  </div>
                  <p className="mt-3 text-right text-sm text-bone/75">
                    Estimado: <strong className="text-bone">{formatCurrency(pricing.totalEstimated)}</strong>
                  </p>
                </div>
              );
            })}
            <Link
              to="/contacto"
              className="inline-flex w-full items-center justify-center rounded-md bg-brass px-4 py-3 text-sm font-semibold text-coal transition hover:bg-bone"
            >
              Consultar disponibilidad
            </Link>
          </div>
        )}
      </section>
      <RentalCalculator products={products} selection={selection} />
    </aside>
  );
}
