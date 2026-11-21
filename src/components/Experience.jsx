import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBriefcase } from "react-icons/fa";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import "../styles/experience.css";

const roles = [
  {
    title: "Full Stack Developer",
    company: "One Health Assist (OHA)",
    dates: "July 2024 – Present",
    points: [
      "Build and maintain MERN and Next.js healthcare applications serving 50,000+ users.",
      "Implement cookie-based authentication, access and refresh token handling, session management, and device tracking.",
      "Contribute to a monorepo spanning Home, Health Shop, Find Doctor, Wellness Expert, and Lab Test; build reusable UI and shared API and routing layers.",
      "Optimize database queries and backend logic, resolve production issues, integrate Netcore features, and support code reviews and junior developers.",
    ],
    award: "Employee of the Month – August 2026 · Always Online Award",
  },
  {
    title: "Product Engineer",
    company: "Advenio Tecnosys Pvt. Ltd.",
    dates: "October 2023 – January 2024",
    points: [
      "Implemented product features and improved existing functionality using React, Redux, Node.js, MongoDB, SQL, and AWS.",
      "Fixed bugs and customer-reported issues to improve application stability and performance, working with cross-functional teams.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "TechNative",
    dates: "2-month internship",
    points: [
      "Contributed to MERN stack development, built full-stack features, integrated APIs, and supported efficient data handling.",
    ],
  },
];

export const Experience = () => {
  const { light } = useContext(ThemeContext);

  return (
    <section
      id="experience"
      style={{
        "--experience-bg": light ? "#edf2f8" : "#0a192f",
        "--experience-text": light ? "#17202a" : "#fff",
        "--experience-accent": light ? "#148a9c" : "#64ffda",
        "--experience-muted": light ? "#465466" : "#c5d0df",
        "--experience-card": light ? "#fff" : "#152235",
      }}
    >
      <h2>Experience</h2>
      <div className="experienceTimeline">
        {roles.map((role, index) => (
          <article className="experienceCard" data-aos="zoom-in" key={role.company}>
            <div className="experienceMarker" aria-hidden="true">
              <GoTriangleLeft className="experienceTriangle left" />
              <FaBriefcase className="experienceIcon" />
              <GoTriangleRight className="experienceTriangle right" />
            </div>
            <div className="experienceDetails">
              <p className="experienceRole">{role.title}</p>
              <p className="experienceCompany">{role.company}</p>
              <p className="experienceDates">{role.dates}</p>
              <ul>
                {role.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {role.award && <p className="experienceAward">{role.award}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
