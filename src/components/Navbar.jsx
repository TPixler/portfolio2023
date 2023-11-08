// import React from "react";
// import "./Navbar.css";
// import About from "../Pages/About.jsx";
// import Projects from "../Pages/Projects.jsx";
// import Contact from "../Pages/Contact.jsx";
// import {
//   Link,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scroller,
// } from "react-scroll";

// export default function Navbar() {
//    const scrollToAbout = () => {
//     scroller.scrollTo("about-section", {
//       duration: 800, // You can adjust the duration as needed
//       delay: 0,
//       smooth: "easeInOut",
//     });
//   };
//   return (
//     <div className="main">
//       <div className="list">
//         <nav>
//           <ul>
//             <li>
//               About
//               <Link
//                 to="about-section"
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={500}
//               ></Link>
//             </li>
//             <li>Projects</li>
//             <li>Contact</li>
//           </ul>
//           <Element name="about-section">
//             <About />
//           </Element>
//           <Element name="project-section">
//             <Projects />
//           </Element>
//           <Element name="contact-section">
//             <Contact />
//           </Element>
//         </nav>
//       </div>
//     </div>
//   );
// }
