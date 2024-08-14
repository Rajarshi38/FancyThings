import { useAppSelector } from "@/store/hooks";
import { computeAmountWithDiscount } from "@/utils/util";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useTotalPriceWithCoupon = (onApplyCoupon: () => void) => {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [totalAmount, setTotalAmount] = useState(totalPrice);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    if (appliedCoupon) {
      setTotalAmount(
        computeAmountWithDiscount(
          totalPrice,
          appliedCoupon.discount.type,
          appliedCoupon.discount.value
        )
      );
    } else {
      setTotalAmount(totalPrice);
    }
  }, [totalPrice]);

  const applyCoupon = (coupon: Coupon) => {
    return () => {
      toast.promise(
        () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (
                coupon.discount.type === "FLAT" &&
                coupon.discount.value > totalPrice
              ) {
                reject();
              } else {
                let totalAmountAfterDiscount;
                if (coupon.discount.type === "FLAT") {
                  totalAmountAfterDiscount = totalPrice - coupon.discount.value;
                } else {
                  totalAmountAfterDiscount =
                    (totalPrice * (100 - coupon.discount.value)) / 100;
                }
                setAppliedCoupon(coupon);
                onApplyCoupon();
                setTotalAmount(totalAmountAfterDiscount);
                resolve("Coupon applied");
              }
            }, 3000);
          });
        },
        {
          pending: "Coupon is applying",
          success: "Coupon applied successfully",
          error: "Failed to apply coupon",
        },
        {
          autoClose: 1500,
        }
      );
    };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setTotalAmount(totalPrice);
    toast.info("Coupon removed", {
      autoClose: 1500,
    });
  };

  return {
    totalAmount,
    appliedCoupon,
    removeCoupon,
    applyCoupon,
  };
};
