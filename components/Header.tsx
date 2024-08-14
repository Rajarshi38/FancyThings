"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../store/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const pathname = usePathname();
  if (pathname.includes("checkout")) return null;

  return (
    <nav className="h-16 w-full bg-gradient-to-r from-slate-900 to-slate-700 flex px-8 items-center justify-between">
      <h2 className="text-white text:lg xl:text-2xl">
        <Link href="/">FancyThings</Link>
      </h2>

      <div className="flex flex-row items-center">
        <span className="text-white text-sm lg:text-base 2xl:text-lg md:mt-1 mr-3 sm :mr-6 md:mr-8 lg:mr-12 xl:mr-16 hover:underline">
          {pathname.includes("cart") ? (
            <Link href="/">Home</Link>
          ) : (
            <Link href="/cart">View Cart</Link>
          )}
        </span>
        <button
          className="bg-transparent relative hover:bg-white hover:bg-opacity-10 p-2 rounded-full transition-all ease-in"
          type="button"
        >
          <Link href="/cart">
            <ShoppingCartIcon className="size-6 lg:size-8 text-white" />
            {cart.length > 0 ? (
              <div className="absolute top-[2px] -right-[2px] rounded-full py-1 px-2 text-[8px] md:text[10px] xl:text-[12px] bg-rose-600 text-white">
                {cart.length}
              </div>
            ) : null}
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
