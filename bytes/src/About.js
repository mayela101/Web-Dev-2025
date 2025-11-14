import React from "react";
//import "./Menu.css";
//import MenuGridLayout from "./layout/MenuGridLayout";
import "./About.css";

function About() {

    return(
        <div className = "about-page"> 
        {/*About */}
            <header className = "title">
                <h1 className = "title"> about </h1>
                <hr className = "divider"/>
            </header>

            <p className = "intro-text"> Founded in 2025 by an ambitious group of students from Cal Poly Pomona’s sheCodes, Bytes is a high-tech cozy cat cafe that serves up delicious desserts for an affordable price. 
                Every dessert is made to order, using fresh local ingredients! 
                Come enjoy some desserts and pet the cats at our cafe. </p>

             {/*Team Leads */} 
            <header className = "title">
                <h1 className = "title"> team leads </h1>
                <hr className = "divider"/>
            </header>
            
             {/*Team Members */}
            <header className = "title">
                <h1 className = "title"> team members </h1>
                <hr className = "divider"/>
            </header> 
      </div>

    );
}

export default About;