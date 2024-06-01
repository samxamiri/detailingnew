// pages/index.js or components/LandingPage.js
import Packages from "../components/ui/Packages";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import Services from "../components/ui/Services";
import BeforeAfter from "../components/ui/BeforeAfter";
import Contact from "../components/ui/Contact";

const LandingPage = () => {
  return (
    <div key="1" className="min-h-[100dvh] flex flex-col">
      <Header />
      {/* Each section now includes an id that matches the href in your Header links */}
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
    </div>
  );
};

export default LandingPage;
