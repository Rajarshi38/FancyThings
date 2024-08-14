"use client";
import Image from "next/image";
import { Button } from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/reducers/CartReducer";

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const isProductAddedToCart = () => {
    const idx = cart.findIndex(
      (addedProduct) => addedProduct.id === product.id
    );
    if (idx === -1) return false;
    return true;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg py-4 px-6 border border-gray-300 h-[350px] justify-between flex flex-col items-center">
      {/* product image */}
      <div className="w-[120px] h-[120px] relative p-5">
        <Image src={product.image} alt="https://placehold.co/70x70" fill />
      </div>
      {/* product name */}
      <h3 className="font-semibold text-slate-600 text-center">
        {product.title}
      </h3>
      {/* product price */}
      <span className="text-center text-gray-500">
        Price: <span className="font-bold text-gray-700">${product.price}</span>
      </span>
      {/* Add to cart button */}
      {isProductAddedToCart() ? (
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={() => {
            dispatch(removeFromCart(product.id));
          }}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
