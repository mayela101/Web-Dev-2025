//src/Footer.js
import React from "react"; 
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
// import "./App.css";
import styles from "./Footer.module.css";
import bg from "./assets/nav-bg.png";

// Footer Component
export default function Footer() {
  return(
    <footer className={styles.footer} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.wrap}>
        <div className={styles.plate} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles["footer-left"]}>
            <p>1234 Bytes Avenue, Pomona, CA 91768</p>
            <p>(123) 456-7890</p>
            <p>catering@bytescafe.com</p>
          </div>
          <div className={styles["footer-right"]}>
            <div className={styles["social-media-icons"]}>
                <FaInstagram />
                <FaFacebook />
                <FaYoutube />
            </div>
            <p>©2025 Bytes™ All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    )
}