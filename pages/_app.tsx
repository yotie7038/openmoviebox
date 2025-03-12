import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "@/styles/assets/css/core/libs.min.css"
import "@/styles/assets/vendor/font-awesome/css/all.min.css"
import "@/styles/assets/vendor/iconly/css/style.css"
import "@/styles/assets/vendor/swiperSlider/swiper.min.css"
import "@/styles/assets/css/streamit.min848f.css?v=5.2.1"
import "@/styles/assets/css/custom.min848f.css?v=5.2.1"
import "@/styles/assets/css/custom.min848f.css?v=5.2.1"
import "@/styles/assets/css/rtl.min848f.css?v=5.2.1"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
