import React from "react";
import "./Navbar.css";
import {Link} from "react-scroll";
const Navbar=()=>{
    return (
        <div className="Nav"  id="Navbar">
            <div className="left">
                <h2>durgachikkala.tech</h2>
                
            </div>
            <div className="right">
                <ul>
                    <Link to="Navbar" smooth={true} activeClass="activeClass" spy={true}>
                        <li >Home</li>
                    </Link>
                    <Link to="education" smooth={true} activeClass="activeClass" spy={true}>
                        <li>Education</li>
                    </Link>
                    <Link to="projects" smooth={true} activeClass="activeClass" spy={true}>
                        <li>Courses</li>
                    </Link>
                    <Link to="certificate" smooth={true} activeClass="activeClass" spy={true}>
                        <li>Certification</li>
                    </Link>
                    <Link to="Articles" smooth={true} activeClass="activeClass" spy={true}>
                        <li>Articles</li>
                    </Link>
                </ul>
                <Link to="contact" smooth={true} activeClass="activeClass" spy={true}><button className="button">Know me</button></Link>
            </div>
            
        </div>
    )
}
export default Navbar;