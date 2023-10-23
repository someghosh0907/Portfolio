import React from 'react'
import "./hero2.css"
//import pro1 from './pro1.jpg'

const Hero2 = (props) => {
  return (
    <div className='hero-img'>
<br/>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Hero2