import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import Header from "@/components/Header";
import CartCrumb from "@/components/CartCrumb";
import CartPage from "@/components/CartPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="custom-header-relative">
      <main className="main-content">
        <Header />
        <CartCrumb />
        <CartPage />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
