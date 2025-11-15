import React from "react";
//import "./Menu.css";
//import MenuGridLayout from "./layout/MenuGridLayout";
import "./About.css";
import "./ContentBlock.css";
import TeamBlock from "./TeamBlock.jsx";

import team1 from "./assets/team/team1.png";
import team2 from "./assets/team/team2.png";
import team3 from "./assets/team/team3.jpg";
import team4 from "./assets/team/team4.png";
import team5 from "./assets/team/team5.jpeg";
import team6 from "./assets/team/team6.png";
import team7 from "./assets/team/team7.png";
import teamtemp from "./assets/team/teamtemp.jpg";


function About() {
        const leadInfo = [
        {
        id: 1,
        image: team2,
        name: "ANNABEL WEN",
        year: "2nd Year, Computer Science Major with Cybersecurity Minor",
        interest: "Interests: Cybersecurity, AI, Machine Learning",
        contribution: "Lead Web Developer",
        alt: "Headshot",
        },
        {
        id: 2,
        image: team1,
        name: "MAYELA ANCHETA",
        year: "5th Year, Computer Science Major with DS Minor",
        interest: "Interests: Product Management, Web Dev, Data Science",
        contribution: "Project Manager",
        alt: "Headshot",
        }  
    ];
    const memberInfo = [
        {
        id: 1,
        image: team3,
        name: "KATE YUAN",
        year: "4th Year, Computer Science Major with DS Minor",
        interest: "Interests: Data Science",
        contribution: "Web Developer",
        alt: "Headshot",
        },
        {
        id: 2,
        image: team4,
        name: "TIFFANY DINH",
        year: "2nd Year, Computer Science Major",
        interest: "Interest: Web Dev, UI/UX, Software Dev",
        contribution: "Web Developer",
        alt: "Headshot",
        },
        {
        id: 3,
        image: team5,
        name: "SARA DOWNING",
        year: "2nd Year, Computer Science Major",
        interest: "Interest: Cybersecurity, Software Dev, Web Dev",
        contribution: "Web Developer",
        alt: "Headshot",
        },
        {
        id: 4,
        image: team7,
        name: "EMILY DOMINGUEZ",
        year: "2nd Year, Computer Science Major",
        interest: "Interest: Still Exploring!",
        contribution: "Web Developer",
        alt: "Headshot",
        },
        {
        id: 5,
        image: team6,
        name: "SAYUMI AMARASINGHE",
        year: "3rd Year, Computer Science Major",
        interest: "Interests: Web Dev, UI/UX, Machine Learning",
        contribution: "Web Developer",
        alt: "Headshot",
        },
        {
        id: 6,
        image: teamtemp,
        name: "KERRY KONG",
        year: "N/A",
        interest: "Interests: N/A",
        contribution: "Web Developer",
        alt: "Headshot",
        }
    ];

    return(
        <div className = "about-page"> 
        {/*About */}
            <header className = "title">
                <h1 className = "title">ABOUT</h1>
                <hr className = "divider"/>
                
            </header>

            <p className = "intro-text">Founded in 2025 by an ambitious group of students from sheCodes Cal Poly Pomona, BYTES is a high-tech cozy cat café that serves up delicious desserts at an affordable price. SheCodes, the student-run ACM-W chapter at California State Polytechnic University, Pomona, is dedicated 
                to empowering underrepresented groups in computer science and technology through mentorship programs, semester-long projects, and community outreach. 
                Bringing that same spirit of innovation and inclusion to BYTES, every dessert is made to order using fresh local ingredients and you’re invited to 
                enjoy a treat while petting a friendly feline companion. Come taste our creations, meet our cats, and be part of the tech-meets-cozy café experience. </p>

             {/*Team Leads */} 
            <header className = "title">
                <h1 className = "title">TEAM LEADS</h1>
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
            
             {/*Team Members */}
            <header className = "title">
                <h1 className = "title">TEAM MEMBERS</h1>
                <hr className = "divider"/>
            </header> 
        {/* team member info blocks */}
          <div className="content-blocks-container">
            {memberInfo.map((block, index) => (
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

export default About;