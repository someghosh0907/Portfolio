import React from 'react'
import { FaFacebook, FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone } from 'react-icons/fa';
import './footercss.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-contain'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                    <span>Kolkata, West Bengal, India</span>
                </div>
                <br/>
                <div className='phone'>
                    <FaPhone size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                    <span>+91 8617226098</span>
                </div>
                <br/>
                <div className='email'>
                    <FaMailBulk size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                    <span>soumyajit.ghosh0907@gmail.com</span>
                </div>
                <br/>
            </div>
            <div className='right'>
                <h3>Connect With Me</h3>
                <div className='social'>
                    <FaFacebook onClick={event =>  window.location.href='https://www.facebook.com/soumyajit.ghosh.9066389'}size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                    <FaLinkedin onClick={event =>  window.location.href='www.linkedin.com/in/soumyajit-ghosh-2629a3207'}size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                    <FaInstagram onClick={event =>  window.location.href='https://www.instagram.com/_soumyajit___ghosh_/'}size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                    <FaGithub onClick={event =>  window.location.href='https://github.com/someghosh0907'}size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;