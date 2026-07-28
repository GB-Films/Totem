import { CalendarDays, Clock3, Lock, MessageCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useAvailability } from "../context/AvailabilityContext";
import { formatDateRange } from "../utils/dates";
import { formatCurrency } from "../utils/format";
import { buildWhatsappUrl } from "../utils/messages";
import {
  getReservationStatusIndex,
  getReservationStatusLabel,
  PAYMENT_ALIAS,
  reservationStatusSteps,
} from "../utils/reservations";

function formatHoldExpiration(value?: string) {
  if (!value) {
    return "";
  }

  const expiration = new Date(value);
  if (Number.isNaN(expiration.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(expiration);
}

export function ReservationHistory() {
  const { user, loginWithGoogle } = useAuth();
  const { bookings, loadingBookings } = useAvailability();
  const userBookings = user
    ? bookings.filter((booking) => booking.createdByUid === user.uid)
    : [];

  return (
    <section className="parchment-panel reservation-history p-5">
      <p className="eyebrow flex items-center gap-2">
        <CalendarDays size={15} />
        Mis pedidos
      </p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Reservas y alquileres</h2>
      {!user ? (
        <div className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
          <p>Ingresá con Google para ver el estado de tus pedidos y reservas.</p>
          <button type="button" className="gabinete-button mt-3 px-4 py-3" onClick={loginWithGoogle}>
            <Lock size={17} />
            Ingresar
          </button>
        </div>
      ) : loadingBookings ? (
        <div className="booking-history-loading" role="status">Cargando tus reservas…</div>
      ) : userBookings.length === 0 ? (
        <p className="mt-4 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 p-4 font-editorial text-sm leading-6 text-gabinete-muted">
          Todavía no registraste pedidos. Cuando reserves un objeto, vas a poder seguirlo desde acá.
        </p>
      ) : (
        <div className="booking-history-list">
          {userBookings.map((booking) => {
            const activeIndex = getReservationStatusIndex(booking.status);
            const whatsappMessage = [
              `Hola, consulto por mi pedido ${booking.code}.`,
              `Estado: ${getReservationStatusLabel(booking.status)}.`,
              `Seña: ${formatCurrency(booking.reserveDeposit)}.`,
            ].join(" ");

            return (
              <article key={booking.id} className="booking-history-card">
                <header>
                  <div>
                    <span className="booking-code">{booking.code}</span>
                    <h3>{booking.projectName || `Pedido de ${booking.items.length} ${booking.items.length === 1 ? "objeto" : "objetos"}`}</h3>
                  </div>
                  <span className={`booking-status status-${booking.status}`}>
                    {getReservationStatusLabel(booking.status)}
                  </span>
                </header>

                <div className="booking-item-list">
                  {booking.items.map((item) => (
                    <div key={`${booking.id}-${item.productId}`}>
                      <span>
                        <strong>{item.quantity}×</strong> {item.productName}
                      </span>
                      <em>{formatDateRange(item.startDate, item.endDate)}</em>
                    </div>
                  ))}
                </div>

                <div className="booking-total-row">
                  <span>Alquiler <strong>{formatCurrency(booking.rentalTotal)}</strong></span>
                  <span>Garantía reintegrable <strong>{formatCurrency(booking.guaranteeAmount)}</strong></span>
                  <span>Seña <strong>{formatCurrency(booking.reserveDeposit)}</strong></span>
                </div>

                {booking.status === "payment_pending" && (
                  <div className="reservation-payment-note">
                    <Clock3 size={17} />
                    <p>
                      Transferí <strong>{formatCurrency(booking.reserveDeposit)}</strong> al alias{" "}
                      <strong>{booking.paymentAlias || PAYMENT_ALIAS}</strong> y enviá el comprobante.
                      {booking.holdExpiresAt && (
                        <> Guardamos las fechas hasta el {formatHoldExpiration(booking.holdExpiresAt)}.</>
                      )}
                    </p>
                    <a href={buildWhatsappUrl(whatsappMessage)} target="_blank" rel="noreferrer">
                      <MessageCircle size={16} />
                      Enviar comprobante
                    </a>
                  </div>
                )}

                <div className="reservation-status-track" aria-label={`Estado: ${getReservationStatusLabel(booking.status)}`}>
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
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
