import React, { useEffect, useState } from "react";
import ttm from "../images/ttm.png";
import "./Project.css";

export default function Projects() {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const projectRef = document.querySelector("#project");
    const ttmRef = document.querySelector("#ttm");

    if (projectRef && ttmRef) {
      observer.observe(projectRef);
      observer.observe(ttmRef);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2
        id="project"
        className={
          isInViewport ? "animate slideInLeft animate--mid project" : ""
        }
      >
        Projects
      </h2>
      <div
        id="ttm"
        className={isInViewport ? "animate slideInRight animate--mid ttm" : ""}
      >
        <img src={ttm} alt="ttm" />
      </div>
      <a
        className="terror"
        href="https://capstone-terror-time-machine-client.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to take you to the: Terror Time Machine
      </a>
    </div>
  );
}
