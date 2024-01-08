import React from "react";
import "./Languages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSquareJs,
  faGitAlt,
  faBootstrap,
  faHtml5,
  faCss3,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import typescript from "../images/typescript.png";
import mongodb from "../images/mongodb.png";
import firebase from "../images/firebase.png";

function Languages() {
  return (
    <div className="languages-page">
      {/* <div className="list"> */}
      <p className="language-lists">
        <ol className="language-list">
          <li>
            React <FontAwesomeIcon icon={faReact} />
          </li>
          <li>
            JavaScript <FontAwesomeIcon icon={faSquareJs} />
          </li>
          <li>
            TypeScript{" "}
            <img
              className="typescript"
              src={typescript}
              alt="TypeScript Logo"
            />
          </li>
          <li>
            Git <FontAwesomeIcon icon={faGitAlt} />
          </li>
          <li>
            MongoDB <img className="mongodb" src={mongodb} alt="Mongodb Logo" />
          </li>
          <li>
            Firebase{" "}
            <img className="firebase" src={firebase} alt="Firebase Logo" />
          </li>
          <li>
            Node.js <FontAwesomeIcon icon={faNodeJs} />
          </li>
          <li>
            CSS3 <FontAwesomeIcon icon={faCss3} />
          </li>
          <li>
            HTML5 <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li>
            Bootstrap <FontAwesomeIcon icon={faBootstrap} />
          </li>
        </ol>
      </p>
    </div>
    // </div>
  );
}

export default Languages;

// React <FontAwesomeIcon icon={faReact} />
// <br></br>
// JavaScript <FontAwesomeIcon icon={faSquareJs} />
// <br></br>
// TypeScript{" "} <img className="typescript" src={typescript} alt="TypeScript Logo" />
// <br></br>
// Git{" "} <FontAwesomeIcon icon={faGitAlt} />
// <br></br>
// MongoDB  <img className="mongodb" src={mongodb} alt="Mongodb Logo" />
// <br></br>
// Firebase  <img className="firebase" src={firebase} alt="Firebase Logo" />
// <br></br>
// Node.js <FontAwesomeIcon icon={faNodeJs} />
// Bootstrap{" "} <FontAwesomeIcon icon={faBootstrap} />
// <br></br>
// HTML5 <FontAwesomeIcon icon={faHtml5} />
// {/* <li> */}
// CSS3 <FontAwesomeIcon icon={faCss3} />
// {/* </li> */}
// {/* </ul> */}
