import React from "react";
import "../MenuGrid.css";
import MenuItem from "../MenuItem.jsx"; 

import app1 from "../assets/menu/app1.png";
import app2 from "../assets/menu/app2.png";
import app3 from "../assets/menu/app3.png";
import entree1 from "../assets/menu/entree1.png";
import entree2 from "../assets/menu/entree2.png";
import entree3 from "../assets/menu/entree3.png";
import sweet1 from "../assets/menu/sweet1.png";
import sweet2 from "../assets/menu/sweet2.png";
import sweet3 from "../assets/menu/sweet3.png";
import drink1 from "../assets/menu/drink1.png";
import drink2 from "../assets/menu/drink2.png";
import drink3 from "../assets/menu/drink3.png";

const menuData = {
  "Appetizers": [
    { name: "Edamame", desc: "Steamed soybeans with sea salt.", img: app1 },
    { name: "Takoyaki", desc: "Crispy octopus balls with sauce and bonito flakes.", img: app2 },
    { name: "Rainbow Dumplings", desc: "Colorful vegetable dumplings steamed to perfection.", img: app3 },
  ],
  "Main Entrees": [
    { name: "Shrimp Shumai", desc: "Open-top shrimp and pork dumplings.", img: entree1 },
    { name: "Vegetable Dumplings", desc: "Steamed dumplings with mixed vegetables.", img: entree2 },
    { name: "Pork Dumplings", desc: "Steamed dumplings with seasoned pork filling.", img: entree3 },
  ],
  "Sweet Treats": [
    { name: " Mango Sticky Rice", desc: "Sweet mango with coconut sticky rice.", img: sweet1 },
    { name: "Taiyaki", desc: "Fish shaped pastry filled with nutella.", img: sweet2 },
    { name: "Choco-waffle", desc: "Waffle topped with ice cream and chocolate.", img: sweet3 },
  ],
  "Drinks": [
    { name: "Iced Americano", desc: "Bold Espresso poured over ice.", img: drink1 },
    { name: "Iced Latte", desc: "Bold espresso with milk poured over ice.", img: drink2 },
    { name: "Iced Matcha", desc: "Sweet matcha latte with oat milk.", img: drink3 },
  ],
};

const MenuGridLayout = ({ category }) => {
  const items = menuData[category] ?? [];

  return (
    <div className="menu-container">
      <div className="menu-section">
        <div className="menu-grid">
          {items.map((item, index) => (
            <MenuItem
              key={`${category}-${index}`}
              name={item.name}
              desc={item.desc}
              imgUrl={item.img} // direct local image
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default MenuGridLayout;

