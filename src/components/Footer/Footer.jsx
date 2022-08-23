import React from 'react'
import Wave from "C:/Users/DELL/Practice/practicee/src/img/wave.png";
import './Footer.css'
import {FaFacebook,  FaInstagram,FaGithub} from "react-icons/fa";
import {SiLeetcode,SiHackerrank} from 'react-icons/si';
import {IoLogoCodepen} from 'react-icons/io';
// import {FcLikePlaceholder} from 'react-icons/fc';
function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} className='background' alt="" />
        <div className="profile">
            <h1>My Coding Profile's</h1>
            <div className='round'>
                <a href="https://www.facebook.com/durga.chikkala.5/"><FaFacebook style={{color:"Blue"} } className="font"/></a>
                <a href="https://github.com/Durgachikkala-programmer"><FaGithub style={{color:"Black"}} className="font"/></a>
                <a href="https://www.instagram.com/world_of_durga_chikkala/"><FaInstagram style={{color:"#AA336A"}} className="font"/></a>
                <a href="https://leetcode.com/Durgachikkala-programmer/"><SiLeetcode style={{color:"maroon"}} className="font"/></a>
                <a href="https://www.hackerrank.com/chdurga2001"><SiHackerrank style={{color:"#38F00FF"}} className="font"/></a>
                <a href="https://codepen.io/durgachikkala-programmer"><IoLogoCodepen style={{color:"black"}} className="font"/></a>
                {/* <a href="#"><FaTwitter style={{color:"skyblue"}} className="font"/></a> */}
            </div>
       
        </div>
    </div>
  )
}

export default Footer