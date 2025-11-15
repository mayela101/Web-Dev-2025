import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <header className="title">
        <h1 className="title">CONTACT</h1>
        <hr className="divider" />
      </header>

      <p className="intro-text">
        Questions, feedback, want to say hi?  
        We’d love to hear from you! Reach out using the form below.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Email:</strong> hello@bytes.cafe</p>
          <p><strong>Location:</strong> Cal Poly Pomona, CA</p>
          <p><strong>Hours:</strong></p>
          <p>Monday: 9AM - 8PM</p>
          <p>Tuesday: 9AM - 8PM</p>
          <p>Wednesday: 9AM - 8PM</p>
          <p>Thursday: 9AM - 8PM</p>
          <p>Friday:90AM - 8PM</p>
          <p>Saturday: 10AM - 5PM</p>
          <p>Sunday: CLOSED</p>
        </div>

        <form className="contact-form">
          <div className="social-links"><h2>Get in Touch</h2></div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message..." />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
