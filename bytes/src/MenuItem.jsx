import React from "react";
import "./MenuItem.css";


const MenuItem = ({ name, desc }) => {
  return (
    <div className="menu-item">
      <div className="menu-image"></div>
      <h3 className="menu-name">{name}</h3>
      <p className="menu-desc">{desc}</p>
    </div>
  );
};

export default MenuItem;