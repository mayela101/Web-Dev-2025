import React from "react";
import "./Menu.css";
import MenuGridLayout from "./layout/MenuGridLayout";

function Menu() {

    return(
        <MenuGridLayout>
        <div className = "menu-page"> 
            <header className = "title">
                <h1 className = "title"> MENU </h1>
                <hr className = "divider"/>
            </header>

            <p className = "intro-text"> Welcome to our resturant menu! <br></br> Here you can explore all the types of dishes we offer.</p>

            <a href = "#appetizers">APPETIZERS</a>
            <a href = "#main-entrees">MAIN ENTRÉES</a>
            <a href = "#sweet-treats">SWEET TREATS</a>
            <a href = "#drinks">DRINKS</a>

             <section id="appetizers">
          <h3 className="section-header"> APPETIZERS </h3>
          <MenuGridLayout category="Appetizers" />
        </section>

        <section id="main-entrees">
          <h3 className="section-header"> MAIN ENTRÉES </h3>
          <MenuGridLayout category="Main Entrees" />
        </section>

        <section id="sweet-treats">
          <h3 className="section-header"> SWEET TREATS </h3>
          <MenuGridLayout category="Sweet Treats" />
        </section>

        <section id="drinks">
          <h3 className="section-header"> DRINKS </h3>
          <MenuGridLayout category="Drinks" />
        </section>
      </div>
      </MenuGridLayout>
    );
    
}

export default Menu;