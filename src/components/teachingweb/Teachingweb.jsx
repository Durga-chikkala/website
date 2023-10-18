import React from 'react'
import "./Teachingweb.css"
import "./box.css"
import Box from './box'
import lets from "../../img/lets.png"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../../img/Profile.png'
import Techbox from './Techbox'
import pythonImg from '../../img/pythoncourse.png'
import javaImg from '../../img/javacourse.png'
import {useNavigate} from 'react-router-dom'
import Digital from '../../img/digital.png'

// import ResumeImg  from "../../img/resume.png"
// import LinkedinImg from '../../img/linkedinImg.jpg'

function Teachingweb() {
    let navigate=useNavigate()
    let python=()=>{
      navigate("/teaching/python")
    }
    let java=()=>{
      navigate("/teaching/java")
    }
    
   
  return (
    <div>
        <div className="teach-home center"> 
        <div className="head">
          <span>lets Focus</span>
          <p>Come lets explore</p>
        </div>
            <img src={lets} alt=""/>     
        </div>
        <div className='teach-motivate'>
          <h1>Our <span className="color-change">Motto</span></h1>
          <p>Wanna build your career we don't show the path or we don't tell you the success path but we help you to build your path and grow in your own way come join your hands with us and lets unite and lets crack it</p>
        </div>
        <div className='non-teach-courses'>
          <h1>Profile <span className="color-change">Building</span></h1>
          <div className='teach-slide width'>
            <div className='te-left'>
               <img src={Digital} alt=""/>
            </div>
            <div className='te-right'>
              <p>In the Growing Technological World Having a good resume and digital profile is must and should.</p>
            </div>
          </div>
          <div className='teach-slide'>
            <Box Img="https://www.theladders.com/wp-content/uploads/resume-important-800x450.png" index="1" />
            <Box Img="https://kinsta.com/wp-content/uploads/2018/06/linkedin-marketing-2.png" index="2" />
            <Box Img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH&size=1200:675" index="3"/>
          </div>
        </div>
        <div className="tech-courses">
          <h1>Tech <span className="color-change">Courses</span></h1>
          <div className='teach-slide width'>
            <div className='t-left'>
              <p>In the Growing Technological World we don't need to travel for hours to learn new things and explore new things you just sit in your house and explore different new technologies.</p>
            </div>
            <div className='t-right'>
              <img src={Profile} alt=""/>
            </div>
          </div>
        </div>
        <div className='course-list' >
          <Techbox img={pythonImg} onClick={python}/>
          <Techbox img={javaImg} onClick={java}/>
        </div>
        <div className='reviews'>
          <h1>Our <span className="color-change">Students</span> Review</h1>
          <Carousel>
            <Carousel.Item className="teach-review">
              <Carousel.Caption>
                <h3>Hari Priya</h3>
                <p>I have understood clearly all the concepts explained.your teaching is superb nothing is hard for me.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="teach-review">
              <Carousel.Caption>
                <h3>Devika Rani</h3>
                <p>Your classes are very friendly.your classes are enough to one who don't have even basic  knowledge on programming.I can say that your classes  helped me alot..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="teach-review">
              <Carousel.Caption>
                <h3>Balanagu</h3>
                <p>
                I am feeling better after taking this boot camp. i learnt some new things. 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    </div>
  )
}

export default Teachingweb