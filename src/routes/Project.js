import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Card from "../components/Card";
import img01 from "../components/Weather API.png";
import "./project.css";
import "../components/card.css";
import { FaGithub } from "react-icons/fa";

const Project = () => {

  return (
    <div>
      <Navbar />
      <br />
      <Hero2 heading="Welcome to Projects" text="See my Work!!" />
      <br />
      <div className="cards">
        <div className="work-container">
          <div className="project-container">
            <div className="project-card">
              <img src={img01} alt="img" />
            </div>
            <div className="project-card2">
              <h1 className="project-title">NewsTimes-News-Application</h1>
              <br />
              <div className="pro-details">
                <p>
                  An application created using ReactJs by getting data from a
                  public API known as NEWSApi From this API we get various news
                  articles based on country and category of the news .Here in
                  this application I have also introduced React-Router-Dom by
                  which I can route to various categories of news and have used
                  bootstrap for style"
                </p>
                <br />
                <div className="pro-btn"></div>
                <FaGithub
                  onClick={(event) =>
                  (window.location.href =
                    "https://github.com/someghosh0907/newsapp001")
                  }
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                <span>Github Link</span>
              </div>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="project-container">
            <div className="project-card">
              <img src={img01} alt="img" />
            </div>
            <div className="project-card2">
              <h1 className="project-title">Blog-Application</h1>
              <br />
              <div className="pro-details">
                <p>
                  A Full-Stack Blog application created with ReactJs ,NodeJS ,
                  Express ,MongoDB and Material UI. This application let's a
                  user to login/register to the application and create, update
                  and delete any blog post in the application."
                </p>
                <br />
                <div className="pro-btn"></div>
                <FaGithub
                  onClick={(event) =>
                  (window.location.href =
                    "https:github.com/someghosh0907/Blog-App")
                  }
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                <span>Github Link</span>
              </div>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="project-container">
            <div className="project-card">
              <img src={img01} alt="img" />
            </div>
            <div className="project-card2">
              <h1 className="project-title">Weather Application</h1>
              <br />
              <div className="pro-details">
                <p>An application created using ReactJs with OpenWeather public API implemented to fetch various meterological information for a certain location. </p>
                <br />
                <div className="pro-btn"></div>
                <FaGithub
                  onClick={(event) =>
                  (window.location.href =
                    "https://github.com/someghosh0907/weather-app")
                  }
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                <span>Github Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
