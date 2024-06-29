import React from "react";
import Layout from "../components/ui/Layout";
import ExteriorServices from "../components/ui/ExteriorServices";
import Head from "next/head";

const ExteriorServicesPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Exterior Car Detailing Services in Montreal | Sam's Mobile Detailing
        </title>
        <meta
          name="description"
          content="Get the best exterior car detailing services in Montreal. Our mobile car wash will leave your vehicle looking brand new. Book now!"
        />
        <meta
          name="keywords"
          content="mobile car wash near me, car cleaning near me, best car detailing near me, exterior car detailing, Montreal car wash"
        />
      </Head>
      <ExteriorServices />
    </Layout>
  );
};

export default ExteriorServicesPage;
