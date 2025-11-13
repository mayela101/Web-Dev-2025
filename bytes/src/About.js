import React from "react";
import "./Menu.css";
import MenuGridLayout from "./layout/MenuGridLayout";

function About() {

    return(
        <div className = "aboutu-page"> 
            <header className = "title">
                <h1 className = "title"> ABOUT US </h1>
                <hr className = "divider"/>
            </header>

            <p className = "intro-text"> Heading <br></br> Lorem ipsum dolor sit amet consectetur adipiscing elit. 
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis 
              convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus 
              bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper 
              vel class aptent taciti sociosqu.</p>

        </div>
    );
}

export default About;