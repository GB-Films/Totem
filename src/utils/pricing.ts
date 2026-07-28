import type { PricingBreakdown, Product, SelectionItem } from "../types";

export const LONG_RENTAL_DAYS = 7;
export const LONG_RENTAL_DISCOUNT = 0.15;
export const DELICATE_GUARANTEE_EXTRA = 0.1;
export const RESERVATION_DEPOSIT_RATE = 0.2;

export function calculateProductPricing(product: Product, item: SelectionItem): PricingBreakdown {
  const safeQuantity = Math.min(product.stock, Math.max(1, item.quantity));
  const safeDays = Math.max(1, item.rentalDays);
  const rentalSubtotal = product.rentalPricePerDay * safeDays * safeQuantity;
  const fullWeeks = Math.floor(safeDays / LONG_RENTAL_DAYS);
  const remainingDays = safeDays % LONG_RENTAL_DAYS;
  const weeklyTotal = product.rentalPricePerWeek && fullWeeks > 0
    ? (fullWeeks * product.rentalPricePerWeek + remainingDays * product.rentalPricePerDay) * safeQuantity
    : null;
  const fallbackLongRentalTotal = safeDays > LONG_RENTAL_DAYS
    ? rentalSubtotal * (1 - LONG_RENTAL_DISCOUNT)
    : rentalSubtotal;
  const rentalTotal = weeklyTotal === null ? fallbackLongRentalTotal : Math.min(rentalSubtotal, weeklyTotal);
  const rentalDiscount = rentalSubtotal - rentalTotal;
  const baseGuarantee = Math.max(
    product.estimatedValue * product.guaranteePercentage,
    product.minimumDeposit,
  );
  const delicateExtra = product.status === "Delicado" ? DELICATE_GUARANTEE_EXTRA : 0;
  const guaranteeAmount = baseGuarantee * (1 + delicateExtra) * safeQuantity;
  const reserveDeposit = rentalTotal * RESERVATION_DEPOSIT_RATE;

  return {
    rentalSubtotal,
    rentalDiscount,
    rentalTotal,
    guaranteeAmount,
    reserveDeposit,
    totalEstimated: rentalTotal + guaranteeAmount,
  };
}

export function calculateSelectionPricing(
  products: Product[],
  items: SelectionItem[],
): PricingBreakdown {
  return items.reduce<PricingBreakdown>(
    (acc, item) => {
      const product = products.find((candidate) => candidate.id === item.productId);
      if (!product) {
        return acc;
      }
      const pricing = calculateProductPricing(product, item);
      return {
        rentalSubtotal: acc.rentalSubtotal + pricing.rentalSubtotal,
        rentalDiscount: acc.rentalDiscount + pricing.rentalDiscount,
        rentalTotal: acc.rentalTotal + pricing.rentalTotal,
        guaranteeAmount: acc.guaranteeAmount + pricing.guaranteeAmount,
        reserveDeposit: acc.reserveDeposit + pricing.reserveDeposit,
        totalEstimated: acc.totalEstimated + pricing.totalEstimated,
      };
    },
    {
      rentalSubtotal: 0,
      rentalDiscount: 0,
      rentalTotal: 0,
      guaranteeAmount: 0,
      reserveDeposit: 0,
      totalEstimated: 0,
    },
  );
}
