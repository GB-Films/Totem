import { ArrowLeft, CalendarCheck, Heart, MessageCircle, Plus, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AvailabilityCalendar } from "../components/AvailabilityCalendar";
import { CategoryBadge } from "../components/CategoryBadge";
import { ObjectImage } from "../components/ObjectImage";
import { RentalCalculator } from "../components/RentalCalculator";
import { TagPill } from "../components/TagPill";
import { useAvailability } from "../context/AvailabilityContext";
import { useCatalog } from "../context/CatalogContext";
import { useFavorites } from "../context/FavoritesContext";
import { useSelection } from "../context/SelectionContext";
import type { Availability } from "../types";
import { getInclusiveDays, hasOperationalEndpoints } from "../utils/dates";
import { formatCurrency } from "../utils/format";
import { buildContactMessage, buildWhatsappUrl } from "../utils/messages";
import { calculateProductPricing } from "../utils/pricing";

const availabilityClass: Record<Availability, string> = {
  Disponible: "availability-disponible",
  Consultar: "availability-consultar",
  Reservado: "availability-reservado",
};

export function ProductDetailPage() {
  const { id } = useParams();
  const { products, loading, error } = useCatalog();
  const product = products.find((candidate) => candidate.id === id);
  const { addProduct } = useSelection();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { hasConflict, loadingAvailability, availabilityError } = useAvailability();
  const [selectedDates, setSelectedDates] = useState<{ startDate?: string; endDate?: string }>({});
  const [addedMessage, setAddedMessage] = useState(false);

  if (loading) {
    return <div className="product-detail-loading" role="status">Cargando la ficha del objeto…</div>;
  }

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-[1520px] px-4 py-24 text-center sm:px-8 lg:px-12">
        <p className="font-display text-5xl text-gabinete-darkBrown">
          {error ? "No pudimos abrir esta ficha." : "Ese objeto no figura en el catálogo."}
        </p>
        <Link to="/catalogo" className="gabinete-button mt-8 px-5 py-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const hasSelectedDates = Boolean(selectedDates.startDate && selectedDates.endDate);
  const selectedDateConflict = hasSelectedDates
    ? hasConflict(product.id, selectedDates.startDate, selectedDates.endDate)
    : false;
  const selectedDatesAreOperational = hasOperationalEndpoints(selectedDates.startDate, selectedDates.endDate);
  const canBookProduct = product.availability === "Disponible" && product.rentalPricePerWeek > 0;
  const singleSelection = [
    {
      productId: product.id,
      quantity: 1,
      rentalDays:
        selectedDates.startDate && selectedDates.endDate
          ? getInclusiveDays(selectedDates.startDate, selectedDates.endDate)
          : 1,
      startDate: selectedDates.startDate,
      endDate: selectedDates.endDate,
    },
  ];
  const quickMessage = buildContactMessage(
    {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectName: "",
      projectType: "",
      dates: "",
      message: `Quiero consultar disponibilidad por ${product.name}.`,
    },
    products,
    singleSelection,
  );
  const productPricing = calculateProductPricing(product, singleSelection[0]);
  const favorite = isFavorite(product.id);

  return (
    <div className="product-detail-page mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <Link
        to="/catalogo"
        className="inline-flex items-center gap-2 text-sm text-gabinete-muted hover:text-gabinete-darkBrown"
      >
        <ArrowLeft size={16} />
        Volver al catálogo
      </Link>

      <div className="product-detail-layout mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <section className="product-visual-column">
          <ObjectImage product={product} />
          <div className="mt-4">
            <AvailabilityCalendar
              product={product}
              startDate={selectedDates.startDate}
              endDate={selectedDates.endDate}
              onRangeChange={(startDate, endDate) => setSelectedDates({ startDate, endDate })}
            />
          </div>
        </section>

        <section className="product-summary lg:pt-3">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryBadge category={product.category} />
            <span className={`availability-badge ${availabilityClass[product.availability]}`}>
              {product.availability}
            </span>
            <span className="rounded-full border border-gabinete-line/35 bg-gabinete-paperLight/24 px-3 py-1 text-xs text-gabinete-muted">
              Estado: {product.status}
            </span>
          </div>
          <div className="product-detail-title-row">
            <h1>{product.name}</h1>
            <button
              type="button"
              className={`detail-favorite ${favorite ? "is-favorite" : ""}`}
              onClick={() => toggleFavorite(product.id)}
              aria-label={favorite ? "Quitar de favoritos" : "Guardar en favoritos"}
            >
              <Heart size={21} fill={favorite ? "currentColor" : "none"} />
            </button>
          </div>
          <p className="mt-5 font-editorial text-lg leading-8 text-gabinete-muted">
            {product.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="parchment-panel p-4">
              <p className="eyebrow">Tarifa semanal mínima</p>
              <p className="mt-2 font-display text-2xl font-semibold text-gabinete-darkBrown">
                {product.rentalPricePerWeek > 0 ? formatCurrency(product.rentalPricePerWeek) : "Consultar"}
              </p>
              <p className="mt-1 font-editorial text-xs leading-5 text-gabinete-muted">
                Cada semana iniciada se factura como semana completa.
              </p>
            </div>
            <div className="parchment-panel p-4">
              <p className="eyebrow">Garantía final</p>
              <p className="mt-2 font-display text-2xl font-semibold text-gabinete-darkBrown">
                {productPricing.guaranteeAmount > 0 ? formatCurrency(productPricing.guaranteeAmount) : "Sin depósito"}
              </p>
              <p className="mt-1 font-editorial text-xs leading-5 text-gabinete-muted">
                Reintegrable al devolver la pieza en buen estado.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>

          {product.curiosities && <div className="curiosity-box mt-7 p-5">
            <p className="eyebrow flex items-center gap-2">
              <Sparkles size={15} />
              Curiosidades
            </p>
            <p className="mt-3 font-editorial text-2xl italic leading-snug text-gabinete-darkBrown">
              {product.curiosities}
            </p>
          </div>}

          <div className="detail-trust-row">
            <span><CalendarCheck size={17} /> Fechas visibles antes de reservar</span>
            <span><ShieldCheck size={17} /> Garantía reintegrable</span>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {!hasSelectedDates && (
              <p className="rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-sm text-gabinete-muted sm:col-span-2">
                Elegí los días en el calendario para poder sumar este objeto al carrito.
              </p>
            )}
            {!canBookProduct && (
              <p className="rounded-md border border-gabinete-line/35 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-sm text-gabinete-muted sm:col-span-2">
                Esta pieza requiere consulta de precio o disponibilidad. Escribinos y la revisamos con vos.
              </p>
            )}
            {selectedDateConflict && (
              <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 font-editorial text-sm text-gabinete-error sm:col-span-2">
                Ese rango pisa una reserva confirmada. Probá con otras fechas.
              </p>
            )}
            {hasSelectedDates && !selectedDatesAreOperational && (
              <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 font-editorial text-sm text-gabinete-error sm:col-span-2">
                El retiro y la devolución deben caer en días hábiles. No operamos fines de semana ni feriados.
              </p>
            )}
            <button
              type="button"
              disabled={loadingAvailability || Boolean(availabilityError) || !canBookProduct || !hasSelectedDates || selectedDateConflict || !selectedDatesAreOperational}
              onClick={() => {
                if (selectedDates.startDate && selectedDates.endDate) {
                  addProduct(product, selectedDates.startDate, selectedDates.endDate);
                  setAddedMessage(true);
                  window.setTimeout(() => setAddedMessage(false), 1800);
                }
              }}
              className="gabinete-button px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Plus size={18} />
              {canBookProduct ? "Sumar al carrito" : "Disponible a consulta"}
            </button>
            <a
              href={buildWhatsappUrl(quickMessage)}
              target="_blank"
              rel="noreferrer"
              className="gabinete-button-secondary px-4 py-3"
            >
              <MessageCircle size={18} />
              Enviar por WhatsApp
            </a>
            {addedMessage && (
              <p className="rounded-md border border-gabinete-available/35 bg-gabinete-available/10 px-3 py-2 text-center font-editorial text-sm text-gabinete-available sm:col-span-2">
                Agregado
              </p>
            )}
          </div>
        </section>
      </div>

      <div className="product-detail-meta mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="parchment-panel p-6">
          <h2 className="font-display text-3xl text-gabinete-darkBrown">Ficha del objeto</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["ID", product.id],
              ["Medidas aproximadas", product.measurements],
              ["Material", product.material],
              ["Color", product.color],
              ["Época / estilo", product.eraStyle],
              ["Disponibilidad", product.availability],
            ].filter(([, value]) => Boolean(value)).map(([label, value]) => (
              <div key={label} className="rounded-md border border-gabinete-line/24 bg-gabinete-paperLight/18 p-4">
                <dt className="font-display text-xs uppercase tracking-[0.16em] text-gabinete-faint">
                  {label}
                </dt>
                <dd className="mt-2 font-editorial text-gabinete-darkBrown">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <RentalCalculator products={products} selection={singleSelection} />
      </div>
    </div>
  );
}
