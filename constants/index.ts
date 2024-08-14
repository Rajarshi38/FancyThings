export const coupons: Coupon[] = [
  {
    id: 1,
    code: "DACE20X",
    description: "Get 20% off on your first purchase",
    discount: {
      type: "PERCENTAGE",
      value: 20,
    },
  },
  {
    id: 2,
    code: "WELCOME200",
    description: "Get FLAT 200 off on your total",
    discount: {
      type: "FLAT",
      value: 200,
    },
  },
];
