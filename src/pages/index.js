import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleMobileMenu} />
      <Navbar isOpen={isOpen} toggle={toggleMobileMenu} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
