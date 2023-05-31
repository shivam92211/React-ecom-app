import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import React from 'react';
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";


const Product = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PARALLETTES" text="The best quality with best price" />
      <Work/>
      {/* <PricingCard/> */}
      <Footer/>
    </div>
  )
}

export default Product