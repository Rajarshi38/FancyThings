"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../lib/hooks";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <nav className="h-16 w-full bg-gradient-to-r from-slate-900 to-slate-700 flex px-8 items-center justify-between">
      <h2 className="text-white text-2xl">FancyThings</h2>
      <button className="bg-transparent relative hover:bg-white hover:bg-opacity-10 p-2 rounded-full transition-all ease-in">
        <ShoppingCartIcon className="size-9 text-white" />
        {cart.length > 0 ? (
          <div className="absolute top-[2px] -right-[2px] rounded-full py-1 px-2 text-[12px] bg-rose-600 text-white">
            {cart.length}
          </div>
        ) : null}
      </button>
    </nav>
  );
};

export default Header;
