"use client";
import Spinner from "@/components/Spinner";
import { useEffect } from "react";

export default function Checkout() {
  useEffect(() => {
    const id = setTimeout(() => {
      window.location.replace("/");
    }, 4000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Spinner className="h-64 w-64" />
      <div className="mt-12">
        <p className="text-lg font-bold">
          Your transaction is processing, Do not close the page you will be
          automatically redirected
        </p>
      </div>
    </main>
  );
}
