import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
 <link
   href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&amp;display=swap"
  rel="stylesheet"
/>
</Head>      <body className="antialiased">
        <Main />
        <NextScript />
        <Script src="/assets/js/core/libs.min.js"></Script>

    <Script src="/assets/vendor/swiperSlider/swiper.min.js"></Script>

    <Script src="/assets/js/plugins/fslightbox.js" defer></Script>
    <Script src="/assets/vendor/lodash/lodash.min.js"></Script>
    <Script src="/assets/js/core/external.min.js"></Script>
    <Script src="/assets/js/plugins/countdown.js"></Script>
    <Script src="/assets/js/utility.js"></Script>
    
    <Script src="/assets/js/setting.js"></Script>
    <Script src="/assets/js/setting-init.js" defer></Script>
   
    <Script src="/assets/js/streamit.js" defer></Script>
    <Script src="/assets/js/swiper.js" defer></Script>
      </body>
    </Html>
  );
}
