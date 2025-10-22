//src/Footer.js
import React from "react"; 
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./App.css";

// Footer Component
export default function Footer() {
  return(
    <footer className="footer">
      <div className="social-media-icons">
        <FaInstagram />
        <FaFacebook />
        <FaYoutube />
      </div>
      <p>©2025 Bytes™ All rights reserved.</p>
    </footer>
    )
}