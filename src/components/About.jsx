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
              A motivated and innovative aspiring Full Stack Web Developer with
              hands-on experience in building websites with MERN stack and
              various web technologies. Having 1200+ hours of coding using HTML,
              CSS, JavaScript, React, Chakra-UI and 100+ hours of soft skill
              training. Curious to learn about new emerging web technologies.
              Looking to start a career as a web developer with a reputed firm
              driven by technology.
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
