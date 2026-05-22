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
import {
  buildContactMessage,
  buildWhatsappUrl,
} from "../utils/messages";
import { calculateSelectionPricing } from "../utils/pricing";

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
  const hasUnavailableProducts = selectedProducts.some(({ product }) => product.availability !== "Disponible");
  const missingCustomerInfo = !customerInfo.firstName.trim()
    || !customerInfo.lastName.trim()
    || !customerInfo.dni.trim()
    || !customerInfo.phone.trim();
  const canConfirm = selection.length > 0
    && selectedProducts.length === selection.length
    && !hasSelectionConflicts
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
            message: "",
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

      await addReservationsFromSelection(selection, "Reserva confirmada", {
        customerName,
        customerEmail: reservationUser.email ?? undefined,
        createdByUid: reservationUser.uid,
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
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Confirmar reserva</h2>
      <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
        Revisá el carrito antes de avanzar. Para confirmar necesitamos tus datos de contacto y que
        todos los objetos sigan disponibles.
      </p>
      <p className="mt-3 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-xs leading-5 text-gabinete-muted">
        Seña estimada del 20%: {formatCurrency(pricing.reserveDeposit)}.
        {syncMode === "firebase"
          ? RESERVATIONS_ENABLED
            ? " La reserva se sincroniza en Firebase y bloquea esas fechas."
            : " Modo prueba activo: se pide login, pero no se bloquean fechas."
          : " Para confirmar con login y bloquear fechas hace falta configurar Firebase."}
      </p>

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
              ? "Reserva confirmada. Las fechas ya quedaron marcadas como no disponibles y el carrito se vació."
              : "Reserva de prueba confirmada. No se bloquearon fechas porque el modo prueba está activo."}
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
            ? "Confirmando..."
            : !user
              ? "Ingresar con Google y confirmar"
              : "Confirmar reserva"}
        </button>
      </div>
    </form>
  );
}
