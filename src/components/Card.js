import React from "react";
import { FaGithub } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./card.css";

const Card = (img,title,text) => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div className="project-card">
          <img src={img} alt="img" />
        </div>
        <div className="project-card2">
          <h2 className="project-title">{title}</h2>
          <br />
          <div className="pro-details">
            <p>{text} </p>
            <br />
            <div className="pro-btn">
            </div>
            <FaGithub onClick={(event) =>
                  (window.location.href ="https:github.com/someghosh0907/NewsTime-news-application")
                }
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
            />
              <span>Github Link</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
