import { ArrowLeft, Mail, MessageCircle, Plus, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { AvailabilityCalendar } from "../components/AvailabilityCalendar";
import { CategoryBadge } from "../components/CategoryBadge";
import { ObjectImage } from "../components/ObjectImage";
import { RentalCalculator } from "../components/RentalCalculator";
import { TagPill } from "../components/TagPill";
import { useSelection } from "../context/SelectionContext";
import { products } from "../data/products";
import type { Availability } from "../types";
import { formatCurrency, formatPercent } from "../utils/format";
import { buildContactMessage, buildMailtoUrl, buildWhatsappUrl } from "../utils/messages";

const availabilityClass: Record<Availability, string> = {
  Disponible: "availability-disponible",
  Consultar: "availability-consultar",
  Reservado: "availability-reservado",
};

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((candidate) => candidate.id === id);
  const { addProduct } = useSelection();

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-[1520px] px-4 py-24 text-center sm:px-8 lg:px-12">
        <p className="font-display text-5xl text-gabinete-darkBrown">
          Ese objeto no figura en el archivo.
        </p>
        <Link to="/catalogo" className="gabinete-button mt-8 px-5 py-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const singleSelection = [{ productId: product.id, quantity: 1, rentalDays: 1 }];
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

  return (
    <div className="mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-8 lg:px-12">
      <Link
        to="/catalogo"
        className="inline-flex items-center gap-2 text-sm text-gabinete-muted hover:text-gabinete-darkBrown"
      >
        <ArrowLeft size={16} />
        Volver al catálogo
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <section>
          <ObjectImage product={product} />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="rounded-[10px] border border-gabinete-line/28 bg-gabinete-paperLight/16 p-2">
                <ObjectImage product={product} compact />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <AvailabilityCalendar product={product} />
          </div>
        </section>

        <section className="lg:pt-3">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryBadge category={product.category} />
            <span className={`availability-badge ${availabilityClass[product.availability]}`}>
              {product.availability}
            </span>
            <span className="rounded-full border border-gabinete-line/35 bg-gabinete-paperLight/24 px-3 py-1 text-xs text-gabinete-muted">
              Estado: {product.status}
            </span>
          </div>
          <h1 className="mt-5 font-display text-5xl leading-none text-gabinete-darkBrown sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 font-editorial text-lg leading-8 text-gabinete-muted">
            {product.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="parchment-panel p-4">
              <p className="eyebrow">Alquiler diario</p>
              <p className="mt-2 font-display text-2xl font-semibold text-gabinete-darkBrown">
                {formatCurrency(product.rentalPricePerDay)}
              </p>
            </div>
            <div className="parchment-panel p-4">
              <p className="eyebrow">Alquiler semanal</p>
              <p className="mt-2 font-display text-2xl font-semibold text-gabinete-darkBrown">
                {product.rentalPricePerWeek ? formatCurrency(product.rentalPricePerWeek) : "Consultar"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>

          <div className="curiosity-box mt-7 p-5">
            <p className="eyebrow flex items-center gap-2">
              <Sparkles size={15} />
              Curiosidades
            </p>
            <p className="mt-3 font-editorial text-2xl italic leading-snug text-gabinete-darkBrown">
              {product.curiosities}
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={() => addProduct(product)} className="gabinete-button px-4 py-3">
              <Plus size={18} />
              Sumar a consulta
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
            <a href={buildMailtoUrl(quickMessage)} className="gabinete-button-secondary px-4 py-3 sm:col-span-2">
              <Mail size={18} />
              Consultar por email
            </a>
          </div>
        </section>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="parchment-panel p-6">
          <h2 className="font-display text-3xl text-gabinete-darkBrown">Ficha del objeto</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["ID", product.id],
              ["Medidas aproximadas", product.measurements],
              ["Material", product.material],
              ["Color", product.color],
              ["Época / estilo", product.eraStyle],
              ["Valor estimado", formatCurrency(product.estimatedValue)],
              ["Garantía sugerida", formatPercent(product.guaranteePercentage)],
              ["Depósito mínimo", formatCurrency(product.minimumDeposit)],
            ].map(([label, value]) => (
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
