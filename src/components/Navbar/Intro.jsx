import React from 'react'
import "./intro.css";
import "C:/Users/DELL/Practice/practicee/src/App.css";
import Man from "C:/Users/DELL/Practice/practicee/src/img/boy.png";
import Vector1 from "C:/Users/DELL/Practice/practicee/src/img/Vector1.png";
import Vector2 from "C:/Users/DELL/Practice/practicee/src/img/Vector2.png";
import Floatingdiv from '../Float/Floatingdiv';
import Crown from "C:/Users/DELL/Practice/practicee/src/img/crown.png";
import Heart from "C:/Users/DELL/Practice/practicee/src/img/heartemoji.png";
import {motion} from "framer-motion";

function Intro() {
    // const transition={duration: 2, type: "spring" };
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am</span>
                <span>Durga Chikkala</span>
                <span>Frontend Developer and ML Engineer</span>
            </div>
            <motion.button initial={{left:"-26%"}} whileInView={{left:"-12%"}} className='button i-button'>Hire me</motion.button>
        </div>
       <div className="i-right">
            <img src={Vector1} alt=''></img>
            <img src={Vector2} alt=''></img>
            <img src={Man} alt=''></img>
            <div className="floatingdivv">
                <Floatingdiv img={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top:"-16%",left:"-10%"}}>
                <motion.img initial={{left:"-36%"}} whileInView={{left:"-4%"}} 
                 src={Heart} className="image" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Intro;