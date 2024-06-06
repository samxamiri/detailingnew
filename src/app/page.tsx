// pages/index.js or components/LandingPage.js
import Packages from "../components/ui/Packages";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import Services from "../components/ui/Services";
import BeforeAfter from "../components/ui/BeforeAfter";

import Contact from "../components/ui/Contact";

const LandingPage = () => {
  return (
    // Wrapping the landing page with PackageProvider
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <BeforeAfter />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default LandingPage;
