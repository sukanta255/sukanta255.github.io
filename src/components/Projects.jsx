import { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { GoProject } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import {
  SiChakraui,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiHeroku,
  SiRedux,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiGit,
  SiNetlify,
} from "react-icons/si";
import travelocityImg from "../assets/travelocity.png";
import liciousImg from "../assets/licious.png";
import koovsImg from "../assets/koovs.png";
import bewakoofImg from "../assets/bewakoof.png";
import onemgImg from "../assets/tata1mg.png";

export const Projects = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      style={{
        "--bglightproject": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "white" : "#152235",
      }}
    >
      <p>
        {/* Featured <span>Projects </span>{" "} */}
        My Projects
      </p>
      <div className="projectCard">
        <div className="prCardImg">
          <img src={koovsImg} />
        </div>
        <div className="prCardContent">
          <p>koovs.com- Clone</p>
          <p>
            This project is about building a full stack clone of koovs.com,
            koovs is a E-commerce related website which helps you to find the
            different kinds of the cloths products. It is built using some
            front-end and back-end technologies listed below.
            <p>
              <span>Tech Stack: </span>React, Redux, ChakraUI, CSS,
              React-Router, NodeJS, ExpressJS, MongoDB.
            </p>
          </p>
          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiRedux style={{ color: "purple" }} className="tsIc" />
            <SiChakraui
              style={{
                color: "#60c9ca",
                background: "white",
                borderRadius: "50%",
              }}
              className="tsIc"
            />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiReactrouter style={{ color: "tomato" }} className="tsIc" />
            <SiNodedotjs style={{ color: "green" }} className="tsIc" />
            <SiExpress style={{ color: "black" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://koovs-mu.vercel.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/sukanta255/ordinary-summer-5089"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <div className="prCardImg">
          <img src={liciousImg} />
        </div>
        <div className="prCardContent">
          <p>Licious.in- Clone</p>
          <p>
            Licious the taste of fresh & delicious meat Website.From here you
            will Get delicious fresh chicken, meats and Seafood quickly
            delivered.
            <p>
              <span>Tech Stack: </span>React, Redux, ChakraUI, CSS and
              React-Router, NodeJs, ExpressJs, MOngoDB{" "}
            </p>
          </p>
          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiRedux style={{ color: "purple" }} className="tsIc" />
            <SiChakraui
              style={{
                color: "#60c9ca",
                background: "white",
                borderRadius: "50%",
              }}
              className="tsIc"
            />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiReactrouter style={{ color: "tomato" }} className="tsIc" />
            <SiNodedotjs style={{ color: "green" }} className="tsIc" />
            <SiExpress style={{ color: "black" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              // href="https://licious-freezing.netlify.app/" 
              href="https://dancing-alpaca-d252ea.netlify.app/"              
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/anuragg0107/Licious-clone"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <div className="prCardImg">
          <img src={bewakoofImg} />
        </div>
        <div className="prCardContent">
          <p>bewakoof.com - Clone</p>
          <p>
            This website is a clone of bewakoof.com which is a lifestyle fashion
            brand that makes creative and top-notch apparel for trendy,
            contemporary Indians.
            <p>
              <span>Tech Stack: </span>HTML, CSS and JavaScript.
            </p>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://flourishing-biscochitos-4f7f50.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <div className="prCardImg">
          <img src={travelocityImg} />
        </div>
        <div className="prCardContent">
          <p>travelocity.com - Clone</p>
          <p>
            This website is a clone of travelocity.com which is an online travel
            agency owned by Expedia Group. Users can signup, login and book
            Hotels and Transportation at their own Finger Tips . It is built
            using pure HTML, CSS and Vanilla JavaScript only. Authentication is
            implemented using localStorage.
            <p>
              <span>Tech Stack: </span>HTML, CSS and JavaScript
            </p>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://timely-zuccutto-a4829c.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/UtkarshOnGitHub/ossified-paper-8820"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <div className="prCardImg">
          <img src={onemgImg} />
        </div>
        <div className="prCardContent">
          <p>1mg.com - Clone</p>
          <p>
            It is An e-commerce web application that widely provides e-pharmacy,
            diagnostics, and healthcare solutions
            <p>
              <span>Tech Stack: </span>HTML, CSS and JavaScript
            </p>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://prismatic-marshmallow-6f0b69.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Prakash6204/synonymous-wing-3039"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
