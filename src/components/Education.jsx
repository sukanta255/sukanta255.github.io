import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaUserGraduate } from "react-icons/fa";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import "../styles/education.css";

export const Education = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="education"
      style={{
        "--bglighted": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>
        {/* Educ<span>a</span>ti<span>o</span>n{" "}<MdCastForEducation style={{ fontSize: "25px" }} /> */}   
        Education
      </p>
      <div className="educard" data-aos="zoom-in">
        <div id="edu1">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd1">
          <p>Full Stack Web Development</p>
          <p>Masai School, Bangalore, KA</p>
          <p>
            MERN Stack Developer
          </p>
          <p>February 2022 - Present</p>
        </div>
        <div className="date d1"></div>
      </div>

      <div className="educard" data-aos="zoom-in">
        <div id="edu2">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd2">
          <p>Bachelor Of Technology</p>
          <p>Global Institute Of Management & Technology, Nadia , West Bengal</p>
          <p>Computer Science & Engineering</p>
          <p>2015 - 2019</p>
        </div>
        <div className="date d2"></div>
      </div>
      <div className="educard" data-aos="zoom-in">
        <div id="edu3">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd3">
        <p>Class 12 (Higher Secondary)</p>
          <p>Santipur Municipal High School, Nadia, West Bengal</p>
          <p>Science Stream</p>
          <p>2015</p>
        </div>
        <div className="date d3"></div>
      </div>
    </div>
  );
};
