import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import BottomFooter from "@/components/BottomFooter";
import BlogCrumb from "@/components/BlogCrumb";
import BlogSection from "@/components/BlogSection";

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
        <BlogCrumb />
        <BlogSection />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
