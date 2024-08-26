import React from "react";
import Layout from "../components/ui/Layout";
import About from "../components/ui/About";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>FAQs | Sam&apos;s Mobile Detailing in Montreal</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Sam's Mobile Detailing in Montreal. Learn more about our services, pricing, and booking process."
        />
        <meta
          name="keywords"
          content="FAQs, Sam's Mobile Detailing, car detailing Montreal, frequently asked questions, Montreal car detailing services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;
