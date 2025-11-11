// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";

// Navbar + background image
import Navbar from "./components/Navbar";
import navBg from "./assets/temporary_cat_nav.jpg"; // keep the image in src/assets/

export default function App() {
  return (
    <>
      <Navbar bgImage={navBg} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
      
    </>
  );
}

