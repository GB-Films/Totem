import { CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAvailability } from "../context/AvailabilityContext";
import { useAuth } from "../context/AuthContext";
import { useCatalog } from "../context/CatalogContext";
import { useSelection } from "../context/SelectionContext";
import { RESERVATIONS_ENABLED } from "../config/features";
import { getFirebaseDb } from "../services/firebase";
import type { SelectionItem, UserProfile } from "../types";
import { formatCurrency } from "../utils/format";
import { addDaysIso, hasOperationalEndpoints, todayIso } from "../utils/dates";
import {
  buildContactMessage,
  buildWhatsappUrl,
} from "../utils/messages";
import { calculateSelectionPricing } from "../utils/pricing";
import { PAYMENT_ALIAS } from "../utils/reservations";

interface ContactFormProps {
  selection: SelectionItem[];
}

type CustomerInfo = Pick<UserProfile, "firstName" | "lastName" | "dni" | "phone">;

const emptyCustomerInfo: CustomerInfo = {
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
};

export function ContactForm({ selection }: ContactFormProps) {
  const { addReservationsFromSelection, hasConflict, syncMode } = useAvailability();
  const { user, loginWithGoogle, authError: googleAuthError } = useAuth();
  const { products } = useCatalog();
  const { clearSelection } = useSelection();
  const [status, setStatus] = useState<"idle" | "saving" | "confirmed">("idle");
  const [authError, setAuthError] = useState("");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(emptyCustomerInfo);
  const [confirmedWhatsappUrl, setConfirmedWhatsappUrl] = useState("");
  const [pickupOption, setPickupOption] = useState<"reservation_day" | "previous_day_requested">("reservation_day");

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
    hasConflict(item.productId, item.startDate, item.endDate),
  );
  const hasNonOperationalEndpoints = selectedProducts.some(({ item }) => {
    const startDate = item.startDate ?? todayIso();
    const endDate = item.endDate ?? addDaysIso(startDate, Math.max(1, item.rentalDays) - 1);
    return !hasOperationalEndpoints(startDate, endDate);
  });
  const hasUnavailableProducts = selectedProducts.some(({ product }) => product.availability !== "Disponible");
  const missingCustomerInfo = !customerInfo.firstName.trim()
    || !customerInfo.lastName.trim()
    || !customerInfo.dni.trim()
    || !customerInfo.phone.trim();
  const canConfirm = selection.length > 0
    && selectedProducts.length === selection.length
    && !hasSelectionConflicts
    && !hasNonOperationalEndpoints
    && !hasUnavailableProducts
    && !missingCustomerInfo
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
            projectName: "",
            projectType: "",
            dates: "",
            message: `Pago de seña por Mercado Pago al alias ${PAYMENT_ALIAS}. Retiro: ${
              pickupOption === "previous_day_requested" ? "solicitan retirar el día previo" : "día de inicio desde las 8:00"
            }.`,
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

      await addReservationsFromSelection(selection, `Pago pendiente por Mercado Pago alias ${PAYMENT_ALIAS}`, {
        customerName,
        customerEmail: reservationUser.email ?? undefined,
        createdByUid: reservationUser.uid,
        status: "payment_pending",
        paymentAlias: PAYMENT_ALIAS,
        pickupOption,
        reserveDeposit: pricing.reserveDeposit,
        guaranteeAmount: pricing.guaranteeAmount,
        totalEstimated: pricing.totalEstimated,
      });
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
    <form onSubmit={handleSubmit} className="parchment-panel p-5">
      <p className="eyebrow">Finalizar</p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Confirmar pedido</h2>
      <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
        Revisá el carrito antes de avanzar. Para terminar de confirmar, pagá la seña por Mercado Pago
        y enviá el comprobante por WhatsApp.
      </p>
      <div className="payment-instructions mt-3">
        <span>Alias Mercado Pago</span>
        <strong>{PAYMENT_ALIAS}</strong>
        <p>Seña para confirmar: {formatCurrency(pricing.reserveDeposit)}.</p>
      </div>
      <p className="mt-3 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-xs leading-5 text-gabinete-muted">
        {syncMode === "firebase"
          ? RESERVATIONS_ENABLED
            ? " El pedido se sincroniza en Firebase y bloquea esas fechas mientras se valida el pago."
            : " Modo prueba activo: se pide login, pero no se bloquean fechas."
          : " Para confirmar con login y bloquear fechas hace falta configurar Firebase."}
      </p>

      <fieldset className="pickup-options mt-4">
        <legend>Retiro</legend>
        <label>
          <input
            type="radio"
            checked={pickupOption === "reservation_day"}
            onChange={() => setPickupOption("reservation_day")}
          />
          <span>Retiro desde las 8:00 del primer día de reserva.</span>
        </label>
        <label>
          <input
            type="radio"
            checked={pickupOption === "previous_day_requested"}
            onChange={() => setPickupOption("previous_day_requested")}
          />
          <span>Solicitar retiro el día previo, sujeto a disponibilidad y aprobación.</span>
        </label>
      </fieldset>

      <div className="reservation-customer-grid mt-4">
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
            value={customerInfo.dni}
            onChange={(event) => updateCustomerInfo("dni", event.target.value)}
            required
          />
        </label>
        <label>
          Celular
          <input
            className="gabinete-input"
            value={customerInfo.phone}
            onChange={(event) => updateCustomerInfo("phone", event.target.value)}
            required
          />
        </label>
      </div>

      {status === "confirmed" && (
        <div className="mt-3 rounded-md border border-gabinete-available/35 bg-gabinete-available/10 px-3 py-3 font-editorial text-sm text-gabinete-available">
          <p>
            {RESERVATIONS_ENABLED
              ? `Pedido registrado. Pagá la seña al alias ${PAYMENT_ALIAS} y enviá el comprobante para que quede confirmado.`
              : "Pedido de prueba registrado. No se bloquearon fechas porque el modo prueba está activo."}
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
        <button
          type="submit"
          disabled={!canConfirm}
          className="gabinete-button px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCircle2 size={17} />
          {status === "saving"
            ? "Registrando..."
            : !user
              ? "Ingresar con Google y registrar pedido"
              : "Registrar pedido y pagar seña"}
        </button>
      </div>
    </form>
  );
}
