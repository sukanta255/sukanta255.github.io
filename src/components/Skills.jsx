import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/skills.css";
import {
  SiChakraui,
  SiHtml5,
  SiTypescript,
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
import { IoLogoNodejs } from "react-icons/io5";
import mongoose from "../assets/mongoose.png";

export const Skills = () => {
  const [{ all, front, ai }, showSkills] = useState({
    all: true,
    front: false,
    ai: false,
  });
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="skill"
      style={{
        "--bglightedskill": light ? "#edf2f8" : "#0a192f",
        "--bglightskill": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      {/* <p>Sk<span>il</span>ls <GiSkills fontSize={'25px'} /></p> */}
      <p>Technical Skills</p>
      <div id="skillButtonsCont">
        <button
          class="button-75"
          role="button"
          onClick={() => showSkills({ all: true, front: false, ai: false })}
          style={{
            backgroundImage: all
              ? "linear-gradient(135deg, green 5%, green)"
              : "linear-gradient(135deg, rgb(24, 195, 225) 40%, rgb(24, 195, 225))"
            // ? "green"
            // : "rgb(24, 195, 225)",
          }}
        >
          <span class="text">All</span>
        </button>
        <button
          class="button-75"
          role="button"
          onClick={() => showSkills({ all: false, front: true, ai: false })}
          style={{
            backgroundImage: front
            ? "linear-gradient(135deg, green 5%, green)"
            : "linear-gradient(135deg, rgb(24, 195, 225) 40%, rgb(24, 195, 225))"
          }}
        >
          <span class="text">Frontend</span>
        </button>
        <button
          class="button-75"
          role="button"
          onClick={() => showSkills({ all: false, front: false, ai: false })}
          style={{
            backgroundImage:
              !all && !front && !ai
              ? "linear-gradient(135deg, green 5%, green)"
              : "linear-gradient(135deg, rgb(24, 195, 225) 40%, rgb(24, 195, 225))"
          }}
        >
          <span class="text">Backend</span>
        </button>
        <button
          className="button-75"
          role="button"
          onClick={() => showSkills({ all: false, front: false, ai: true })}
          style={{
            backgroundImage: ai
              ? "linear-gradient(135deg, green 5%, green)"
              : "linear-gradient(135deg, rgb(24, 195, 225) 40%, rgb(24, 195, 225))",
          }}
        >
          <span className="text">AI</span>
        </button>
      </div>
      <div id="skillset">
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiHtml5 style={{ color: "#ef662a" }} className="skillIc" />
          <p>HTML</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiCss3 style={{ color: "#1c88c7" }} className="skillIc" />
          <p>CSS</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiJavascript
            style={{ color: "#f7df1e", background: "black" }}
            className="skillIc"
          />
          <p>JavaScript</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiReact style={{ color: "#53c1de" }} className="skillIc" />
          <p>React</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiRedux style={{ color: "#7549ba" }} className="skillIc" />
          <p>Redux</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiTypescript
            style={{ color: "blue", background: "white", borderRadius: "10px" }}
            className="skillIc"
          />
          <p>TypeScript</p>
        </div>

        <div style={{ display: all ? "block" : !front && !ai ? "block" : "none" }}>
          <IoLogoNodejs style={{ color: "#8bc64a" }} className="skillIc" />
          <p>NodeJs</p>
        </div>
        <div style={{ display: all ? "block" : !front && !ai ? "block" : "none" }}>
          <SiExpress style={{ color: "#000000" }} className="skillIc" />
          <p>Express</p>
        </div>
        <div style={{ display: all ? "block" : !front && !ai ? "block" : "none" }}>
          <SiMongodb style={{ color: "#589733" }} className="skillIc" />
          <p>MongoDB</p>
        </div>
        <div style={{ display: "block" }}>
          <SiGit style={{ color: "#de4c36" }} className="skillIc" />
          <p>Git</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiChakraui
            style={{
              color: "#60c9ca",
              background: "white",
              borderRadius: "50%",
            }}
            className="skillIc"
          />
          <p>ChakraUI</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiNetlify style={{ color: "#4d9abf" }} className="skillIc" />
          <p>Netlify</p>
        </div>
        <div style={{ display: all ? "block" : front ? "block" : "none" }}>
          <SiVercel
            style={{
              color: "white",
              background: "black",
              boxSizing: "border-box",
              padding: "13px",
              borderRadius: "50%",
            }}
            className="skillIc"
          />
          <p>Vercel</p>
        </div>
        <div style={{ display: all ? "block" : !front && !ai ? "block" : "none" }}>
          <SiHeroku
            style={{
              color: "white",
              background: "#564d80",
              padding: "3px",
              borderRadius: "5px",
            }}
            className="skillIc"
          />
          <p>Heroku</p>
        </div>
        <div style={{ display: all ? "block" : !front && !ai ? "block" : "none" }}>
          <img src={mongoose} />
          <p>Mongoose</p>
        </div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">AI</span><p>Generative AI</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">◎</span><p>OpenAI API</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">n8n</span><p>Workflow Automation</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">LC</span><p>LangChain</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">HF</span><p>Hugging Face</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">RAG</span><p>Retrieval-Augmented Generation</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">PE</span><p>Prompt Engineering</p></div>
        <div className="aiSkillTile" style={{ display: all || ai ? "flex" : "none" }}><span className="aiSkillMark">AG</span><p>Agentic AI</p></div>
      </div>
    </div>
  );
};



