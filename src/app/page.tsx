import React from "react";
// import Packages from "../components/ui/Packages";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
// import Services from "../components/ui/Services";
import BeforeAfter from "../components/ui/BeforeAfter";
import ServiceArea from "../components/ui/ServiceArea";
import AboutUs from "../components/ui/AboutUs";
import Benefits from "../components/ui/Benefits";
import Workflow from "../components/ui/Workflow";
import Contact from "../components/ui/Contact";
import Layout from "../components/ui/Layout";

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
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutUs">
        <AboutUs />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="workflow">
        <Workflow />
      </section>
      <section id="gallery">
        <BeforeAfter imagePairs={imagePairs} />
      </section>
      <section id="serviceArea">
        <ServiceArea />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default LandingPage;
