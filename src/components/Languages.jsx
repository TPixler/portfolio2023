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
    <div className="languages-card">
      <div className="list">
        <p className="language-list">
          <ul>
            React <FontAwesomeIcon icon={faReact} />
            JavaScript <FontAwesomeIcon icon={faSquareJs} /> TypeScript{" "}
            <img className="typescript" src={typescript} alt="TypeScript Logo" /> <br></br> Git{" "}
            <FontAwesomeIcon icon={faGitAlt} /> <br></br> MongoDB  <img className="mongodb" src={mongodb} alt="Mongodb Logo" />Firebase  <img className="firebase" src={firebase} alt="Firebase Logo" />
            Node.js <FontAwesomeIcon icon={faNodeJs} /> Bootstrap{" "}
            <FontAwesomeIcon icon={faBootstrap} />
            HTML5 <FontAwesomeIcon icon={faHtml5} /> <br></br>
            CSS3 <FontAwesomeIcon icon={faCss3} />
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Languages;
