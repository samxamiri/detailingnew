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
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Sam's Mobile Detailing" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Contact Us | Sam's Mobile Detailing in Montreal"
        />
        <meta
          property="og:description"
          content="Get in touch with Sam's Mobile Detailing in Montreal. Contact us for more information or to book your next car detailing service. We're here to help!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.samsmobiledetailing.ca/about"
        />
        <meta
          property="og:image"
          content="https://www.samsmobiledetailing.ca/images/other/foam.png"
        />
        <meta
          property="og:image:alt"
          content="Contact Sam's Mobile Detailing"
        />
        <meta property="og:image:type" content="image/jpeg" />
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
      <About />
    </Layout>
  );
};

export default AboutPage;
