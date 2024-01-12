import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from "react-icons/bi";
import "../styles/home.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import TagCloud from "TagCloud";

const myTags = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "TypeScript",
  "GIT",
  "MongoDB",
  "Express",
  "NodeJs",
  "Mongoose",
  "ChakraUI",
  "Netlify",
  "Cyclic",
  "Render",
];

export const Home = () => {
  const { light } = useContext(ThemeContext);

  useEffect(() => {
    TagCloud(".content", myTags, {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });
  }, []);

  return (
    <div id="home" style={{ "--bglight": light ? "#edf2f8" : "#0a192f" }}>
      <div
        id="homecontent"
        style={{
          "--plight": light ? "black" : "white",
          "--namelight": light ? "#dc143c" : "#64ffda",
          "--rolelight": light ? "" : "#dc143c",
        }}
      >
        <p>Hi, I am</p>
        <p>Sukanta Pramanik</p>
        <p>
          I'm a <span>&nbsp;Full Stack Developer.</span>
        </p>
        <p>
          I am a full stack web developer with excellent knowledge of developing
          web services and a good record of professional achievement having
          strong technical, organizational, good communication and interpersonal
          skills.
        </p>
        <div className="homeCont">
          <a
            href="/fw18_0348-Sukanta-Pramanik-Resume.pdf"
            style={{ textDecoration: "none" }}
            // download="Sukanta-Pramanik-Resume"
            download
            smooth="true"
            onClick={() =>
              window.open(
                // "https://drive.google.com/file/d/1N7iE3RrOHUf44SqilwWSCyT_qsPuAPYO/view?usp=sharing"
                "https://drive.google.com/file/d/1eUvfmoVrzQWGEeCRjWt1LznpwZ7rGqfy/view?usp=sharing"
              )
            }
          >
            <button>
              Resume{" "}
              <i>
                <BiDownload />
              </i>
            </button>
          </a>
          <div
            className="homeIcCont"
            style={{ "--icColor": light ? "#0a192f" : "#edf2f8" }}
          >
            <div>
              <a
                href="https://www.linkedin.com/in/sukanta-pramanik-952a1b147/"
                target="_blank"
              >
                <BsLinkedin className="homeIc" />
              </a>
            </div>
            <div>
              <a href="https://github.com/sukanta255" target="_blank">
                <BsGithub className="homeIc" />
              </a>
            </div>
            <div>
              <a href="mailto:sukantapramanik9295@gmail.com">
                <SiGmail className="homeIc" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="content"
          style={{ order: 1, "--color": light ? "#dc143c" : "#64ffda" }}
        ></div>
      </div>
    </div>
  );
};
