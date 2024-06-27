import type { AppProps } from "next/app";
import Head from "next/head";
import "/src/app/globals.css"; // Ensure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sam&apos;s Mobile Detailing</title>
        <meta
          name="description"
          content="Sam's Mobile Detailing offers interior, exterior and complete detailing services in Montreal and surrounding areas. No need to deal with having to drop off your car at a shop, we come to you!"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
