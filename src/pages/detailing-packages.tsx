import React from "react";
import Layout from "../components/ui/Layout";
import Packages from "../components/ui/Packages";
import Head from "next/head";

const Pricing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Interior & Exterior Detailing Packages in Montreal | Sam&apos;s Mobile
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
      </Head>
      <Packages />
    </Layout>
  );
};

export default Pricing;
