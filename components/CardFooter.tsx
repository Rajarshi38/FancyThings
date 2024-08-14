"use client";
import { formatCurrency } from "@/utils/util";
import { Button } from "./Button";
import { useState } from "react";
import CouponModal from "./CouponModal";
import { useTotalPriceWithCoupon } from "@/hooks/useTotalPrice";
import { useAppSelector } from "@/store/hooks";

const CartFooter = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const { appliedCoupon, applyCoupon, removeCoupon, totalAmount } =
    useTotalPriceWithCoupon(() => {
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
    <footer className="flex w-full mr-[200px] mx-[auto] fixed bottom-0 justify-between px-5 py-8 items-center bg-gray-200">
      <div className="flex justify-between grow pl-3 pr-16">
        <h3 className="text-xl font-bold">Your cart total: </h3>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-cyan-700">
            {formatCurrency(totalAmount)}
          </span>
          {appliedCoupon !== null ? (
            <span className="text-cyan-800">
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
              className="underline cursor-pointer text-cyan-800"
              onClick={openModal}
            >
              Have a coupon?
            </span>
          )}
        </div>
      </div>
      <div>
        <Button>Proceed to payment</Button>
      </div>
      <CouponModal
        isOpen={isCouponModalOpen}
        closeModal={closeModal}
        applyCoupon={applyCoupon}
      />
    </footer>
  );
};

export default CartFooter;
