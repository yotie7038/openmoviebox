import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import ScifiBanner from "@/components/ScifiBanner";
import ScifiDetails from "@/components/ScifiDetails";

const ScifiUpcomingBlockClient = dynamic(
  () => import("@/components/ScifiUpcomingBlock"),
  { ssr: false },
);

const ScifiVideoBlockClient = dynamic(
  () => import("@/components/ScifiVideoBlock"),
  { ssr: false },
);
const ScifiMovieBlockClient = dynamic(
  () => import("@/components/ScifiMovieBlock"),
  { ssr: false },
);
const ScifiBlockClient = dynamic(() => import("@/components/ScifiBlock"), {
  ssr: false,
});
const ScifiCastTabsClient = dynamic(
  () => import("@/components/ScifiCastTabs"),
  { ssr: false },
);
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
        <ScifiBanner />
        <ScifiDetails />
        <ScifiCastTabsClient />
        <ScifiBlockClient />

        <ScifiMovieBlockClient />
        <ScifiVideoBlockClient />
        <ScifiUpcomingBlockClient />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
