import { ContactForm } from "../components/ContactForm";
import { ReservationHistory } from "../components/ReservationHistory";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";
import { useSelection } from "../context/SelectionContext";
import { PAYMENT_ALIAS } from "../utils/reservations";

const rentalChecklist = [
  "Elegí fechas libres para cada objeto.",
  "Completá tus datos y el nombre del proyecto.",
  `Pagá la seña por transferencia al alias ${PAYMENT_ALIAS}.`,
  "Enviá el comprobante y coordinamos retiro, devolución y persona autorizada.",
];

export function ContactPage() {
  const { selection } = useSelection();

  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="simple-page-hero">
        <p className="eyebrow">Carrito</p>
        <h1 className="mt-3 max-w-[680px] font-display text-[clamp(2.2rem,4vw,4rem)] font-medium uppercase leading-[0.98] tracking-[0.02em] text-gabinete-darkBrown">
          Armá tu reserva.
        </h1>
        <p className="mt-5 max-w-[700px] font-editorial text-base leading-7 text-gabinete-muted">
          Seguí los cuatro pasos para registrar el pedido, guardar las fechas y confirmar la seña.
        </p>
      </section>

      <ol className="checkout-progress" aria-label="Proceso de reserva">
        <li><strong>01</strong><span>Completá tus datos</span></li>
        <li><strong>02</strong><span>Revisá objetos y fechas</span></li>
        <li><strong>03</strong><span>Reservá por 24 horas</span></li>
        <li><strong>04</strong><span>Transferí la seña</span></li>
      </ol>

      <div className="contact-checkout-layout">
        <div className="space-y-5">
          <ContactForm selection={selection} />
          <section className="self-service-card">
            <p className="eyebrow">Retiro y devolución</p>
            <h2>Información operativa</h2>
            <p>
              Al confirmar, dejamos preparado el resumen de piezas, fechas, garantía reintegrable y datos necesarios
              para coordinar la entrega o retiro.
            </p>
            <ul>
              {rentalChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="self-service-note">
              <strong>Para retirar:</strong> los objetos se retiran desde las 8:00 del primer día de reserva.
              Si necesitás el día previo, dejá la solicitud marcada. No hay retiro ni devolución fines de semana o feriados.
            </div>
          </section>
        </div>
        <SelectedProductsPanel showAction={false} />
      </div>
      <div className="mt-8">
        <ReservationHistory />
      </div>
    </div>
  );
}
