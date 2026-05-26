import { CalendarDays, Lock } from "lucide-react";
import { useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useAvailability } from "../context/AvailabilityContext";
import { useCatalog } from "../context/CatalogContext";
import { formatDateRange } from "../utils/dates";
import {
  getReservationStatusIndex,
  getReservationStatusLabel,
  PAYMENT_ALIAS,
  reservationStatusSteps,
} from "../utils/reservations";
import { formatCurrency } from "../utils/format";

export function ReservationHistory() {
  const { user, loginWithGoogle } = useAuth();
  const { reservations } = useAvailability();
  const { products } = useCatalog();
  const productsById = useMemo(() => new Map(products.map((product) => [product.id, product])), [products]);
  const userReservations = useMemo(
    () =>
      user
        ? reservations
            .filter((reservation) => reservation.createdByUid === user.uid || reservation.customerEmail === user.email)
            .sort((a, b) => b.startDate.localeCompare(a.startDate))
        : [],
    [reservations, user],
  );

  return (
    <section className="parchment-panel reservation-history p-5">
      <p className="eyebrow flex items-center gap-2">
        <CalendarDays size={15} />
        Historial
      </p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Tus reservas</h2>
      {!user ? (
        <div className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
          <p>Ingresá con Google para ver el historial de reservas asociadas a tu cuenta.</p>
          <button type="button" className="gabinete-button mt-3 px-4 py-3" onClick={loginWithGoogle}>
            <Lock size={17} />
            Ingresar
          </button>
        </div>
      ) : userReservations.length === 0 ? (
        <p className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
          Todavía no hay reservas confirmadas para esta cuenta.
        </p>
      ) : (
        <div className="mt-4 grid gap-3">
          {userReservations.map((reservation) => {
            const product = productsById.get(reservation.productId);
            const activeIndex = getReservationStatusIndex(reservation.status);
            return (
              <article key={reservation.id} className="reservation-history-row">
                <div>
                  <strong>{product?.name ?? reservation.productId}</strong>
                  <span>{formatDateRange(reservation.startDate, reservation.endDate)}</span>
                  <span>
                    Retiro: {reservation.pickupOption === "previous_day_requested"
                      ? "solicitado para el día previo"
                      : "desde las 8:00 del primer día"}
                  </span>
                </div>
                <div>
                  <span>Cantidad: {reservation.quantity ?? 1}</span>
                  <span>Estado: {getReservationStatusLabel(reservation.status)}</span>
                  {typeof reservation.reserveDeposit === "number" && (
                    <span>Seña: {formatCurrency(reservation.reserveDeposit)}</span>
                  )}
                </div>
                <div className="reservation-status-track">
                  {reservationStatusSteps.map((step, index) => (
                    <span
                      key={step.status}
                      className={index <= activeIndex ? "is-done" : ""}
                      title={step.description}
                    >
                      {step.label}
                    </span>
                  ))}
                </div>
                {reservation.status === "payment_pending" && (
                  <p className="reservation-payment-note">
                    Para confirmar: pagá la seña por Mercado Pago al alias <strong>{reservation.paymentAlias ?? PAYMENT_ALIAS}</strong>
                    {" "}y enviá el comprobante por WhatsApp.
                  </p>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
