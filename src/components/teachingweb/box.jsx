import React from 'react'
import "./box.css"
import {useNavigate} from 'react-router-dom'

export default function Box(props) {
  let navigate=useNavigate()
  let resume=()=>{
    navigate("/teaching/resume")
  }
  return (
    <div className='teach-box'>
        <img src={props.Img} alt="" onClick={resume}/>
    </div>
  )
}
