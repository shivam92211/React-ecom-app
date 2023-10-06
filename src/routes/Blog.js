import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import BlogCont from '../components2/BlogCont';
import img5 from "../assets/img5.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";



const Blog = () => {
  return (
      <div>
        <Navbar />
      <HeroImg2 heading="Our Blogs" text="Read the latest blogs on parallettes." />

      <BlogCont
        title="Parallettes at wholesale price in India"
        author="Abhishek Mestry"
        date="June 9, 2023"

        

        
        content1="As we are parallettes manufacturing company our aim is to make high
         quality Parallettes for our customer at reasonable price and deliver directly
          to your door step.We make 3 range of parallettes and they are Medium size,
           Jumbo size, Pro Parallettes"

        content2="As we see in market the price of parallettes are very costly more than 
        3k rupees. Because brands make from third party people, they charge high to them 
        and brands charges high to us. But we brought a solution for it , at minifit.co started 
        manufacturing Parallettes and it's our own manufacturing unit . So the prices of 
        manufacturing boils down to very low and the Market price for our Parallettes becomes
         very low."

        content3="The material used in parallettes making is Pine wood , teak wood , beech 
        wood, ash wood. In minifit.co we use pure premium pine wood which is strong and 
        flexible. Due to which our Parallettes quality is best in market at best price"


        imageUrl={img17}
      
      />

      <BlogCont
        title="Low price wooden Parallettes in India"
        author="Abhishek Mestry"
        date="June 3, 2023"

        

       
        content1="Parallettes have wide range of application in Calisthenics and 
        bodyweight training right from pushup to advance skills like planche , Maltese etc.
         To perform all these elements we need huge ammount of strong base  which Parallettes
          gives us . So Parallettes should made up of strong Materials. Where WOOD is one of
           them. Wood have tendency to bear weight more than 200 kg depending upon its 
           manufacturing and design."

        content2="Our aim is to understand our customer needs and deliver what they want ,
         so we made this range for our customer . As calisthenics is vast and day to day 
         changing, Parallettes requirement is also ranging. Beginners needs and advance
          athlete needs are changing day year day we made medium size parallettes for beginners 
          and jumbo, pro Parallettes for advance athlete"

        content3="Our Parallettes cost is at very reasonable price in whole Indian market 
        of calisthenics. You can say we sell at wholesale price . Yes it is .  For our customer
         convenience and satisfaction we deliver it for free at your doorstep."


        imageUrl={img16}
      
      />
      
      <BlogCont
        title="Unleashing Strength and Stability: The Importance of Parallettes in Your Fitness Routine"
        author="Shivam"
        date="May 29, 2023"

        subhead1="Introduction:"
        content1="Parallettes, a simple yet powerful piece of exercise equipment, have gained popularity in recent years for their ability to enhance strength, stability, and overall body control. Whether you're a beginner or an advanced fitness enthusiast, incorporating parallettes into your workout routine can unlock a myriad of benefits. In this blog, we will explore the importance of parallettes and how they can revolutionize your fitness journey"

        subhead2="Building Functional Upper Body Strength:"
        content2="Parallettes are designed to target various muscle groups, particularly in the upper body. By utilizing these parallel bars, you engage your shoulders, chest, arms, and core, ultimately building functional strength. Exercises like push-ups, handstands, and L-sits performed on parallettes not only enhance muscle development but also improve coordination and balance"

        subhead3="Developing Core Stability"
        content3="A strong and stable core forms the foundation of overall fitness and athletic performance. Parallettes provide an excellent tool for strengthening the core muscles, including the abs, obliques, and lower back. Movements like the tuck planche and V-sit require significant core engagement, promoting a stable midsection and improving posture"

        subhead4="Boosting Flexibility and Mobility:"
        content4="Flexibility and mobility are often overlooked aspects of fitness, but they play a vital role in overall athleticism and injury prevention. Parallettes allow for a wide range of dynamic movements that promote joint mobility and flexibility. Incorporating exercises like deep push-ups and pike stretches into your parallettes routine can enhance your range of motion and overall flexibility."

        subhead5="Conclusion:"
        content5="The incorporation of parallettes into your fitness routine can bring a multitude of benefits, ranging from increased strength and stability to enhanced body control and flexibility. Whether you're an avid fitness enthusiast, a gymnastics enthusiast, or someone looking to diversify their training, parallettes offer a versatile and effective means to achieve your fitness goals. Embrace the challenge, unlock your potential, and witness the transformative power of parallettes in your journey towards a stronger, fitter, and more balanced body"

        imageUrl={img5}
      />

      
      
      

        <Footer/>
    </div>
  )
}

export default Blog;
