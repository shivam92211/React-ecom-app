import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import React from 'react'
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About Us" text="We are wooden parallettes manufacturing company in India" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About