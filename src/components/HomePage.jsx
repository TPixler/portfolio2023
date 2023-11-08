import React, { useEffect, useState } from "react";
import anime from "animejs";
import Navbar from "./Navbar.jsx";
import "./HomePage.css";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import linkedin3 from "../images/linkedin3.png";
import google2 from "../images/google2.png";
import github from "../images/github.png";
import Languages from "./Languages.jsx";
import { ToastContainer } from "react-toastify";
import headshot from "../images/headshot.png";
import Resume from "./Resume.jsx";
import "./Project.css";

function HomePage() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const h1Element = document.querySelector("h1");
    const dropAnimation = anime({
      targets: h1Element,
      translateY: ["-100px", "0"],
      opacity: [0, 1],
      duration: 500,
      easing: "easeOutQuad",
    });
    const spinAnimation = anime({
      targets: h1Element,
      rotate: ["0deg", "720deg"],
      translateY: ["0", "-50px"],
      scale: [0.1, 1],
      duration: 1000,
      easing: "easeInOutSine",
      autoplay: false,
    });
    dropAnimation.finished.then(() => {
      spinAnimation.play();
    });
  }, []);

  return (
    <body>
      <div className="main">
        <div className="top">
          <h1>Tessa Pixler</h1>
          <a
            className="animate rotate animate--slow list1"
            href="https://github.com/TPixler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github" src={github} alt="GitHub Logo" />
            GitHub Profile
          </a>
          <br />
          <a
            className="animate rotate animate--slow list2"
            href="mailto:tessapixler1975@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="google" src={google2} alt="Google Logo" />
            Email
          </a>
          <br />
          <a
            className="animate rotate animate--slow list3"
            href="https://www.linkedin.com/in/tessa-pixler-89097a287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin" src={linkedin3} alt="LinkedIn Logo" />
            LinkedIn Profile
          </a>
          <Resume />
        </div>
        <div className="headshot">
          <img src={headshot} alt="headshot" />
        </div> 
          <div className="about">
            <About />
          </div>
          <Projects />
          <Contact />
          <ToastContainer />
        </div>
    </body>
  );
}
// maybe add a quote

export default HomePage;
