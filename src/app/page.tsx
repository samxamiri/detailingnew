import React from "react";
import Head from "next/head"; // Import the Head component
// import Packages from "../components/ui/Packages";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
// import Services from "../components/ui/Services";
// import BeforeAfter from "../components/ui/BeforeAfter";
import ServiceArea from "../components/ui/ServiceArea";
import Benefits from "../components/ui/Benefits";
// import Workflow from "../components/ui/Workflow";
import Contact from "../components/ui/Contact";
import Layout from "../components/ui/Layout";
import DetailingPrices from "../components/ui/DetailingPrices";
import Services from "../components/ui/services";
import Footer from "@/components/ui/Footer";

const imagePairs = [
  {
    before: "/images/before/enginebefore.jpg",
    after: "/images/after/engineafter.jpg",
  },
  {
    before: "/images/before/leatherbefore.jpg",
    after: "/images/after/leatherafter.jpg",
  },
  {
    before: "/images/before/backbefore.jpg",
    after: "/images/after/backafter.jpg",
  },
  {
    before: "/images/before/cornerbefore.jpg",
    after: "/images/after/cornerafter.jpg",
  },
  {
    before: "/images/before/tirebefore.jpg",
    after: "/images/after/tireafter.jpg",
  },
  {
    before: "/images/before/tirebefore.jpg",
    after: "/images/after/tireafter.jpg",
  },
  // Add more image pairs as needed
];

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Sam's Mobile Detailing</title>
        <meta
          name="description"
          content="Sam's Mobile Detailing offers interior, exterior and complete detailing services in Montreal and surrounding areas. No need to deal with having to drop off your car at a shop, we come to you!"
        />
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="detailingPrices">
        <DetailingPrices />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      {/* <section id="workflow">
        <Workflow />
      </section> */}
      {/* <section id="gallery">
        <BeforeAfter imagePairs={imagePairs} />
      </section> */}
      <section id="serviceArea">
        <ServiceArea />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
