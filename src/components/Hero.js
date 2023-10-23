import React from 'react'
import { Link } from 'react-router-dom'
import "./herocss.css"
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from './anime-boy.jpg'

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className='hero'>
        <div className='mask'>
          <img className='hero-img' src={img1} alt='Heroimg' />
        </div>
        <div className='content'>
          <p>-Hi I am Soumyajit Ghosh, I'm a Software Engineer</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/about" className='btn-light'>About Me</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hero