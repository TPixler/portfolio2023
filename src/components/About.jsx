import React from "react";
import "./About.css";
import { useEffect, useState } from "react";
import retroTexas from "../images/retroTexas.jpg";
import Languages from "./Languages";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const pClassName = isHovered ? "p-visible" : "p-hidden";
  const containerClassName = isHovered ? "container hovered" : "container";
  const languageContainerClassName = isHovered
    ? "container language-hovered"
    : "container";

  return (
    <div className="main">
      <div className="flair flair--25"></div>
      <div className="card-container">
        <div
          className={containerClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="silhouette">
            <h2>About Me </h2>
            <div className="cover"></div>
          </div>
          <div className="card">
            <p className="information">
              I have lived in the same town in Texas all my life (most of that
              living in the house I grew up in). I am a wife and a mom of 7 and
              1 beautiful granddaughter. I love gardening, cooking, crocheting
              and knitting. I like to create things and watch them grow, which
              is how I came to love being a Web Developer. I have always had a
              passion for coding after I took some classes in high school.
              Finally, now that all of our children are adults, I can pursue my
              passion.
            </p>
          </div>
        </div>
        <div
          className={languageContainerClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="silhouette">
            <h2>Languages </h2>
            <div className="cover"></div>
          </div>
          <div className="language-card">
            <p className="languages">
              <Languages />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
{

}
