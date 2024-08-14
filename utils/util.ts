import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (price: number, currency: string = "USD") => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    currency: currency,
    style: "currency",
  });
  return currencyFormatter.format(price);
};

export const computeAmountWithDiscount = (
  originalPrice: number,
  discountType: DiscountType,
  discountValue: number
) => {
  if (discountType === "FLAT" && discountValue > originalPrice) {
    return originalPrice;
  }
  let totalAmountAfterDiscount;
  if (discountType === "FLAT") {
    totalAmountAfterDiscount = originalPrice - discountValue;
  } else {
    totalAmountAfterDiscount = (originalPrice * (100 - discountValue)) / 100;
  }

  return totalAmountAfterDiscount;
};
