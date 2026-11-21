import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import myImg from "../assets/myImg.jpg";
import "../styles/about.css";

export const About = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="about"
      style={{
        "--bglightabout": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--pfirstlight": light ? "black" : "rgb(24, 195, 225)",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>About Me</p>
      <div id="aboutcontent">
        <div id="myselfdesc" data-aos="zoom-in">
          <div id="mysitem">
            <p>
              Full Stack Developer with nearly 3 years of combined experience across healthcare applications, product engineering, and hands-on development projects. I build scalable web applications with React, Next.js, Node.js, Express, MongoDB, SQL, and Redux, and work with secure authentication, session management, and monorepo architecture. I also build AI-powered workflows and business intelligence solutions using OpenAI APIs, n8n, and SQL.
            </p>
          </div>
        </div>
        <div id="myimg">
          <img src={myImg} />
        </div>
      </div>
    </div>
  );
};


