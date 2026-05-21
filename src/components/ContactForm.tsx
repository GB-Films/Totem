import { CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useAvailability } from "../context/AvailabilityContext";
import { useAuth } from "../context/AuthContext";
import { useCatalog } from "../context/CatalogContext";
import { RESERVATIONS_ENABLED } from "../config/features";
import { firebaseEnabled } from "../services/firebase";
import type { SelectionItem } from "../types";
import { formatCurrency } from "../utils/format";
import {
  buildContactMessage,
  buildWhatsappUrl,
} from "../utils/messages";
import { calculateSelectionPricing } from "../utils/pricing";

interface ContactFormProps {
  selection: SelectionItem[];
}

export function ContactForm({ selection }: ContactFormProps) {
  const { addReservationsFromSelection, hasConflict, syncMode } = useAvailability();
  const { user, loginWithGoogle, authError: googleAuthError } = useAuth();
  const { products } = useCatalog();
  const [status, setStatus] = useState<"idle" | "saving" | "confirmed">("idle");
  const [authError, setAuthError] = useState("");
  const message = useMemo(
    () =>
      buildContactMessage(
        {
          name: user?.displayName ?? "",
          company: "",
          email: user?.email ?? "",
          phone: "",
          projectName: "",
          projectType: "",
          dates: "",
          message: "",
        },
        products,
        selection,
      ),
    [products, selection, user],
  );
  const pricing = useMemo(
    () => calculateSelectionPricing(products, selection),
    [products, selection],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasSelectionConflicts || selection.length === 0) {
      return;
    }

    if (firebaseEnabled && !user) {
      setAuthError("");
      await loginWithGoogle();
      return;
    }

    try {
      setStatus("saving");
      setAuthError("");
      await addReservationsFromSelection(selection, "Reserva confirmada", {
        customerName: user?.displayName ?? undefined,
        customerEmail: user?.email ?? undefined,
        createdByUid: user?.uid ?? undefined,
      });
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

  const hasSelectionConflicts = selection.some((item) =>
    hasConflict(item.productId, item.startDate, item.endDate),
  );

  return (
    <form onSubmit={handleSubmit} className="parchment-panel p-5">
      <p className="eyebrow">Finalizar</p>
      <h2 className="mt-2 font-display text-3xl text-gabinete-darkBrown">Confirmar reserva</h2>
      <p className="mt-2 font-editorial text-sm leading-6 text-gabinete-muted">
        Revisá el carrito antes de avanzar. Al confirmar, te queda listo el contacto por WhatsApp
        para coordinar logística y seña.
      </p>
      <p className="mt-3 rounded-md border border-gabinete-line/25 bg-gabinete-paperLight/24 px-3 py-2 font-editorial text-xs leading-5 text-gabinete-muted">
        Seña estimada del 20%: {formatCurrency(pricing.reserveDeposit)}.
        {syncMode === "firebase"
          ? RESERVATIONS_ENABLED
            ? " Esa reserva se sincroniza en Firebase."
            : " Modo prueba activo: al confirmar te pedimos ingresar con Google, pero por ahora no se bloquean fechas."
          : " Hasta cargar las claves de Firebase, queda guardada en este navegador."}
      </p>
      {status === "confirmed" && (
        <div className="mt-3 rounded-md border border-gabinete-available/35 bg-gabinete-available/10 px-3 py-3 font-editorial text-sm text-gabinete-available">
          <p>
            {RESERVATIONS_ENABLED
              ? "Reserva confirmada. Las fechas ya quedaron marcadas como no disponibles."
              : "Reserva de prueba confirmada. No se bloquearon fechas porque el modo prueba está activo."}
          </p>
          <a
            href={buildWhatsappUrl(message)}
            target="_blank"
            rel="noreferrer"
            className="gabinete-button mt-3 w-full px-4 py-3"
          >
            <MessageCircle size={17} />
            Hablar por WhatsApp
          </a>
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
        <button
          type="submit"
          disabled={hasSelectionConflicts || selection.length === 0 || status === "saving"}
          className="gabinete-button px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CheckCircle2 size={17} />
          {status === "saving"
            ? "Confirmando..."
            : firebaseEnabled && !user
              ? "Ingresar con Google y confirmar"
              : "Confirmar reserva"}
        </button>
      </div>
    </form>
  );
}
