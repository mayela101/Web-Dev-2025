import React from "react";
import "../MenuGrid.css";
import MenuItem from "../MenuItem.jsx"; 

const menuData = {
  "Appetizers": [
    { name: "Lorem Ipsum", desc: "Dolor sit amet, consectetur adipiscing elit." },
    { name: "Lorem Ipsum", desc: "Sed do eiusmod tempor incididunt ut labore." },
    { name: "Lorem Ipsum", desc: "Ut enim ad minim veniam, quis nostrud exercitation." },
  ],
};

const MenuGridLayout = () => {
  return (
    <div className="menu-container">
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="menu-section">
          <div className="menu-grid">
            {items.map((item, index) => {
              // 👇 Random image from Lorem Picsum
              const randomImg = `https://picsum.photos/seed/${index + Math.random()}/200/200`;
              return (
                <MenuItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  imgUrl={randomImg}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGridLayout;

