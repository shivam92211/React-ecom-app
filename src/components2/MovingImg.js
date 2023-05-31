import "./MovingImgStyles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import img15 from "../assets/img15.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";



const MovingImg = () => {
    return (
        
        <div className="slide-container">
            <div className="M-title"><h2>Customer Review</h2></div>
        <div className="img-content"> 

        <Swiper
            className="swip"
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
    navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
    >
 
 
            

                <SwiperSlide>
                        <div className="customer-review">
                            <img className="slide-img" src={img15} alt="parallettes" />
                            <p className="review">
                            I felt the parallettes is strong.
                            Grip and the diameter is perfectly fine.
                            Parallets are decently holding to the floor, mat and plastic grass.
                            </p>
                             </div>
                </SwiperSlide>
                

                    <SwiperSlide>
                    <div className="customer-review">
                            <img className="slide-img" src={img6} alt="parallettes" />
                            <p className="review"></p>
                        </div>
                </SwiperSlide>  

                    <SwiperSlide>
                    <div className="customer-review">
                            <img className="slide-img" src={img7} alt="parallettes" />
                            <p className="review"></p>
                        </div>                    </SwiperSlide>

                <SwiperSlide>
                <div className="customer-review">
                            <img className="slide-img" src={img8} alt="parallettes" />
                            <p className="review"></p>
                        </div>                </SwiperSlide>

       
            </Swiper>  
            </div>
            </div>

        
        
  )
}

export default MovingImg