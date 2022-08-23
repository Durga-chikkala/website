import {React,useState} from 'react'
import './Mobilenav.css'
import { Link } from 'react-scroll';

import {GiHamburgerMenu} from 'react-icons/gi'
function MobileNav() {
    var [state,setState]=useState(false);
    function show()
    {
        setState(!state)
    }
  return (
    <div className='mobilenav'>
        <GiHamburgerMenu onClick={show} style={{fontSize:"26px"}} className="hamberger"/>
        <div className={state? 'mobilebox active':"mobilebox"}>
            

        <ul>
                    <Link to="Navbar" smooth={true} activeClass="activeClass" spy={true}>
                        <li >Home
                            >
                        </li>
                    </Link>
                    <Link to="education" smooth={true} activeClass="activeClass" spy={true}>
                        <li>Education</li>
                    </Link>
                    <Link to="projects" smooth={true} activeClass="activeClass" spy={true}>
                        <li>Projects</li>
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

export default MobileNav