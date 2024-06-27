import React from "react";
import Hero from "../components/ui/Hero";
import ServiceArea from "../components/ui/ServiceArea";
import Benefits from "../components/ui/Benefits";
import Contact from "../components/ui/Contact";
import Layout from "../components/ui/Layout";
import DetailingPrices from "../components/ui/DetailingPrices";
import Services from "../components/ui/services";

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
      <section id="serviceArea">
        <ServiceArea />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default LandingPage;
