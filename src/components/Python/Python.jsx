import React from 'react'
import PythonImg from '../../img/pythonIntro.png'
import './Python.css'
import Learnings from './learnings.jsx'
import {Link} from "react-scroll"
import Money from '../../img/money.png'
import {useNavigate} from 'react-router-dom'
function Python() {
    let navigate=useNavigate()
    let form=()=>{
      navigate("/teaching/python/form")
    }

  return (
    <div>
        <div className='py-home'>
            <div className="py-left">
                <h1>Python For EveryBody</h1>
                <Link to="exploree" smooth={true} activeClass="activeClass" spy={true}>
                    <button className='button' >Explore more</button>
                </Link>
            </div>
            <div className="py-right"> 
                <img src={PythonImg} alt=""/>
            </div>
        </div>
        <div className='learning'>
            <h2>What you will learn?</h2>
            <div className="outcomes-grid" id="exploree">
                <Learnings text="Introduction to Programming"/>
                <Learnings text="Intro to Python"/>
                <Learnings text="comments,variables"/>
                <Learnings text="operators"/>
                <Learnings text="conditional and loops"/>
                <Learnings text="Datatypes(Number,string)"/>
                <Learnings text="Datatypes(List,Tuple)"/>
                <Learnings text="Programs practice"/>
                <Learnings text="Datatypes(dictionary,set)"/>
                <Learnings text="Programs Practice"/>
                <Learnings text="Functions"/>
                <Learnings text="Functions part-2"/>
                <Learnings text="Intro to OOPs"/>
                <Learnings text="Deepdive into OOps"/>
                <Learnings text="OOps part-3"/>
                <Learnings text="Files in Python"/>
                <Learnings text="Exceptional Handling in Python"/>
                <Learnings text="Introduction to Modules"/>
                <Learnings text="Project using Modules"/>
                <Learnings text="Final Talk and further suggestions"/>
            </div>
            <div className="price">
                <img src={Money} alt=""/>
                <p>This Course costs Rs.700 and I will promise each and every penny will be valid starting the course from October 15.</p>
            </div>
        </div>
        <div className='final'>
            <button className='button' onClick={form}>Enroll Now</button>
        </div>
    </div>
  )
}

export default Python