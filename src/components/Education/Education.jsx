import React from 'react'
import './Education.css'
import "C:/Users/DELL/Practice/practicee/src/App.css";
import Cards from 'C:/Users/DELL/Practice/practicee/src/components/Cards/Cards.jsx';
import School from "C:/Users/DELL/Practice/practicee/src/img/school.png";
import College from "C:/Users/DELL/Practice/practicee/src/img/college.png";
import Inter from "C:/Users/DELL/Practice/practicee/src/img/inter.png";
import {motion} from "framer-motion";
import Resume from "C:/Users/DELL/Practice/practicee/src/img/DurgaChikkala Web dev Resume .pdf";

function Education() {
    const transition={duration:1,type:"spring"}
  return (
    <div className='education' id="education">
        <div className="e-left">
            <span>Hey! This is about</span>
            <span>My Education</span>
            <a href={Resume} download><button className='button e-button'>Download Resume</button></a>
            <div className='blur'></div>
        </div>
        <div className='e-right desktop'>
            <motion.div initial={{left:"60rem"}}  whileInView={{left:"44rem"}} transition={transition}  style={{left:"48rem",top:"2rem"}}>
                <Cards  img={School} name="Sri Chaitanya School" Batch="2017(Batch)" score="10CGPA" place="Tuni" />
            </motion.div>
            <motion.div initial={{left:"25rem"}}  whileInView={{left:"24rem"}} style={{left:"25rem",top:"18rem"}}>
                <Cards  img={Inter} name="Sri Chaitanya College" Batch="2017-2019" score="9.8CGPA" place="Vishakapatnam" />
            </motion.div>
            <motion.div initial={{left:"60rem"}}  whileInView={{left:"44rem"}}  style={{left:"45rem",top:"23rem"}}>
                <Cards  img={College} name="Aditya instituations" Batch="2019-2023" score="7.9CGPA" place="Kakinada" />
            </motion.div>
        </div>
        <div className='e-mright mobile'>
            <div className='size'>
                <Cards  img={School} name="Sri Chaitanya School" Batch="2017(Batch)" score="10CGPA" place="Tuni" />
            </div>
            <div  className='size sides'>
                <Cards  img={Inter} name="Sri Chaitanya College" Batch="2017-2019" score="9.8CGPA" place="Vishakapatnam" />
            </div>
            <div  className='size'>
                <Cards  img={College} name="Aditya instituations" Batch="2019-2023" score="7.9CGPA" place="Kakinada" />
            </div>
        </div>
    </div>
  )
}

export default Education