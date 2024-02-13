import React from "react";
import resumepic from "../images/resumepic.png";
import "./Resume.css";
import "./Project.css";
import resumePdf from "../images/resume.pdf";

export default function Resume() {

  return (
    <div className="animate rotate animate--slow resumelink">
      <a
        className="list4"
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black" }}
      >
        {" "}
        <img className="resume" src={resumepic} alt="resume pic" /> Resume
      </a>
    </div>
  );
}
