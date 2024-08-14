"use client";
import Modal from "react-responsive-modal";
import { coupons } from "@/constants";
import { useAppSelector } from "@/store/hooks";
import { toast } from "react-toastify";

type CouponModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  applyCoupon: (coupon: Coupon) => () => void;
};

export default function CouponModal({
  isOpen,
  closeModal,
  applyCoupon,
}: CouponModalProps) {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      styles={{
        modal: {
          borderRadius: "10px",
          top: "15%",
        },
      }}
    >
      <h4 className="text-xl font-bold">Your Coupons</h4>
      <div className="w-96 pt-6 pb-2">
        <div className="flex flex-col gap-4">
          {coupons.map((coupon) => {
            return (
              <div
                key={coupon.id}
                className="flex justify-between items-center border-b bg-gray-200 px-5 py-2 rounded-md shadow-md"
              >
                <div>
                  <p className="font-semibold">{coupon.code}</p>
                  <span className="text-sm text-gray-500 font-medium">
                    {coupon.description}
                  </span>
                </div>
                <div>
                  <button
                    className="uppercase font-semibold text-cyan-600"
                    onClick={applyCoupon(coupon)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
