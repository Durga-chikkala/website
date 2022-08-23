import React from 'react'
import "./Certificate.css";
import {Swiper,SwiperSlide} from "swiper/react";
import "C:/Users/DELL/Practice/practicee/src/App.css";
// import Resume from "C:/Users/DELL/Practice/practicee/src/img/DurgaChikkala Web dev Resume .pdf";
import "swiper/css";
import IBM from "C:/Users/DELL/Practice/practicee/src/img/ibm.PNG";
import Problem from "C:/Users/DELL/Practice/practicee/src/img/problem.png";
import Python from "C:/Users/DELL/Practice/practicee/src/img/Python.png";
import Sololearn from "C:/Users/DELL/Practice/practicee/src/img/sololearn.png";
import Codemind from "C:/Users/DELL/Practice/practicee/src/img/codemind.png";
import {MdDoubleArrow} from 'react-icons/md';
function Certificate() {
  return (
    <div className='certificate' id="certificate">
        <div className='Header'>
            <span>Wanna know about</span>
            <span>My Certificates</span>
        </div>
        <div className='arrow'>
            <MdDoubleArrow style={{fontSize:"36px"}}/>
            <MdDoubleArrow style={{fontSize:"36px"}}/>
        </div>
        <div className='blur'></div>
        <div className='certificates desktop'>
        <Swiper className='Swipe' spaceBetween={30} slidesPerView={3} grabCursor={true}>
            <SwiperSlide>
                <img  className="img" src={IBM} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={Problem} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={Python} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img"  src={Sololearn} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={Codemind} alt=""></img>
            </SwiperSlide>
        </Swiper>
        </div> 
        <div className='certificates mobile'>
        <Swiper className='Swipe' spaceBetween={30} slidesPerView={1} grabCursor={true}>
            <SwiperSlide>
                <img  className="img" src={IBM} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={Problem} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={Python} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img"  src={Sololearn} alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img" src={Codemind} alt=""></img>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Certificate