import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import StoreProvider from "./StoreProvider";
import { cn } from "@/utils/util";
import { ToastContainer } from "react-toastify";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy Things",
  description: "Goto application for different products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={cn(rubik.className, "bg-[#f2f2f2]")}>
          <Header />
          {children}
          <ToastContainer />
        </body>
      </html>
    </StoreProvider>
  );
}
