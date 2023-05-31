import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Form from "../components/Form";
import React from 'react'
import HeroImg2 from "../components/HeroImg2";

const Contect = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="If you are in need of high-quality paralleletes, 
      look no further than MiniFit. Contact us today to discuss
       your requirements and let our experts assist you in finding the perfect parallel motion
       solution for your application." />
      <Form />
      <Footer/>
    </div>
  )
}

export default Contect