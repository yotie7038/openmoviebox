import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import ActionBanner from "@/components/ActionBanner";
import ActionDetails from "@/components/ActionDetails";



const ActionUpcomingBlockClient = dynamic(() => import("@/components/ActionUpcomingBlock",),{ssr:false});

const ActionVideoBlockClient = dynamic(() => import("@/components/ActionVideoBlock",),{ssr:false});
const ActionMovieBlockClient = dynamic(() => import("@/components/ActionMovieBlock",),{ssr:false});
const ActionBlockClient = dynamic(() => import( "@/components/ActionBlock",),{ssr:false});
const ActionCastTabsClient = dynamic(() => import( "@/components/ActionCastTabs",),{ssr:false});
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
<ActionBanner/>
<ActionDetails/>
<ActionCastTabsClient/>
<ActionBlockClient/>

<ActionMovieBlockClient/>
<ActionVideoBlockClient/>
<ActionUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
