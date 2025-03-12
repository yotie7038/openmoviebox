import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import DocumentaryBanner from "@/components/DocumentaryBanner";
import DocumentaryDetails from "@/components/DocumentaryDetails";

const DocumentaryUpcomingBlockClient = dynamic(
  () => import("@/components/DocumentaryUpcomingBlock"),
  { ssr: false },
);

const DocumentaryVideoBlockClient = dynamic(
  () => import("@/components/DocumentaryVideoBlock"),
  { ssr: false },
);
const DocumentaryMovieBlockClient = dynamic(
  () => import("@/components/DocumentaryMovieBlock"),
  { ssr: false },
);
const DocumentaryBlockClient = dynamic(
  () => import("@/components/DocumentaryBlock"),
  {
    ssr: false,
  },
);
const DocumentaryCastTabsClient = dynamic(
  () => import("@/components/DocumentaryCastTabs"),
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
        <DocumentaryBanner />
        <DocumentaryDetails />
        <DocumentaryCastTabsClient />
        <DocumentaryBlockClient />

        <DocumentaryMovieBlockClient />
        <DocumentaryVideoBlockClient />
        <DocumentaryUpcomingBlockClient />
      </main>
      <footer className="footer footer-default">
        <BottomFooter />
      </footer>
    </div>
  );
}
