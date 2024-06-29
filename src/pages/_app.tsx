import type { AppProps } from "next/app";
import Head from "next/head";
import "/src/app/globals.css"; // Ensure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Mobile Auto Detailing in Montreal | Sam's Mobile Detailing
        </title>
        <meta
          name="description"
          content="Experience the best mobile auto detailing in Montreal. Our expert services will transform your vehicle from dull to dazzling. Book now!"
        />
        <meta
          name="keywords"
          content="mobile auto detailing near me, car detailing near me, car cleaning near me, vehicle detailing near me, best car detailing near me"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Sam's Mobile Detailing" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Mobile Auto Detailing in Montreal | Sam's Mobile Detailing"
        />
        <meta
          property="og:description"
          content="Experience the best mobile auto detailing in Montreal. Our expert services will transform your vehicle from dull to dazzling. Book now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.samsmobiledetailing.ca" />
        <meta
          property="og:image"
          content="https://www.samsmobiledetailing.ca/images/other/wheel.png"
        />
        <meta property="og:image:alt" content="Mobile Auto Detailing" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
