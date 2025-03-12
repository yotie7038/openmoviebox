import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import ComedyBanner from "@/components/ComedyBanner";
import ComedyDetails from "@/components/ComedyDetails";



const ComedyUpcomingBlockClient = dynamic(() => import("@/components/ComedyUpcomingBlock",),{ssr:false});

const ComedyVideoBlockClient = dynamic(() => import("@/components/ComedyVideoBlock",),{ssr:false});
const ComedyMovieBlockClient = dynamic(() => import("@/components/ComedyMovieBlock",),{ssr:false});
const ComedyBlockClient = dynamic(() => import( "@/components/ComedyBlock",),{ssr:false});
const ComedyCastTabsClient = dynamic(() => import( "@/components/ComedyCastTabs",),{ssr:false});
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
<ComedyBanner/>
<ComedyDetails/>
<ComedyCastTabsClient/>
<ComedyBlockClient/>

<ComedyMovieBlockClient/>
<ComedyVideoBlockClient/>
<ComedyUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
