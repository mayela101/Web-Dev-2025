//src/Footer.js
import React from "react"; 
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./App.css";

// Footer Component
export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer-left">
        <p>1234 Bytes Avenue, Pomona, CA 91768</p>
        <p>(123) 456-7890</p>
        <p>catering@bytescafe.com</p>
      </div>
      <div className="footer-right">
        <div className="social-media-icons">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
        </div>
        <p>©2025 Bytes™ All rights reserved.</p>
      </div>
    </footer>
    )
}