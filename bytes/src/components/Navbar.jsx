// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import bg from "../assets/temporary_cat_nav.jpg";
import kitten from "../assets/kitten.png";

export default function Navbar() {
  return (
    <header className={styles.navbar} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.wrap}>

        <div className={styles.plate} aria-hidden="true" />


        <div className={styles.content}>
          <div className={styles.left}>
            <Link to="/" className={styles.brand}>BYTES</Link>
          </div>

          <nav className={styles.center} aria-label="Primary">
            <NavLink to="/about"   className={styles.link}>ABOUT&nbsp;US</NavLink>
            <NavLink to="/contact" className={styles.link}>CONTACT</NavLink>
            <NavLink to="/menu"    className={styles.link}>MENU</NavLink>
          </nav>

          <div className={styles.right}>
            {/* testing logo linking */}
            <NavLink to="/about"  className={styles.link}>
              <img src={kitten} alt="a kitten" width="60px" height="40px"/>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
