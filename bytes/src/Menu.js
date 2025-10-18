import React from "react";
import "./Menu.css";

function Menu() {

    return(
        <div className = "menu-page"> 
            <header className = "title">
                <h1> MENU </h1>
                <hr className = "divider"/>
            </header>

            <p className = "intro-text"> Welcome to our resturant menu! <br></br> Here you can explore all the types of dishes we offer.</p>
            
            <h3 className = "section-header"> APPETIZERS </h3>

            <h3 className = "section-header"> MAIN ENTRÉES </h3>

            <h3 className = "section-header"> SWEET TREATS </h3>

            <h3 className = "section-header"> DRINKS </h3>
            

        </div>
    );
}

export default Menu;