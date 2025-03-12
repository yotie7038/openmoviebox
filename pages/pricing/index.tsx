import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import PricingCrumb from "@/components/PricingCrumb";
import PricingSection from "@/components/pricingSection";

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
        <PricingCrumb />
        <PricingSection />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
