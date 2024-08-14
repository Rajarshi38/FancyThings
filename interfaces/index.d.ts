interface ProductCardProps {
  product: Product;
}

interface Coupon {
  id: number;
  code: string;
  description: string;
  discount: {
    type: DiscountType;
    value: number;
  };
}
type DiscountType = "FLAT" | "PERCENTAGE";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductWithCount extends Product {
  cartCount: number;
}

interface CartState {
  cart: ProductWithCount[];
  totalPrice: number;
}
