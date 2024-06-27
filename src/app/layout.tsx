import React from "react";
import { Archivo } from "next/font/google";
import Head from "next/head";
import "../app/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <Head>
        <title>Sam&apos;s Mobile Detailing</title>
        <meta
          name="description"
          content="Sam's Mobile Detailing offers interior, exterior and complete detailing services in Montreal and surrounding areas. No need to deal with having to drop off your car at a shop, we come to you!"
        />
      </Head>
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
