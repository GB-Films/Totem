import { ArrowLeft, Mail, MessageCircle, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { CategoryBadge } from "../components/CategoryBadge";
import { ObjectImage } from "../components/ObjectImage";
import { RentalCalculator } from "../components/RentalCalculator";
import { TagPill } from "../components/TagPill";
import { useSelection } from "../context/SelectionContext";
import { products } from "../data/products";
import { formatCurrency, formatPercent } from "../utils/format";
import { buildContactMessage, buildMailtoUrl, buildWhatsappUrl } from "../utils/messages";

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((candidate) => candidate.id === id);
  const { addProduct } = useSelection();

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-display text-5xl text-bone">Ese objeto no figura en el archivo.</p>
        <Link to="/catalogo" className="mt-8 inline-flex rounded-md bg-brass px-5 py-3 font-semibold text-coal">
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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/catalogo" className="inline-flex items-center gap-2 text-sm text-bone/65 hover:text-bone">
        <ArrowLeft size={16} />
        Volver al catálogo
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <section>
          <ObjectImage product={product} />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="rounded-md border border-bone/10 bg-ash/60 p-2">
                <ObjectImage product={product} compact />
              </div>
            ))}
          </div>
        </section>

        <section className="lg:pt-3">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryBadge category={product.category} />
            <span className="rounded-full border border-bone/15 bg-bone/5 px-3 py-1 text-xs text-bone/70">
              {product.availability}
            </span>
            <span className="rounded-full border border-bone/15 bg-bone/5 px-3 py-1 text-xs text-bone/70">
              Estado: {product.status}
            </span>
          </div>
          <h1 className="mt-5 font-display text-5xl leading-none text-bone sm:text-6xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-bone/68">{product.description}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-bone/10 bg-ash/60 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-brass/80">Alquiler diario</p>
              <p className="mt-2 text-2xl font-semibold text-bone">
                {formatCurrency(product.rentalPricePerDay)}
              </p>
            </div>
            <div className="rounded-lg border border-bone/10 bg-ash/60 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-brass/80">Alquiler semanal</p>
              <p className="mt-2 text-2xl font-semibold text-bone">
                {product.rentalPricePerWeek ? formatCurrency(product.rentalPricePerWeek) : "Consultar"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-brass/20 bg-brass/10 p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-brass/80">Curiosidades</p>
            <p className="mt-3 font-display text-2xl leading-snug text-bone">{product.curiosities}</p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addProduct(product)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brass px-4 py-3 font-semibold text-coal transition hover:bg-bone"
            >
              <Plus size={18} />
              Sumar a consulta
            </button>
            <a
              href={buildWhatsappUrl(quickMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brass/50 px-4 py-3 font-semibold text-bone transition hover:bg-brass/10"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
            <a
              href={buildMailtoUrl(quickMessage)}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-bone/15 px-4 py-3 font-semibold text-bone transition hover:border-brass hover:bg-brass/10 sm:col-span-2"
            >
              <Mail size={18} />
              Consultar por email
            </a>
          </div>
        </section>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
        <section className="rounded-lg border border-bone/10 bg-ash/60 p-6">
          <h2 className="font-display text-3xl text-bone">Ficha de archivo</h2>
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
              <div key={label} className="rounded-md border border-bone/10 bg-coal/55 p-4">
                <dt className="text-xs uppercase tracking-[0.22em] text-bone/45">{label}</dt>
                <dd className="mt-2 text-bone">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <RentalCalculator products={products} selection={singleSelection} />
      </div>
    </div>
  );
}
