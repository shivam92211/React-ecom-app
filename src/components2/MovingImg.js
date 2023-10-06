import "./MovingImgStyles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import img15 from "../assets/img15.jpg";
import chandan from "../assets/chandan.jpg";
import anshu from "../assets/anshu.jpg";
import yassin from "../assets/yassin.jpg";
import jagdish from "../assets/jagdish.jpg";
import haseeb from "../assets/haseeb.jpg";



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
                            <h4>Haseeb (Kerala)</h4>
                            <img className="slide-img" src={haseeb} alt="parallettes" />
                            <p className="review">
                                Budget friendly Parallettes with best quality. Easy to carry and
                                best for training
                            </p>
                             </div>
                </SwiperSlide>


                <SwiperSlide>
                        <div className="customer-review">
                            <h4>Jagdish (Mumbai)</h4>
                            <img className="slide-img" src={jagdish} alt="parallettes" />
                            <p className="review">
                                Minifit paralletes are very light and easy to carry.
                                They don't feel like a load to carry around like some
                                other heavy ones. They also provide very firm grip and
                                very sturdy to the ground.
                            </p>
                             </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="customer-review">
                            <h4>Yassin (Kerala)</h4>
                            <img className="slide-img" src={yassin} alt="parallettes" />
                            <p className="review">
                                Hi, I had used your parallets .Its grip , stability
                                overall quality is good. best for the budget👍🏻😊

                            </p>
                             </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="customer-review">
                            <h4>Anshu Jha (Mumbail)</h4>
                            <img className="slide-img" src={anshu} alt="parallettes" />
                            <p className="review">The parallettes are very good. The grip is
                                perfect for any exercise. Also it is stable for handstand
                                unlike other parallettes. Overall value for money</p>
                        </div>
                    </SwiperSlide>
                    
                <SwiperSlide>
                        <div className="customer-review">
                            <h4>Chandan Chaurasia (Mumbail)</h4>
                            <img className="slide-img" src={chandan} alt="parallettes" />
                            <p className="review">Parallettes Bhai bhoth aacha laga uspe skills
                                bhoth easily hota hai and uska greep bhoth mast hai and bhot
                                stable hai balance karna easy hai I love this product</p>
                        </div>
                </SwiperSlide>  
 
 
            

                <SwiperSlide>
                        <div className="customer-review">
                            <h4>Musavir (Kerala)</h4>
                            <img className="slide-img" src={img15} alt="parallettes" />
                            <p className="review">
                            I felt the parallettes is strong.
                            Grip and the diameter is perfectly fine.
                                Parallets are decently holding to the floor,
                                mat and plastic grass.
                            </p>
                             </div>
                </SwiperSlide>

        
       
            </Swiper>  
            </div>
            </div>

        
        
  )
}

export default MovingImg