import React from "react";
import "./AboutUs.css";
import "./ContentBlock.css";

import TeamBlock from "./TeamBlock";

const randomImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function AboutUs() {
    const leadInfo = [
        {
        id: 1,
        image: randomImg,
        name: "Name",
        year: "4th Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        },
        {
        id: 2,
        image: randomImg,
        name: "Name",
        year: "2nd Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        }  
    ];
    const memeberInfo = [
        {
        id: 1,
        image: randomImg,
        name: "Name",
        year: "4th Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        },
        {
        id: 2,
        image: randomImg,
        name: "Name",
        year: "2nd Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        },
        {
        id: 3,
        image: randomImg,
        name: "Name",
        year: "3rd Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        },
        {
        id: 4,
        image: randomImg,
        name: "Name",
        year: "4th Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        },
        {
        id: 5,
        image: randomImg,
        name: "Name",
        year: "2nd Year, Computer Science Major",
        interest: "Interest",
        contribution: "Contribution",
        alt: "Headshot",
        }
    ];


 return (
    
        <div className="about-us">
            <header className = "title">
                <h1 className = "title"> Team Leads </h1>
                <hr className = "divider"/>
            </header>
    
          {/* team lead info blocks */}
          <div className="content-blocks-container">
            {leadInfo.map((block, index) => (
              <TeamBlock
                key={block.id}
                block={block}
                isAlternate={index % 2 === 1}
              />
            ))}
          </div>

          <header className = "title">
                <h1 className = "title"> Team Members </h1>
                <hr className = "divider"/>
          </header>
        {/* team member info blocks */}
          <div className="content-blocks-container">
            {memeberInfo.map((block, index) => (
              <TeamBlock
                key={block.id}
                block={block}
                isAlternate={index % 2 === 1}
              />
            ))}
        </div>
        </div>
        
 );

}
export default AboutUs;