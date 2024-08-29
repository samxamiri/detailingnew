import React from "react";
import Hero from "../components/ui/Hero";
import ServiceArea from "../components/ui/ServiceArea";
import Benefits from "../components/ui/Benefits";
import Contact from "../components/ui/Contact";
import Layout from "../components/ui/Layout";
import DetailingPrices from "../components/ui/DetailingPrices";
import Services from "../components/ui/services";
import Head from "next/head";
import OurServices from "@/components/ui/ourServices";
import Testimonials from "@/components/ui/testimonials";

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
    <Layout>
      <Head>
        <title>
          {" "}
          Mobile Detailing Services Montreal | Sam&apos;s Mobile Detailing
        </title>
        <meta
          name="description"
          content="Experience the convenience of mobile detailing in Montreal. Our experts bring top-quality car cleaning services directly to your location, ensuring your vehicle looks its best without the hassle."
        />
      </Head>
      <section id="hero">
        <Hero />
      </section>

      {/* <section id="detailingPrices">
        <DetailingPrices />
      </section> */}
      <section id="ourServices">
        <OurServices />
      </section>
      <section id="serviceArea">
        <ServiceArea />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="benefits">
        <Benefits />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default LandingPage;
