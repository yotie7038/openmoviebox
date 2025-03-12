import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

import dynamic from "next/dynamic";
import BottomFooter from "@/components/BottomFooter";
import DramaBanner from "@/components/DramaBanner";
import DramaDetails from "@/components/DramaDetails";



const DramaUpcomingBlockClient = dynamic(() => import("@/components/DramaUpcomingBlock",),{ssr:false});

const DramaVideoBlockClient = dynamic(() => import("@/components/DramaVideoBlock",),{ssr:false});
const DramaMovieBlockClient = dynamic(() => import("@/components/DramaMovieBlock",),{ssr:false});
const DramaBlockClient = dynamic(() => import( "@/components/DramaBlock",),{ssr:false});
const DramaCastTabsClient = dynamic(() => import( "@/components/DramaCastTabs",),{ssr:false});
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
<DramaBanner/>
<DramaDetails/>
<DramaCastTabsClient/>
<DramaBlockClient/>

<DramaMovieBlockClient/>
<DramaVideoBlockClient/>
<DramaUpcomingBlockClient/> 
</main>
<footer className="footer footer-default">
<BottomFooter/>
</footer>
    </div>
  );
}
