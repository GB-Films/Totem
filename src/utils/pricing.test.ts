import { describe, expect, it } from "vitest";
import type { Product, SelectionItem } from "../types";
import { calculateProductPricing, calculateSelectionPricing } from "./pricing";

const product: Product = {
  id: "test-1",
  name: "Objeto de prueba",
  images: [],
  category: "Utilería",
  tags: [],
  rentalPricePerDay: 100,
  rentalPricePerWeek: 600,
  description: "",
  curiosities: "",
  status: "Excelente",
  measurements: "",
  material: "",
  color: "",
  eraStyle: "",
  availability: "Disponible",
  estimatedValue: 1_000,
  guaranteePercentage: 0.3,
  minimumDeposit: 200,
  featuredScore: 0,
  stock: 3,
  visual: { tone: "paper", sigil: "✶" },
};

function selection(overrides: Partial<SelectionItem> = {}): SelectionItem {
  return {
    productId: product.id,
    quantity: 1,
    rentalDays: 1,
    ...overrides,
  };
}

describe("calculateProductPricing", () => {
  it("uses the weekly price when it is cheaper than seven daily rates", () => {
    const pricing = calculateProductPricing(product, selection({ rentalDays: 7 }));

    expect(pricing.rentalSubtotal).toBe(700);
    expect(pricing.rentalDiscount).toBe(100);
    expect(pricing.rentalTotal).toBe(600);
    expect(pricing.reserveDeposit).toBe(120);
  });

  it("combines full weeks and remaining days", () => {
    const pricing = calculateProductPricing(product, selection({ rentalDays: 9, quantity: 2 }));

    expect(pricing.rentalSubtotal).toBe(1_800);
    expect(pricing.rentalTotal).toBe(1_600);
    expect(pricing.guaranteeAmount).toBe(600);
  });

  it("never prices more units than the published stock", () => {
    const pricing = calculateProductPricing(product, selection({ quantity: 10 }));

    expect(pricing.rentalTotal).toBe(300);
    expect(pricing.guaranteeAmount).toBe(900);
  });

  it("adds the delicate-object guarantee premium", () => {
    const pricing = calculateProductPricing(
      { ...product, status: "Delicado" },
      selection(),
    );

    expect(pricing.guaranteeAmount).toBeCloseTo(330);
  });
});

describe("calculateSelectionPricing", () => {
  it("sums every item once", () => {
    const pricing = calculateSelectionPricing(
      [product],
      [selection({ rentalDays: 7, quantity: 2 })],
    );

    expect(pricing.rentalTotal).toBe(1_200);
    expect(pricing.reserveDeposit).toBe(240);
    expect(pricing.totalEstimated).toBe(1_800);
  });
});
