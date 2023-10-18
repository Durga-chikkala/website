import React from 'react'
import './Techbox.css'
function Techbox(props) {
  return (
    <div>
        <div className='rectangle-box  b-center'>
          <img src={props.img} alt=""/>
          <button className='button' onClick={props.event}>Enroll Now</button>
        </div>
    </div>
  )
}

export default Techbox