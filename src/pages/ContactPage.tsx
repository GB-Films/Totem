import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { RentalCalculator } from "../components/RentalCalculator";
import { ReservationHistory } from "../components/ReservationHistory";
import { SelectedProductsPanel } from "../components/SelectedProductsPanel";
import { useCatalog } from "../context/CatalogContext";
import { useSelection } from "../context/SelectionContext";

const checkoutSteps = [
  "Productos",
  "Método de retiro",
  "Completá tus datos",
  "Reserva y seña",
];

export function ContactPage() {
  const { selection } = useSelection();
  const { products } = useCatalog();
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (selection.length === 0 && activeStep > 1 && activeStep < 4) {
      setActiveStep(1);
    }
  }, [activeStep, selection.length]);

  const goToStep = (step: number) => {
    setActiveStep(Math.min(4, Math.max(1, step)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="checkout-page mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <section className="simple-page-hero checkout-hero">
        <p className="eyebrow">Carrito</p>
        <h1>Armá tu reserva.</h1>
        <p>
          Revisá tus objetos, elegí el retiro, confirmá tus datos y reservá las fechas durante 24 horas.
        </p>
      </section>

      <ol className="checkout-progress checkout-progress-interactive" aria-label="Proceso de reserva">
        {checkoutSteps.map((label, index) => {
          const step = index + 1;
          const completed = step < activeStep;
          return (
            <li
              key={label}
              className={`${step === activeStep ? "is-active" : ""} ${completed ? "is-complete" : ""}`}
            >
              <button
                type="button"
                onClick={() => completed && goToStep(step)}
                disabled={!completed}
                aria-current={step === activeStep ? "step" : undefined}
              >
                <strong>{String(step).padStart(2, "0")}</strong>
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {activeStep === 1 && (
        <div className="checkout-cart-layout">
          <SelectedProductsPanel
            showAction={false}
            showCalculator={false}
            stepLabel="Paso 01"
            title="Productos en tu carrito"
          />
          <aside className="checkout-order-summary">
            <RentalCalculator products={products} selection={selection} />
            <button
              type="button"
              className="checkout-continue-button gabinete-button"
              disabled={selection.length === 0}
              onClick={() => goToStep(2)}
            >
              <span>
                Continuar
                <small>{selection.length} {selection.length === 1 ? "objeto" : "objetos"}</small>
              </span>
              <ArrowRight size={24} />
            </button>
          </aside>
        </div>
      )}

      {activeStep === 2 && (
        <div className="checkout-step-layout">
          <section className="parchment-panel checkout-pickup-panel">
            <p className="eyebrow">Paso 02</p>
            <h2>Método de retiro</h2>
            <p className="checkout-step-intro">
              Por ahora trabajamos con un único punto de retiro.
            </p>

            <label className="checkout-pickup-option">
              <input type="radio" checked readOnly />
              <div className="checkout-pickup-icon"><MapPin size={27} /></div>
              <div>
                <strong>Retiro por la oficina</strong>
                <span>Mendoza 2364, CABA</span>
                <span><Clock3 size={15} /> Horario de 9 a 13 hs</span>
                <span><MessageCircle size={15} /> Se coordina previamente por WhatsApp</span>
              </div>
              <CheckCircle2 className="checkout-pickup-check" size={24} />
            </label>
          </section>

          <aside className="checkout-next-panel">
            <p className="eyebrow">Paso siguiente</p>
            <h3>Completá tus datos</h3>
            <p>Si ya guardaste tu perfil, los campos se completan automáticamente.</p>
            <button type="button" className="gabinete-button" onClick={() => goToStep(3)}>
              Continuar
              <ArrowRight size={20} />
            </button>
            <button type="button" className="checkout-back-button" onClick={() => goToStep(1)}>
              <ArrowLeft size={16} />
              Volver al carrito
            </button>
          </aside>
        </div>
      )}

      {(activeStep === 3 || activeStep === 4) && (
        <ContactForm
          selection={selection}
          activeStep={activeStep}
          onBack={() => goToStep(activeStep - 1)}
          onContinue={() => goToStep(4)}
        />
      )}

      <div className="mt-8">
      {activeStep === 4 && <ReservationHistory />}
      </div>
    </div>
  );
}
