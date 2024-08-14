"use client";
import { useAppSelector } from "@/store/hooks";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "@/store/reducers/CartReducer";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import Link from "next/link";
import { formatCurrency } from "@/utils/util";
import Image from "next/image";

const calculatePrice = (price: number, count: number) => {
  return price * count;
};

const CartDetails = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (id: number) => {
    return () => {
      dispatch(increaseCount(id));
    };
  };

  const decreaseQuantity = (id: number) => {
    return () => {
      dispatch(decreaseCount(id));
    };
  };

  const removeProduct = (id: number) => {
    return () => {
      dispatch(removeFromCart(id));
    };
  };
  return cart.length > 0 ? (
    <div className="pb-36">
      <h2 className="text-2xl text-center">Your Cart</h2>
      <div className="p-4">
        <table className="w-full">
          <thead className="border text-left bg-gray-200 ">
            <tr>
              <th className="cart-table-header-row">Title</th>
              <th className="cart-table-header-row">Image</th>
              <th className="cart-table-header-row text-center">Quantity</th>
              <th className="cart-table-header-row text-right">Price</th>
              <th className="cart-table-header-row text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td className="cart-table-row w-[40%] font-medium">
                  {product.title}
                </td>
                <td className="cart-table-row w-[10%]">
                  <Image src={product.image} alt="" height={40} width={50} />
                </td>
                <td className="cart-table-row w-[10%]">
                  <div className="flex flex-row gap-3 items-center justify-center">
                    <Button onClick={decreaseQuantity(product.id)}>-</Button>
                    <span className="w-5 text-center">{product.cartCount}</span>
                    <Button onClick={increaseQuantity(product.id)}>+</Button>
                  </div>
                </td>
                <td className="cart-table-row text-right w-[10%]">
                  {product.price} &times; {product.cartCount} ={" "}
                  {formatCurrency(
                    calculatePrice(product.price, product.cartCount)
                  )}
                </td>
                <td className="cart-table-row text-center w-[10%]">
                  <Button
                    className="bg-red-700 hover:bg-red-600"
                    onClick={removeProduct(product.id)}
                  >
                    Remove Item
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-3">
          <span className="font-medium text-lg underline hover:text-cyan-700">
            <Link href={"/"}>Want to add more? Go back to product page</Link>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <h3 className="text-2xl">You dont have any items in the cart</h3>
      <Link href="/">
        <Button className="text-center mt-5 py-3">
          Go to homepage to add products
        </Button>
      </Link>
    </div>
  );
};

export default CartDetails;
