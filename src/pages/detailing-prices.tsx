import React from "react";
import Layout from "../components/ui/Layout";
import Packages from "../components/ui/Packages";
import Head from "next/head";

const Pricing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Affordable Car Detailing Packages in Montreal | Sam&apos;s Mobile
          Detailing
        </title>
        <meta
          name="description"
          content="Discover our affordable car detailing packages in Montreal. We offer the best prices for interior, exterior, and complete detailing services. Book now!"
        />
        <meta
          name="keywords"
          content="mobile car detailing near me, car detailing near me prices, best car detailing near me, affordable car detailing, Montreal car detailing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Sam's Mobile Detailing" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Affordable Car Detailing Packages in Montreal | Sam's Mobile Detailing"
        />
        <meta
          property="og:description"
          content="Discover our affordable car detailing packages in Montreal. We offer the best prices for interior, exterior, and complete detailing services. Book now!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.samsmobiledetailing.ca/pricing"
        />
        <meta
          property="og:image"
          content="https://www.samsmobiledetailing.ca/images/other/rinse.webp"
        />
        <meta property="og:image:alt" content="Car detailing packages" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="article:published_time"
          content="2024-01-11T11:35:00+07:00"
        />
        <meta
          property="article:modified_time"
          content="2024-01-11T11:35:00+07:00"
        />
      </Head>
      <Packages />
    </Layout>
  );
};

export default Pricing;
