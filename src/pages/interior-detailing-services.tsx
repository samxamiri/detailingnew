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
      </Head>
      <InteriorServices />
    </Layout>
  );
};

export default InteriorServicesPage;