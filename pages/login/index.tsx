import Image from "next/image";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import BottomFooter from "@/components/BottomFooter";
import LoginPage from "@/components/LoginPage";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="custom-header-relative">
      <main className="main-content">
        <Header />
        <LoginPage />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
