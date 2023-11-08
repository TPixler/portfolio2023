import React from "react";
import ContactForm from "./ContactForm";
import linkedin3 from "../images/linkedin3.png";
import google2 from "../images/google2.png";
import github from "../images/github.png";
import "./Contact.css";
import yay2 from "../images/yay2.png";
import quote from "../images/quote.jpg";

export default function Contact() {
  return (
    <div>
      <p className="justForFun">Just for Fun</p>
      <img className="quotepic" src={quote} alt="quote"></img>
      <img className="funny" src={yay2} alt="funnypic"></img>
      <ContactForm />
    </div>
  );
}
