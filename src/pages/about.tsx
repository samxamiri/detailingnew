import React from "react";
import Layout from "../components/ui/Layout";
import About from "../components/ui/About";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Sam&apos;s Mobile Detailing in Montreal</title>
        <meta
          name="description"
          content="Get in touch with Sam's Mobile Detailing in Montreal. Contact us for more information or to book your next car detailing service. We're here to help!"
        />
        <meta
          name="keywords"
          content="contact Sam's Mobile Detailing, car detailing Montreal, get in touch, Montreal car detailing services"
        />
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;
