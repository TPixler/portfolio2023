// import React, { useState, useRef } from "react";
// import "./ContactForm.css";

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can add your logic here to handle the form submission
//     // For example, you can send the form data to a server or display a thank-you message.
//     // Maybe add a toast saying thank-you.
//     // Clear the form fields after submission
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="contact-form">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name: </label>
//           <input
//             className="name"
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email: </label>
//           <input
//             className="email"
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message: </label>
//           <textarea
//             className="message"
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit"> Submit </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
import React, { useState, useRef } from "react";
import "./ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailSubmit = () => {
    const mailtoUrl = `mailto:tessapixler1975@gmail.com?subject=Contact Us&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoUrl;
    toast("Thank you for your submission!", { type: "success" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    setMessage("");
    setFormData({ name: "", email: "", message: "" });
    console.log(formData);
  };

  return (
    <>
    <div className="container">
      <div className="bg-image">
        <h3 className="contact">Contact Me</h3>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input className="contact-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email: </label>
          <input className="contact-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />

          <label htmlFor="message">Message: </label>
          <br />
          <textarea className="contact-textarea"
            id="message"
            name="message"
            rows="5"
            cols="40"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
          <br />
          <br />
          <button id="button" onClick={handleEmailSubmit}>
            Send Message
          </button>
        </form>
      </div>
      <footer>
          <p>&copy; {new Date().getFullYear()} Tessa Pixler</p>
        </footer>
        {/* <ToastContainer /> */}
    </div>
    </>
  );
}

export default ContactForm;


