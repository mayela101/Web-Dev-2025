import React from "react";
import "./MenuItem.css";


const MenuItem = ({ name, desc, imgUrl }) => {
  return (
    <div className="menu-item">
      <div className="menu-image"
         style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <h3 className="menu-name">{name}</h3>
      <p className="menu-desc">{desc}</p>
    </div>
  );
};

export default MenuItem;