import React from 'react'
import './Cards.css';
function Cards(props) {
  return (
    <div className='card'>
        
        <img src={props.img} alt=""/>
        <span>{props.name}</span>
        <span>{props.Batch}</span>
        <span>{props.score}</span>
        <span>{props.place}</span>
        
    </div>
  )
}

export default Cards