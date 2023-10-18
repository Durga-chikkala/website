import React from 'react'
import "./intro.css";
import "../../App.css";
import Man from "../../img/boy.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Floatingdiv from '../Float/Floatingdiv';
import Crown from "../../img/crown.png";
import Heart from "../../img/heartemoji.png";
import {motion} from "framer-motion";

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I am</span>
                <span>Durga Chikkala</span>
                <span>Go Developer, Frontend Developer and ML Engineer</span>
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