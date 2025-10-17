import React from "react";
import Footer from "../Footer";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
