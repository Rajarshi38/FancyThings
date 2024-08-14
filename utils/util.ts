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
    return { discountedAmount: originalPrice, discount: 0 };
  }
  let totalAmountAfterDiscount;
  let discount;
  if (discountType === "FLAT") {
    discount = discountValue;
    totalAmountAfterDiscount = originalPrice - discountValue;
  } else {
    discount = (originalPrice * discountValue) / 100;
    totalAmountAfterDiscount = originalPrice - discount;
  }

  return { discountedAmount: totalAmountAfterDiscount, discount };
};
