import {
  CalendarDays,
  CalendarX2,
  ChevronDown,
  Clock3,
  History,
  Lock,
  MessageCircle,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAvailability } from "../context/AvailabilityContext";
import { useCatalog } from "../context/CatalogContext";
import { ObjectImage } from "./ObjectImage";
import { formatDateRange } from "../utils/dates";
import { formatCurrency } from "../utils/format";
import { buildWhatsappUrl } from "../utils/messages";
import {
  getReservationStatusIndex,
  getReservationStatusLabel,
  PAYMENT_ALIAS,
  PAYMENT_CVU,
  PAYMENT_HOLDER,
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

function getStatusGuidance(status: string) {
  switch (status) {
    case "payment_pending":
      return "Estamos esperando la seña para confirmar definitivamente tus fechas.";
    case "confirmed":
      return "La seña fue acreditada y tus fechas están confirmadas. Te avisaremos cuando tu pedido esté listo para retirar.";
    case "ready_for_pickup":
      return "Tu pedido ya está preparado. Coordiná por WhatsApp antes de acercarte a retirarlo.";
    case "active":
      return "El pedido está en alquiler. Recordá coordinar la devolución dentro de las fechas acordadas.";
    case "returned":
      return "El pedido fue devuelto y la reserva quedó finalizada.";
    case "cancelled":
      return "La reserva fue cancelada. Contactanos si necesitás volver a coordinar las fechas.";
    default:
      return "Recibimos tu solicitud y estamos revisando los objetos y las fechas.";
  }
}

export function ReservationHistory() {
  const { user, loginWithGoogle } = useAuth();
  const { bookings, cancelBooking, loadingBookings } = useAvailability();
  const { products } = useCatalog();
  const [openBookingId, setOpenBookingId] = useState<string | null>(null);
  const [historyView, setHistoryView] = useState<"active" | "activity">("active");
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState("");
  const [bookingToCancel, setBookingToCancel] = useState<{ id: string; code: string } | null>(null);
  const cancelConfirmButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const userBookings = user
    ? bookings.filter(
      (booking) => booking.createdByUid === user.uid && !booking.holdExpired,
    )
    : [];
  const activeBookings = userBookings.filter(
    (booking) => booking.status !== "returned" && booking.status !== "cancelled",
  );
  const activityBookings = userBookings.filter(
    (booking) => booking.status === "returned" || booking.status === "cancelled",
  ).slice(0, 10);
  const visibleBookings = historyView === "active" ? activeBookings : activityBookings;

  useEffect(() => {
    if (!bookingToCancel) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.classList.add("reservation-dialog-open");
    window.requestAnimationFrame(() => cancelConfirmButtonRef.current?.focus());

    return () => {
      document.body.classList.remove("reservation-dialog-open");
      previousFocusRef.current?.focus();
    };
  }, [bookingToCancel]);

  useEffect(() => {
    if (!bookingToCancel) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !cancellingBookingId) {
        setBookingToCancel(null);
        setCancelError("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bookingToCancel, cancellingBookingId]);

  const handleCancelBooking = async () => {
    if (!bookingToCancel) return;

    setCancelError("");
    setCancellingBookingId(bookingToCancel.id);
    try {
      await cancelBooking(bookingToCancel.id);
      setHistoryView("activity");
      setOpenBookingId(bookingToCancel.id);
      setBookingToCancel(null);
    } catch (error) {
      setCancelError(error instanceof Error ? error.message : "No pudimos cancelar la reserva.");
    } finally {
      setCancellingBookingId(null);
    }
  };

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
        <>
          <div className="booking-history-view-switch" aria-label="Filtrar pedidos">
            <button
              type="button"
              className={historyView === "active" ? "is-active" : ""}
              onClick={() => {
                setHistoryView("active");
                setOpenBookingId(null);
              }}
            >
              <CalendarDays size={16} />
              En curso
              <span>{activeBookings.length}</span>
            </button>
            <button
              type="button"
              className={historyView === "activity" ? "is-active" : ""}
              onClick={() => {
                setHistoryView("activity");
                setOpenBookingId(null);
              }}
            >
              <History size={16} />
              Actividad
              <span>{activityBookings.length}</span>
            </button>
          </div>

          {visibleBookings.length === 0 ? (
            <p className="booking-history-empty">
              {historyView === "active"
                ? "No tenés pedidos en curso."
                : "Todavía no hay pedidos finalizados en tu actividad."}
            </p>
          ) : (
          <div className="booking-history-list">
          {visibleBookings.map((booking) => {
            const activeIndex = getReservationStatusIndex(booking.status);
            const isOpen = openBookingId === booking.id;
            const previewItems = booking.items.slice(0, 3);
            const hiddenItemCount = Math.max(0, booking.items.length - previewItems.length);
            const whatsappMessage = [
              `Hola, consulto por mi pedido ${booking.code}.`,
              `Estado: ${getReservationStatusLabel(booking.status)}.`,
              `Seña: ${formatCurrency(booking.reserveDeposit)}.`,
            ].join(" ");

            return (
              <article key={booking.id} className={`booking-history-card booking-accordion ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="booking-accordion-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`booking-details-${booking.id}`}
                  onClick={() => setOpenBookingId(isOpen ? null : booking.id)}
                >
                  <span className="booking-accordion-main">
                    <span className="booking-code">{booking.code}</span>
                    <strong>{booking.projectName || `Pedido de ${booking.items.length} ${booking.items.length === 1 ? "objeto" : "objetos"}`}</strong>
                  </span>
                  <span className="booking-preview-images" aria-label={`Vista previa de ${booking.items.length} objetos`}>
                    {previewItems.map((item) => {
                      const product = products.find((candidate) => candidate.id === item.productId);
                      return product ? (
                        <span key={item.productId} className="booking-preview-image" title={item.productName}>
                          <ObjectImage product={product} compact showLabel={false} />
                        </span>
                      ) : (
                        <span key={item.productId} className="booking-preview-image is-placeholder" title={item.productName}>
                          {item.productName.slice(0, 1)}
                        </span>
                      );
                    })}
                    {hiddenItemCount > 0 && (
                      <span className="booking-preview-more">+{hiddenItemCount}</span>
                    )}
                  </span>
                  <span className="booking-accordion-summary">
                    {booking.items.length} {booking.items.length === 1 ? "objeto" : "objetos"}
                    {booking.items[0] && <> · {formatDateRange(booking.items[0].startDate, booking.items[0].endDate)}</>}
                  </span>
                  <ChevronDown size={22} />
                </button>

                {isOpen && (
                  <div id={`booking-details-${booking.id}`} className="booking-accordion-details">
                    <div className="booking-detail-status">
                      <span>Estado del pedido</span>
                      <strong className={`booking-status status-${booking.status}`}>
                        {getReservationStatusLabel(booking.status)}
                      </strong>
                    </div>
                    <p className="booking-status-guidance">{getStatusGuidance(booking.status)}</p>

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
                      <>
                        <div className="reservation-payment-note">
                          <Clock3 size={17} />
                          <p>
                            Transferí <strong>{formatCurrency(booking.reserveDeposit)}</strong> al alias{" "}
                            <strong>{PAYMENT_ALIAS}</strong>. CVU <strong>{PAYMENT_CVU}</strong>, titular{" "}
                            <strong>{PAYMENT_HOLDER}</strong>. Después enviá el comprobante.
                            {booking.holdExpiresAt && (
                              <> Guardamos las fechas hasta el {formatHoldExpiration(booking.holdExpiresAt)}.</>
                            )}
                          </p>
                          <a href={buildWhatsappUrl(whatsappMessage)} target="_blank" rel="noreferrer">
                            <MessageCircle size={16} />
                            Enviar comprobante
                          </a>
                        </div>
                        <div className="reservation-pending-actions">
                          <p>
                            Si te equivocaste o decidiste no continuar, cancelá ahora para liberar los objetos.
                          </p>
                          <button
                            type="button"
                            className="reservation-cancel-button"
                            disabled={cancellingBookingId === booking.id}
                            onClick={() => {
                              setCancelError("");
                              setBookingToCancel({ id: booking.id, code: booking.code });
                            }}
                          >
                            <XCircle size={19} />
                            {cancellingBookingId === booking.id ? "Cancelando..." : "Cancelar reserva"}
                          </button>
                        </div>
                      </>
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
                  </div>
                )}
              </article>
            );
          })}
          </div>
          )}
        </>
      )}

      {bookingToCancel && (
        <div
          className="reservation-cancel-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-cancel-title"
          aria-describedby="reservation-cancel-description"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target && !cancellingBookingId) {
              setBookingToCancel(null);
              setCancelError("");
            }
          }}
        >
          <div className="reservation-cancel-dialog-card">
            <button
              type="button"
              className="reservation-cancel-dialog-close"
              aria-label="Cerrar confirmación"
              disabled={Boolean(cancellingBookingId)}
              onClick={() => {
                setBookingToCancel(null);
                setCancelError("");
              }}
            >
              <X size={20} />
            </button>
            <div className="reservation-cancel-dialog-icon" aria-hidden="true">
              <CalendarX2 size={30} />
            </div>
            <p className="eyebrow">Cancelar reserva</p>
            <h3 id="reservation-cancel-title">¿Liberamos este pedido?</h3>
            <span className="reservation-cancel-dialog-code">{bookingToCancel.code}</span>
            <p id="reservation-cancel-description">
              El pedido pasará a Actividad como cancelado. Los objetos y las fechas quedarán disponibles
              inmediatamente para que puedas armar una nueva reserva.
            </p>
            {cancelError && (
              <p className="reservation-cancel-error" role="alert">{cancelError}</p>
            )}
            <div className="reservation-cancel-dialog-actions">
              <button
                type="button"
                className="reservation-dialog-back"
                disabled={Boolean(cancellingBookingId)}
                onClick={() => {
                  setBookingToCancel(null);
                  setCancelError("");
                }}
              >
                Volver
              </button>
              <button
                ref={cancelConfirmButtonRef}
                type="button"
                className="reservation-dialog-confirm"
                disabled={Boolean(cancellingBookingId)}
                onClick={() => void handleCancelBooking()}
              >
                <XCircle size={19} />
                {cancellingBookingId ? "Cancelando..." : "Sí, cancelar reserva"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
