import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import ThrillerBanner from "@/components/ThrillerBanner";
import ThrillerDetails from "@/components/ThrillerDetails";



const ThrillerUpcomingBlockClient = dynamic(() => import("@/components/ThrillerUpcomingBlock",),{ssr:false});

const ThrillerVideoBlockClient = dynamic(() => import("@/components/ThrillerVideoBlock",),{ssr:false});
const ThrillerMovieBlockClient = dynamic(() => import("@/components/ThrillerMovieBlock",),{ssr:false});
const ThrillerBlockClient = dynamic(() => import( "@/components/ThrillerBlock",),{ssr:false});
const ThrillerCastTabsClient = dynamic(() => import( "@/components/ThrillerCastTabs",),{ssr:false});
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
<ThrillerBanner/>
<ThrillerDetails/>
<ThrillerCastTabsClient/>
<ThrillerBlockClient/>

<ThrillerMovieBlockClient/>
<ThrillerVideoBlockClient/>
<ThrillerUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
