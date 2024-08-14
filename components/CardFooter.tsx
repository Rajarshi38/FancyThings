"use client";
import { formatCurrency } from "@/utils/util";
import { Button } from "./Button";
import { useState } from "react";
import CouponModal from "./CouponModal";
import { useTotalPriceWithCoupon } from "@/hooks/useTotalPrice";
import { useAppSelector } from "@/store/hooks";

const CartFooter = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const {
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    totalAmount,
    discountAmount,
  } = useTotalPriceWithCoupon(() => {
    setIsCouponModalOpen(false);
  });

  const closeModal = () => {
    setIsCouponModalOpen(false);
  };

  const openModal = () => {
    setIsCouponModalOpen(true);
  };

  if (cart.length === 0) return null;

  return (
    <>
      <footer className="flex flex-col md:flex-row gap-4 md:gap-0 w-full mr-[200px] mx-[auto] fixed bottom-0 justify-between px-5 py-8 bg-gray-200">
        <div className="flex justify-between flex-1 pl-3 pr-2 md:pr-8 lg:pr-16">
          <div>
            <h3 className="text-lg md:text-xl xl:text-2xl text-cyan-600 font-bold">
              Your cart summary{" "}
            </h3>
            <p className="text-base md:text-md lg:text-lg font-semibold text-cyan-700">
              Subtotal : {formatCurrency(+totalPrice.toFixed(2))}
            </p>
            {appliedCoupon && (
              <p className="text-md font-medium text-cyan-700">
                Discount : {formatCurrency(+discountAmount.toFixed(2))}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg md:text-lg lg:text-xl xl:text-3xl font-bold text-cyan-700">
              Total: {formatCurrency(totalAmount)}
            </span>
            {appliedCoupon !== null ? (
              <span className="text-sm md:text-base text-cyan-800 text-center">
                Coupon applied {appliedCoupon.code},{" "}
                <span
                  className="underline font-semibold cursor-pointer"
                  onClick={removeCoupon}
                >
                  Remove
                </span>
              </span>
            ) : (
              <span
                className="text-sm md:text-base underline cursor-pointer text-cyan-800"
                onClick={openModal}
              >
                Have a coupon?
              </span>
            )}
          </div>
        </div>
        <div className="self-center">
          <Button className="text-base sm:text-base md:text-base lg:text-base">
            Proceed to payment
          </Button>
        </div>
      </footer>
      <CouponModal
        isOpen={isCouponModalOpen}
        closeModal={closeModal}
        applyCoupon={applyCoupon}
      />
    </>
  );
};

export default CartFooter;
