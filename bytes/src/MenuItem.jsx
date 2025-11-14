import React from "react";
import "./MenuItem.css";


const MenuItem = ({ name, desc, imgUrl }) => {
  return (
    <div className="menu-item">
      <div className="menu-image">
        <img src={imgUrl} alt={name} />
        <div className="overlay"></div>  {/* 👈 this adds your tint */}
      </div>
      <h4 className="menu-name">{name}</h4>
      <p className="menu-desc">{desc}</p>
    </div>
  );
};

export default MenuItem;