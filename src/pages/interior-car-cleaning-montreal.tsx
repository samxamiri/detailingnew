import React from "react";
import Layout from "../components/ui/Layout";
import InteriorServices from "../components/ui/InteriorServices";
import Head from "next/head";

const InteriorServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Mobile Interior Car Detailing Services in Montreal | Sam&apos;s Mobile
          Detailing
        </title>
        <meta
          name="description"
          content="Experience top-notch interior car detailing services in Montreal. Our expert team will leave your car's interior spotless and fresh. Book now!"
        />
        <meta
          name="keywords"
          content="interior car detailing near me, car interior cleaning near me, interior detailing near me, Montreal car detailing, interior car wash"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Sam's Mobile Detailing" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Interior Car Detailing Services in Montreal | Sam's Mobile Detailing"
        />
        <meta
          property="og:description"
          content="Experience top-notch interior car detailing services in Montreal. Our expert team will leave your car's interior spotless and fresh. Book now!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.samsmobiledetailing.ca/interiorDetailingServices"
        />
        <meta
          property="og:image"
          content="https://www.samsmobiledetailing.ca/images/other/weathermat.webp"
        />
        <meta property="og:image:alt" content="Interior car detailing" />
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
      <InteriorServices />
    </Layout>
  );
};

export default InteriorServicesPage;
