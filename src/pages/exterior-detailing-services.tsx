import React from "react";
import Layout from "../components/ui/Layout";
import ExteriorServices from "../components/ui/ExteriorServices";
import Head from "next/head";

const ExteriorServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Mobile Exterior Car Detailing Services in Montreal | Sam&apos;s Mobile
          Detailing
        </title>
        <meta
          name="description"
          content="Get the best exterior car detailing services in Montreal. Our mobile car wash will leave your vehicle looking brand new. Book now!"
        />
        <meta
          name="keywords"
          content="mobile car wash near me, car cleaning near me, best car detailing near me, exterior car detailing, Montreal car wash"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Sam's Mobile Detailing" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Exterior Car Detailing Services in Montreal | Sam's Mobile Detailing"
        />
        <meta
          property="og:description"
          content="Get the best exterior car detailing services in Montreal. Our mobile car wash will leave your vehicle looking brand new. Book now!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.samsmobiledetailing.ca/exteriorDetailingServices"
        />
        <meta
          property="og:image"
          content="https://www.samsmobiledetailing.ca/images/other/decontamination.webp"
        />
        <meta property="og:image:alt" content="Exterior car detailing" />
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
      <ExteriorServices />
    </Layout>
  );
};

export default ExteriorServicesPage;
