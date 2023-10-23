import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes,FaHome,FaProjectDiagram,FaMandalorian} from 'react-icons/fa';
import "../App.css"
import "./navbar.css"
import "./anime-boy.jpg"

const Navbar = () => {
    const [click,setClick]=useState(true)
    const handleClick=()=>setClick(!click)
    return (
        <div className='header'>
            <Link to="/">
                <h1>#S.G</h1>
            </Link>
            <ul className={click ?'nav-menu active':'nav-menu'}>
                <li>
                    <Link to="/"><FaHome size={20} style={{color:"white" ,marginRight:"0.5rem"}}></FaHome><span>Home</span></Link>
                </li>
                <li>
                    <Link to="/project"><FaProjectDiagram size={20} style={{color:"white" ,marginRight:"0.5rem"}}></FaProjectDiagram>Project</Link>
                </li>
                <li>
                    <Link to="/about"><FaMandalorian size={20} style={{color:"white" ,marginRight:"0.5rem"}}></FaMandalorian>About Me</Link>
                </li>
                
            </ul>
            <div className='scrollicon' onClick={handleClick}>
            </div> 
        </div>
        
    )
}

export default Navbar;