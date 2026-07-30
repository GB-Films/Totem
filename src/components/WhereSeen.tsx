import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import driveToSurvive from "../assets/totem-uses/drive-to-survive.webp";
import getnet from "../assets/totem-uses/getnet.webp";
import gioInvierno from "../assets/totem-uses/gio-invierno.webp";
import gioOtono01 from "../assets/totem-uses/gio-otono-01.webp";
import gioOtono02 from "../assets/totem-uses/gio-otono-02.webp";
import glod from "../assets/totem-uses/glod.webp";
import zb from "../assets/totem-uses/zb.webp";

const productions = [
  {
    title: "Drive to Survive",
    detail: "Netflix · Publicidad",
    image: driveToSurvive,
    alt: "Televisor y cajones de Totem en una producción de Netflix",
  },
  {
    title: "Getnet",
    detail: "Campaña audiovisual",
    image: getnet,
    alt: "Objetos de bar de Totem en una campaña de Getnet",
  },
  {
    title: "Gio · Invierno",
    detail: "Producción de campaña",
    image: gioInvierno,
    alt: "Radio vintage de Totem en una campaña de Gio",
  },
  {
    title: "Gio · Otoño I",
    detail: "Producción de campaña",
    image: gioOtono01,
    alt: "Libros y dados de Totem en una campaña de Gio",
  },
  {
    title: "Gio · Otoño II",
    detail: "Producción de campaña",
    image: gioOtono02,
    alt: "Dados de Totem en una campaña de Gio",
  },
  {
    title: "Glød",
    detail: "Producción de campaña",
    image: glod,
    alt: "Canasto metálico de Totem en una campaña de Glød",
  },
  {
    title: "ZB",
    detail: "Producción editorial",
    image: zb,
    alt: "Herramienta de precisión de Totem en una producción editorial",
  },
];

export function WhereSeen() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scrollGallery = (direction: number) => {
    const gallery = galleryRef.current;
    const card = gallery?.querySelector<HTMLElement>(".home-uses-card");

    if (!gallery || !card) return;

    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    gallery.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const updateActiveIndex = () => {
    const gallery = galleryRef.current;
    const card = gallery?.querySelector<HTMLElement>(".home-uses-card");

    if (!gallery || !card) return;

    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    const nextIndex = Math.round(gallery.scrollLeft / (card.offsetWidth + gap));
    setActiveIndex(Math.min(productions.length - 1, Math.max(0, nextIndex)));
  };

  const changeSelectedImage = (direction: number) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + productions.length) % productions.length;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") changeSelectedImage(-1);
      if (event.key === "ArrowRight") changeSelectedImage(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const selectedProduction = selectedIndex === null ? null : productions[selectedIndex];

  return (
    <section className="home-uses-section" aria-labelledby="home-uses-title">
      <div className="home-uses-heading">
        <div>
          <p className="eyebrow">Totem en escena</p>
          <h2 id="home-uses-title">Dónde ver nuestros Totems.</h2>
          <p>Objetos del archivo que ya fueron parte de campañas, rodajes y producciones.</p>
        </div>

        <div className="home-uses-controls" aria-label="Navegación de producciones">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(productions.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => scrollGallery(-1)} aria-label="Ver producción anterior">
            <ArrowLeft size={22} />
          </button>
          <button type="button" onClick={() => scrollGallery(1)} aria-label="Ver producción siguiente">
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={galleryRef}
        className="home-uses-gallery"
        onScroll={updateActiveIndex}
        tabIndex={0}
        aria-label="Galería de producciones que utilizaron objetos de Totem"
      >
        {productions.map((production, index) => (
          <button
            key={`${production.title}-${index}`}
            type="button"
            className="home-uses-card"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Ampliar ${production.title}`}
          >
            <span className="home-uses-image">
              <img src={production.image} alt={production.alt} loading="lazy" />
              <span className="home-uses-number">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <strong>{production.title}</strong>
            <em>{production.detail}</em>
          </button>
        ))}
      </div>

      {selectedProduction && (
        <div
          className="home-uses-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduction.title}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedIndex(null);
          }}
        >
          <div className="home-uses-modal-content">
            <button
              type="button"
              className="home-uses-modal-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar imagen"
            >
              <X size={24} />
            </button>
            <img src={selectedProduction.image} alt={selectedProduction.alt} />
            <div className="home-uses-modal-caption">
              <p className="eyebrow">Totem en escena</p>
              <h3>{selectedProduction.title}</h3>
              <p>{selectedProduction.detail}</p>
              <div>
                <button
                  type="button"
                  onClick={() => changeSelectedImage(-1)}
                  aria-label="Ver producción anterior"
                >
                  <ArrowLeft size={22} />
                </button>
                <span>
                  {String(productions.indexOf(selectedProduction) + 1).padStart(2, "0")} /{" "}
                  {String(productions.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => changeSelectedImage(1)}
                  aria-label="Ver producción siguiente"
                >
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
