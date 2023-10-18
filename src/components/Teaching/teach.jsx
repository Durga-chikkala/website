import './teach.css'
import Teacher from "../../img/tb.png"
import React from 'react'
import { useNavigate} from "react-router-dom";
// import Teachingweb from '../teachingweb/Teachingweb';

function Teach() {
  let navigate=useNavigate()
  let nav=()=>{
    navigate("/teaching")
  }
  return (
    <div className='teach'>
       <div className='c-left'>
            <span>Welcome to world</span>
            <span>of Easy Learning</span>
            <div className="wrapper" onClick={nav}>
                  <input type="checkbox"/>
                 <label><i class='icon-off'></i>C</label>
            </div>
        </div>
        <img src={Teacher} alt=""/>
    </div>
   
  )
}
export default Teach;

