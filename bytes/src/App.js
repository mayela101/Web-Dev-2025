// src/App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import "./App.css";

export default function App() {
  return (
    <>
      {/* temp nav so you can switch pages */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
}
