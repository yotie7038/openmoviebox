import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import Header from "@/components/Header";
import ShopSidebar from "@/components/ShopSidebar";
import ShopCrumb from "@/components/ShopCrumb";
import ShopProduct from "@/components/ShopProduct";

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

        <ShopSidebar />
        <ShopCrumb />
        <ShopProduct />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
