import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import RomanceBanner from "@/components/RomanceBanner";
import RomanceDetails from "@/components/RomanceDetails";



const RomanceUpcomingBlockClient = dynamic(() => import("@/components/RomanceUpcomingBlock",),{ssr:false});

const RomanceVideoBlockClient = dynamic(() => import("@/components/RomanceVideoBlock",),{ssr:false});
const RomanceMovieBlockClient = dynamic(() => import("@/components/RomanceMovieBlock",),{ssr:false});
const RomanceBlockClient = dynamic(() => import( "@/components/RomanceBlock",),{ssr:false});
const RomanceCastTabsClient = dynamic(() => import( "@/components/RomanceCastTabs",),{ssr:false});
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
<RomanceBanner/>
<RomanceDetails/>
<RomanceCastTabsClient/>
<RomanceBlockClient/>

<RomanceMovieBlockClient/>
<RomanceVideoBlockClient/>
<RomanceUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
