import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './about.css'
import { FaGit, FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <div className='know'><h2><b>Who am I ??</b></h2></div>
        <br/>
        <div className='content'>
          <h3>Hi, I am <b>Soumyajit Ghosh</b> from Kolkata,West Bengal,India</h3>
          <p id='info1'>I am a B.Tech graduate from University Of Engineering And Management and I am a <b>Front-End Developer</b></p>
        </div>
        <br/>
        <div className='hobbies'>
          <h4>Apart from coding other activities that I like to do:
            <ul>
              <li><p>-Cricket</p></li>
              <li>-Model-Making</li>
              <li>-Playing Games</li>
            </ul>
          </h4>
        </div>
        <br/>
        <div className='langandframeworks'>
          <br/>
          <h4>Languages And Frameworks known by me:</h4>
          <br/>
          <div className='list'>
            <div className='lang-card'>
              <img src={'https://banner2.cleanpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbcb7d671.680718971548434364753.jpg'}></img>
              <img src={'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'} ></img>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433'} ></img>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'} ></img>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png'} ></img>
              
            </div>
            <br/>
            <div className='lang-card'>
            <img src={'https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png'} ></img>
              <img src={'https://www.opc-router.com/wp-content/uploads/2021/03/mongodb_thumbnail-200x269.png'} ></img>
              <img src={'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png'} ></img>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'}></img>
              <img src={'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png'}></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default About