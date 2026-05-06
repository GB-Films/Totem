import type { PricingBreakdown, Product, SelectionItem } from "../types";

export const LONG_RENTAL_DAYS = 7;
export const LONG_RENTAL_DISCOUNT = 0.15;
export const DELICATE_GUARANTEE_EXTRA = 0.1;

export function calculateProductPricing(product: Product, item: SelectionItem): PricingBreakdown {
  const safeQuantity = Math.max(1, item.quantity);
  const safeDays = Math.max(1, item.rentalDays);
  const rentalSubtotal = product.rentalPricePerDay * safeDays * safeQuantity;
  const rentalDiscount = safeDays > LONG_RENTAL_DAYS ? rentalSubtotal * LONG_RENTAL_DISCOUNT : 0;
  const rentalTotal = rentalSubtotal - rentalDiscount;
  const baseGuarantee = Math.max(
    product.estimatedValue * product.guaranteePercentage,
    product.minimumDeposit,
  );
  const delicateExtra = product.status === "Delicado" ? DELICATE_GUARANTEE_EXTRA : 0;
  const guaranteeAmount = baseGuarantee * (1 + delicateExtra) * safeQuantity;
  const reserveDeposit = guaranteeAmount;

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
