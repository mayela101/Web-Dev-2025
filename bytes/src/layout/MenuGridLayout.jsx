import React from "react";
import "../MenuGrid.css";
import MenuItem from "../MenuItem.jsx"; //placeholder input 

const menuData = {
     "Appetizers": [
    { name: "Lorem Ipsum", desc: "Dolor sit amet, consectetur adipiscing elit." },
    { name: "Lorem Ipsum", desc: "Sed do eiusmod tempor incididunt ut labore." },
    { name: "Lorem Ipsum", desc: "Ut enim ad minim veniam, quis nostrud exercitation." },
  ],
  "Main Entrees": [
    { name: "Lorem Ipsum", desc: "Duis aute irure dolor in reprehenderit in voluptate." },
    { name: "Lorem Ipsum", desc: "Excepteur sint occaecat cupidatat non proident." },
    { name: "Lorem Ipsum", desc: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: "Lorem Ipsum", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem." },
    { name: "Lorem Ipsum", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus." },
    { name: "Lorem Ipsum", desc: "Et harum quidem rerum facilis est et expedita distinctio." },
  ],
  "Sweet Treats": [
    { name: "Lorem Ipsum", desc: "Nam libero tempore, cum soluta nobis est eligendi optio." },
    { name: "Lorem Ipsum", desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum." },
    { name: "Lorem Ipsum", desc: "Itaque earum rerum hic tenetur a sapiente delectus." },
  ],
  "Drinks": [
    { name: "Lorem Ipsum", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur." },
    { name: "Lorem Ipsum", desc: "Ut enim ad minima veniam, quis nostrum exercitationem." },
    { name: "Lorem Ipsum", desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit." },
  ],
};


const MenuGridLayout=() => {
    return (
        <div className="menu-container">
        {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="menu-section">
            <h2 className="menu-heading">{category}</h2>
            <div className="menu-grid">
                {items.map((item, index) => (
                <MenuItem key={index} name={item.name} desc={item.desc} />
                ))}
            </div>
            </div>
        ))}
        </div>
  );
};
export default MenuGridLayout;