import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import HorrorBanner from "@/components/HorrorBanner";
import HorrorDetails from "@/components/HorrorDetails";



const HorrorUpcomingBlockClient = dynamic(() => import("@/components/HorrorUpcomingBlock",),{ssr:false});

const HorrorVideoBlockClient = dynamic(() => import("@/components/HorrorVideoBlock",),{ssr:false});
const HorrorMovieBlockClient = dynamic(() => import("@/components/HorrorMovieBlock",),{ssr:false});
const HorrorBlockClient = dynamic(() => import( "@/components/HorrorBlock",),{ssr:false});
const HorrorCastTabsClient = dynamic(() => import( "@/components/HorrorCastTabs",),{ssr:false});
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
<HorrorBanner/>
<HorrorDetails/>
<HorrorCastTabsClient/>
<HorrorBlockClient/>

<HorrorMovieBlockClient/>
<HorrorVideoBlockClient/>
<HorrorUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
