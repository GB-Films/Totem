import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAvailability } from "../context/AvailabilityContext";
import { useAuth } from "../context/AuthContext";
import { useCatalog } from "../context/CatalogContext";
import { useSelection } from "../context/SelectionContext";
import { getFirebaseDb } from "../services/firebase";
import type { SelectionItem, UserProfile } from "../types";
import { formatCurrency } from "../utils/format";
import { addDaysIso, hasOperationalEndpoints, todayIso } from "../utils/dates";
import {
  buildContactMessage,
  buildWhatsappUrl,
} from "../utils/messages";
import { calculateSelectionPricing } from "../utils/pricing";
import { PAYMENT_ALIAS, PAYMENT_CVU, PAYMENT_HOLDER } from "../utils/reservations";

interface ContactFormProps {
  selection: SelectionItem[];
  activeStep: 3 | 4;
  onBack: () => void;
  onContinue: () => void;
}

type CustomerInfo = Pick<UserProfile, "firstName" | "lastName" | "dni" | "phone">;

const emptyCustomerInfo: CustomerInfo = {
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
};

export function ContactForm({ selection, activeStep, onBack, onContinue }: ContactFormProps) {
  const { createBooking, hasConflict, loadingAvailability, availabilityError } = useAvailability();
  const { user, loginWithGoogle, authError: googleAuthError } = useAuth();
  const { products } = useCatalog();
  const { clearSelection } = useSelection();
  const [status, setStatus] = useState<"idle" | "saving" | "confirmed">("idle");
  const [authError, setAuthError] = useState("");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(emptyCustomerInfo);
  const [confirmedWhatsappUrl, setConfirmedWhatsappUrl] = useState("");
  const [confirmedBookingCode, setConfirmedBookingCode] = useState("");
  const [projectName, setProjectName] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const db = getFirebaseDb();
    if (!db || !user) {
      return;
    }

    getDoc(doc(db, "userProfiles", user.uid))
      .then((profileDoc) => {
        if (!profileDoc.exists()) {
          setCustomerInfo((current) => ({
            ...current,
            firstName: current.firstName || user.displayName?.split(" ")[0] || "",
            lastName: current.lastName || user.displayName?.split(" ").slice(1).join(" ") || "",
          }));
          return;
        }

        const profile = profileDoc.data() as UserProfile;
        setCustomerInfo({
          firstName: profile.firstName ?? "",
          lastName: profile.lastName ?? "",
          dni: profile.dni ?? "",
          phone: profile.phone ?? "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const pricing = useMemo(
    () => calculateSelectionPricing(products, selection),
    [products, selection],
  );

  const selectedProducts = useMemo(
    () =>
      selection
        .map((item) => ({
          item,
          product: products.find((product) => product.id === item.productId),
        }))
        .filter((entry): entry is { item: SelectionItem; product: (typeof products)[number] } => Boolean(entry.product)),
    [products, selection],
  );

  const hasSelectionConflicts = selectedProducts.some(({ item }) =>
    hasConflict(item.productId, item.startDate, item.endDate, item.quantity),
  );
  const hasNonOperationalEndpoints = selectedProducts.some(({ item }) => {
    const startDate = item.startDate ?? todayIso();
    const endDate = item.endDate ?? addDaysIso(startDate, Math.max(1, item.rentalDays) - 1);
    return !hasOperationalEndpoints(startDate, endDate);
  });
  const hasUnavailableProducts = selectedProducts.some(({ product }) => product.availability !== "Disponible");
  const hasUnpricedProducts = selectedProducts.some(({ product }) => product.rentalPricePerWeek <= 0);
  const missingCustomerInfo = !customerInfo.firstName.trim()
    || !customerInfo.lastName.trim()
    || !customerInfo.dni.trim()
    || !customerInfo.phone.trim();
  const invalidDni = customerInfo.dni.trim().length > 0 && !/^\d{7,9}$/.test(customerInfo.dni.replace(/\D/g, ""));
  const invalidPhone = customerInfo.phone.trim().length > 0 && customerInfo.phone.replace(/\D/g, "").length < 8;
  const customerDetailsValid = !missingCustomerInfo && !invalidDni && !invalidPhone;
  const canConfirm = selection.length > 0
    && selectedProducts.length === selection.length
    && !hasSelectionConflicts
    && !hasNonOperationalEndpoints
    && !hasUnavailableProducts
    && !hasUnpricedProducts
    && !missingCustomerInfo
    && !invalidDni
    && !invalidPhone
    && !loadingAvailability
    && !availabilityError
    && status !== "saving";

  const updateCustomerInfo = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canConfirm) {
      return;
    }

    try {
      setStatus("saving");
      setAuthError("");
      let reservationUser = user;

      if (!reservationUser) {
        reservationUser = await loginWithGoogle();
      }

      if (!reservationUser) {
        setStatus("idle");
        return;
      }

      const db = getFirebaseDb();
      if (!db) {
        setAuthError("Firebase no está configurado. Para confirmar reservas hace falta login y base de datos.");
        setStatus("idle");
        return;
      }

      const trimmedInfo = {
        firstName: customerInfo.firstName.trim(),
        lastName: customerInfo.lastName.trim(),
        dni: customerInfo.dni.trim(),
        phone: customerInfo.phone.trim(),
      };
      const customerName = `${trimmedInfo.firstName} ${trimmedInfo.lastName}`.trim();
      const whatsappUrl = buildWhatsappUrl(
        buildContactMessage(
          {
            name: customerName,
            company: "",
            email: reservationUser.email ?? "",
            phone: trimmedInfo.phone,
            projectName: projectName.trim(),
            projectType: "",
            dates: "",
            message: `${note.trim() ? `Nota: ${note.trim()}. ` : ""}Pago de seña por transferencia al alias ${PAYMENT_ALIAS}, CVU ${PAYMENT_CVU}, titular ${PAYMENT_HOLDER}. Retiro por la oficina en Mendoza 2364, CABA, de 9 a 13 hs, coordinado por WhatsApp.`,
          },
          products,
          selection,
        ),
      );

      await setDoc(
        doc(db, "userProfiles", reservationUser.uid),
        {
          uid: reservationUser.uid,
          email: reservationUser.email ?? "",
          ...trimmedInfo,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      const booking = await createBooking(selection, {
        customerName,
        customerEmail: reservationUser.email ?? "",
        createdByUid: reservationUser.uid,
        pickupOption: "reservation_day",
        projectName,
        note,
      });
      setConfirmedBookingCode(booking.code);
      setConfirmedWhatsappUrl(whatsappUrl);
      clearSelection();
      setStatus("confirmed");
    } catch (error) {
      console.error(error);
      const firebaseError = error as { code?: string; message?: string };
      setAuthError(
        `No se pudo confirmar la reserva (${firebaseError.code ?? "error desconocido"}). ${
          firebaseError.message ?? "Revisá permisos y conexión."
        }`,
      );
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="parchment-panel checkout-form p-5">
      <p className="eyebrow">Paso {String(activeStep).padStart(2, "0")}</p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">
        {activeStep === 3 ? "Completá tus datos" : "Reserva y seña"}
      </h2>
      <p className="checkout-form-intro">
        {activeStep === 3
          ? "Si ya completaste tu perfil, tus datos aparecen automáticamente."
          : "Revisá la seña y registrá el pedido para guardar las fechas durante 24 horas."}
      </p>

      {activeStep === 3 && (
        <>
      <section className="checkout-form-section">
        <header className="checkout-section-head">
          <strong>01</strong>
          <div>
            <span>Datos del cliente</span>
            <p>Información necesaria para identificar la reserva.</p>
          </div>
        </header>
        <div className="reservation-customer-grid">
          <label>
            Nombre
            <input
              className="gabinete-input"
              value={customerInfo.firstName}
              onChange={(event) => updateCustomerInfo("firstName", event.target.value)}
              required
            />
          </label>
          <label>
            Apellido
            <input
              className="gabinete-input"
              value={customerInfo.lastName}
              onChange={(event) => updateCustomerInfo("lastName", event.target.value)}
              required
            />
          </label>
          <label>
            DNI
            <input
              className="gabinete-input"
              inputMode="numeric"
              autoComplete="off"
              value={customerInfo.dni}
              onChange={(event) => updateCustomerInfo("dni", event.target.value.replace(/\D/g, "").slice(0, 9))}
              required
            />
          </label>
          <label>
            Celular
            <input
              className="gabinete-input"
              type="tel"
              autoComplete="tel"
              value={customerInfo.phone}
              onChange={(event) => updateCustomerInfo("phone", event.target.value)}
              required
            />
          </label>
        </div>
      </section>

      <section className="checkout-form-section">
        <header className="checkout-section-head">
          <strong>02</strong>
          <div>
            <span>Proyecto y notas</span>
            <p>Sumá información útil para preparar el pedido.</p>
          </div>
        </header>
        <div className="reservation-customer-grid checkout-project-grid">
          <label className="reservation-customer-wide">
            Proyecto <span>(opcional)</span>
            <input
              className="gabinete-input"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
              placeholder="Ej. Campaña verano"
            />
          </label>
          <label className="reservation-customer-wide">
            Algo que debamos saber <span>(opcional)</span>
            <textarea
              className="gabinete-input"
              rows={3}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Horarios, logística o indicaciones del proyecto"
            />
          </label>
        </div>
      </section>

        </>
      )}

      {activeStep === 4 && (
        <>
      <section className="checkout-form-section checkout-payment-section">
        <header className="checkout-section-head">
          <strong>01</strong>
          <div>
            <span>Reserva y seña</span>
            <p>Primero registramos el pedido; después transferís la seña.</p>
          </div>
        </header>
        <div className="payment-instructions">
          <dl>
            <div><dt>Alias</dt><dd>{PAYMENT_ALIAS}</dd></div>
            <div><dt>CVU</dt><dd>{PAYMENT_CVU}</dd></div>
            <div><dt>Titular</dt><dd>{PAYMENT_HOLDER}</dd></div>
          </dl>
          <p>Seña para confirmar: <strong>{formatCurrency(pricing.reserveDeposit)}</strong></p>
        </div>
      </section>

      {status === "confirmed" && (
        <div className="app-success-message mt-3">
          <CheckCircle2 size={52} strokeWidth={1.8} />
          <p>
            Pedido <strong>{confirmedBookingCode}</strong> registrado. Guardamos las fechas durante
            24 horas. Transferí la seña al alias <strong>{PAYMENT_ALIAS}</strong>, CVU{" "}
            <strong>{PAYMENT_CVU}</strong>, a nombre de <strong>{PAYMENT_HOLDER}</strong>, y enviá el
            comprobante para dejarlo confirmado.
          </p>
          {confirmedWhatsappUrl && (
            <a
              href={confirmedWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="gabinete-button mt-3 w-full px-4 py-3"
            >
              <MessageCircle size={17} />
              Hablar por WhatsApp
            </a>
          )}
        </div>
      )}
      {(authError || googleAuthError) && (
        <p className="mt-3 rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error">
          {authError || googleAuthError}
        </p>
      )}

      <div className="mt-5 grid gap-3">
        {hasSelectionConflicts && (
          <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error">
            Hay fechas no disponibles en tu carrito. Cambialas para confirmar la reserva.
          </p>
        )}
        {hasNonOperationalEndpoints && (
          <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error">
            El retiro y la devolución deben ser en días hábiles. No operamos fines de semana ni feriados.
          </p>
        )}
        {hasUnavailableProducts && (
          <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error">
            Todos los objetos del carrito tienen que estar marcados como disponibles.
          </p>
        )}
        {missingCustomerInfo && (
          <p className="rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 text-sm text-gabinete-muted">
            Completá nombre, apellido, DNI y celular para confirmar.
          </p>
        )}
        {(loadingAvailability || availabilityError) && (
          <p className="rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 text-sm text-gabinete-muted">
            {availabilityError || "Estamos verificando la disponibilidad antes de reservar…"}
          </p>
        )}
        {hasUnpricedProducts && (
          <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error">
            Hay objetos con precio a consultar. Escribinos por WhatsApp y te ayudamos a completar el pedido.
          </p>
        )}
        {(invalidDni || invalidPhone) && (
          <p className="rounded-md border border-gabinete-error/35 bg-gabinete-error/10 px-3 py-2 text-sm text-gabinete-error">
            Revisá el DNI y el celular. Usá sólo números para el DNI y un teléfono con código de área.
          </p>
        )}
        <button
          type="submit"
          disabled={!canConfirm}
          className="gabinete-button px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCircle2 size={17} />
          {status === "saving"
            ? "Registrando..."
            : !user
              ? "Ingresar con Google y reservar por 24 h"
              : "Reservar fechas por 24 h"}
        </button>
        <button type="button" className="checkout-back-button" onClick={onBack}>
          <ArrowLeft size={16} />
          Volver a tus datos
        </button>
      </div>
        </>
      )}

      {activeStep === 3 && (
        <div className="checkout-form-actions">
          {(missingCustomerInfo || invalidDni || invalidPhone) && (
            <p className="checkout-form-validation">
              {missingCustomerInfo
                ? "Completá nombre, apellido, DNI y celular para continuar."
                : "Revisá el DNI y el celular antes de continuar."}
            </p>
          )}
          <div>
            <button type="button" className="checkout-back-button" onClick={onBack}>
              <ArrowLeft size={16} />
              Volver al retiro
            </button>
            <button
              type="button"
              className="gabinete-button"
              disabled={!customerDetailsValid}
              onClick={onContinue}
            >
              Continuar
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
