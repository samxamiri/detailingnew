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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
