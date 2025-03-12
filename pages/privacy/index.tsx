import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";

import PrivacyCrumb from "@/components/PrivacyCrumb";
import PrivacySection from "@/components/PrivacySection";

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
        <PrivacyCrumb />
        <PrivacySection />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
