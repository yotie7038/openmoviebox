import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";


const BannerClient = dynamic(() => import("@/components/Banner",),{ssr:false});
const TopSectionClient = dynamic(() => import("@/components/TopSection",),{ssr:false});
const TopBlockClient = dynamic(() => import("@/components/TopBlock",),{ssr:false});
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
<Header/>
<BannerClient/>
<TopSectionClient/>
<TopBlockClient/>
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
