export type Category =
  | "Utilería"
  | "Mobiliario"
  | "Vestuario"
  | "Decoración"
  | "Arte"
  | "Exterior"
  | "Oficina";

export type ProductStatus = "Excelente" | "Muy bueno" | "Bueno" | "Delicado";
export type Availability = "Disponible" | "Consultar" | "Reservado";

export interface ProductVisual {
  tone: "brass" | "green" | "red" | "blue" | "paper" | "copper";
  sigil: string;
}

export interface Product {
  id: string;
  name: string;
  images: string[];
  category: Category;
  tags: string[];
  rentalPricePerDay: number;
  rentalPricePerWeek?: number;
  description: string;
  curiosities: string;
  status: ProductStatus;
  measurements: string;
  material: string;
  color: string;
  eraStyle: string;
  availability: Availability;
  estimatedValue: number;
  guaranteePercentage: number;
  minimumDeposit: number;
  featuredScore: number;
  internalNotes?: string;
  visual: ProductVisual;
}

export interface SelectionItem {
  productId: string;
  quantity: number;
  rentalDays: number;
  startDate?: string;
  endDate?: string;
}

export interface PricingBreakdown {
  rentalSubtotal: number;
  rentalDiscount: number;
  rentalTotal: number;
  guaranteeAmount: number;
  reserveDeposit: number;
  totalEstimated: number;
}

export interface ReservationRange {
  id: string;
  productId: string;
  startDate: string;
  endDate: string;
  source: "mock" | "local" | "firebase";
  note?: string;
}
