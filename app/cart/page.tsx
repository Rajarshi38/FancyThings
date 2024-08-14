import CartFooter from "@/components/CardFooter";
import CartDetails from "@/components/CartDetails";

export default function Cart() {
  return (
    <main className="pt-4 flex flex-col">
      <CartDetails />
      <CartFooter />
    </main>
  );
}
