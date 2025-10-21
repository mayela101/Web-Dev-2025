import React from "react";
import "./Menu.css";

function Menu() {

    return(
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



            <h3 id = "appetizers" className = "section-header"> APPETIZERS </h3>

            <h3 id = "main-entrees" className = "section-header"> MAIN ENTRÉES </h3>

            <h3 id = "sweet-treats" className = "section-header"> SWEET TREATS </h3>

            <h3 id = "drinks" className = "section-header"> DRINKS </h3>
            

        </div>
    );
}

export default Menu;