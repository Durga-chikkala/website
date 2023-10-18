import React from 'react'
import "./skills.css"
import {Virtual} from 'swiper';
import {MdDoubleArrow} from 'react-icons/md';
import {Swiper,SwiperSlide} from "swiper/react";
import CssImg from "../../img/css.png"
import HtmlImg from "../../img/html.png"
import JsImg from "../../img/jss.png"
import GoImg from "../../img/golang.png"
import ApiImg from "../../img/api.png"
import MysqlImg from "../../img/mysql (1).png"
import PyImg from "../../img/pyy.png"
import GitImg from "../../img/github1.png"
import ReactImg from '../../img/reactt.png';
import JavaImg from '../../img/java.png';
import DataImg from '../../img/da.png';
import 'swiper/css/virtual';
export default function skills() {
  var list=[GoImg,ReactImg,PyImg,ApiImg,MysqlImg,GitImg,JavaImg,HtmlImg,CssImg,JsImg,DataImg]
  var names=["Go","React","Python","API Development","MYSQL","Git","Java","Html","Css","Javascript","Data Analysis"]
  var data =list.map((x,index)=>{
    return(
      <SwiperSlide key={x} virtualIndex={index}>
        <div className='skill-box'>
          <img src={x} alt="" className='skills-img'/>
          <h1 style={{zIndex:"10",color:"#242D49"}}>{names[index]}</h1>
        </div>
      </SwiperSlide>
    )
  })
  return (
    <div className='skills-main'>
        <h1 className='skills-h1'>Wanna Know about My Skills </h1>
        <div className='arrow'>
            <MdDoubleArrow style={{fontSize:"36px"}}/>
            <MdDoubleArrow style={{fontSize:"36px"}}/>
        </div>
        <div className='skills-list'>
          <Swiper modules={[Virtual]} className='skill-Swipe' spaceBetween={10} slidesPerView={1} grabCursor={true} virtual>
            {data}
          </Swiper>
        </div>
       
    </div>
  )
}
