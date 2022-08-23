import React from 'react'
import "./Articles.css";

function Articles(props) {
  return (
    <div className='articlesss'>
         <div className="art">
            <div className='image'>
                <img src={props.img} alt="" width="200"/>
            </div>
            <div className='text'>
                <h2>{props.name}</h2>
                <p>{props.date}</p>
                <a href={props.link}><button className='button art-button'>Redirect</button></a>
            </div>
        </div>
    </div>
  )
}

export default Articles