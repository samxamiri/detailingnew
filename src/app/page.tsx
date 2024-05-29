// pages/index.js or components/LandingPage.js
import Packages from '../components/ui/Packages';
import Header from '../components/ui/Header';
import Hero from '../components/ui/Hero';
import Services from '../components/ui/Services';
import BeforeAfter from '../components/ui/BeforeAfter';
import Contact from '../components/ui/Contact';


const LandingPage = () => {
  return (
    <div key="1" className="min-h-[100dvh] flex flex-col">
      <Header />
      <Hero/>
      <Services />
    
      <BeforeAfter />
      <Packages />
      <Contact />
      
    </div>
  );
};

export default LandingPage;
