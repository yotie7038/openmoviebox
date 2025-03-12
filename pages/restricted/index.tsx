import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import RestrictedBanner from "@/components/RestrictedBanner";
import RestrictedDetails from "@/components/RestrictedDetails";



const RestrictedUpcomingBlockClient = dynamic(() => import("@/components/RestrictedUpcomingBlock",),{ssr:false});

const RestrictedVideoBlockClient = dynamic(() => import("@/components/RestrictedVideoBlock",),{ssr:false});
const RestrictedMovieBlockClient = dynamic(() => import("@/components/RestrictedMovieBlock",),{ssr:false});
const RestrictedBlockClient = dynamic(() => import( "@/components/RestrictedBlock",),{ssr:false});
const CastTabsClient = dynamic(() => import( "@/components/CastTabs",),{ssr:false});
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
<RestrictedBanner/>
<RestrictedDetails/>
<CastTabsClient/>
<RestrictedBlockClient/>

<RestrictedMovieBlockClient/>
<RestrictedVideoBlockClient/>
<RestrictedUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
