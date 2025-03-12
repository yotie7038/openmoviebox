import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import CrimeBanner from "@/components/CrimeBanner";
import CrimeDetails from "@/components/CrimeDetails";



const CrimeUpcomingBlockClient = dynamic(() => import("@/components/CrimeUpcomingBlock",),{ssr:false});

const CrimeVideoBlockClient = dynamic(() => import("@/components/CrimeVideoBlock",),{ssr:false});
const CrimeMovieBlockClient = dynamic(() => import("@/components/CrimeMovieBlock",),{ssr:false});
const CrimeBlockClient = dynamic(() => import( "@/components/CrimeBlock",),{ssr:false});
const CrimeCastTabsClient = dynamic(() => import( "@/components/CrimeCastTabs",),{ssr:false});
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
<CrimeBanner/>
<CrimeDetails/>
<CrimeCastTabsClient/>
<CrimeBlockClient/>

<CrimeMovieBlockClient/>
<CrimeVideoBlockClient/>
<CrimeUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
