import React from 'react';
import resumepic from "../images/resumepic.png"
import "./Resume.css";
import "./Project.css";

export default function Resume() {
  const resumePdfUrl = 'https://docs.google.com/document/d/1ALsc8wlBHh6olrRnu1-eY9YWRGDBANaWUPo9v0XliRU/edit?usp=drive_link'; 
  

  return (
    <div className='animate rotate animate--slow resumelink'>
      <a
       className="list4"
        href={resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'black' }} 
      >       <img className="resume" src={resumepic} alt="resume pic" /> Resume
        </a>
    </div>
  );
}

