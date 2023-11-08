// import React, { useEffect, useRef } from "react";
// import ttm from "../images/ttm.png";
// import "./Project.css";

// export default function Projects() {
//   const projectRef = useRef(null);
//   const ttmRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.2,
//     };

//     const callback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           projectRef.current.classList.add("animate");
//           projectRef.current.classList.add("slideInLeft");
//           projectRef.current.classList.add("animate--mid");
//           projectRef.current.classList.add("project");

//           ttmRef.current.classList.add("animate");
//           ttmRef.current.classList.add("slideInRight");
//           ttmRef.current.classList.add("animate--mid");
//           ttmRef.current.classList.add("ttm");
//         } else {
//           projectRef.current.classList.remove("animate");
//           projectRef.current.classList.remove("slideInLeft");
//           projectRef.current.classList.remove("animate--mid");
//           projectRef.current.classList.remove("project");

//           ttmRef.current.classList.remove("animate");
//           ttmRef.current.classList.remove("slideInRight");
//           ttmRef.current.classList.remove("animate--mid");
//           ttmRef.current.classList.remove("ttm");
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(projectRef.current);
//     observer.observe(ttmRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div>
//       <h2 ref={projectRef}>Projects</h2>
//       <div ref={ttmRef}>
//         <img src={ttm} alt="ttm" />
//       </div>
//       <a
//         className="terror"
//         href="https://capstone-terror-time-machine-client.vercel.app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Click here to take you to the: Terror Time Machine
//       </a>
//     </div>
//   );
// }
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
      <h2 id="project" className={isInViewport ? "animate slideInLeft animate--mid project" : ""}>
        Projects
      </h2>
      <div id="ttm" className={isInViewport ? "animate slideInRight animate--mid ttm" : ""}>
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
