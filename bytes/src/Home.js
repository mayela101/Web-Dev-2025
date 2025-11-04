// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import homeImage from "./assets/home_img1.png";
import homeImage2 from "./assets/home_img2.png";
import homeImage3 from "./assets/home_img3.png";
import homeImage4 from "./assets/home_img4.png";


// Content Block Component
function ContentBlock({ image, title, description, alt, isAlternate, onClick }) {
  return (
    <div 
      className={`content-block ${isAlternate ? 'alternate' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="content-block-image">
        <img src={image} alt={alt} />
      </div>
      <div className="content-block-text">
        <h3 className="content-block-title">{title}</h3>
        <p className="content-block-description">{description}</p>
      </div>
    </div>
  );
}


export default function Home() {
  const navigate = useNavigate();

  const contentBlocks = [
    {
      id: 1,
      image: homeImage,
      title: "About Bytes",
      description: "This is a sample description for the menu content block XDDDD. The images are just placeholders for now feel free to change them later.",
      alt: "About Bytes"
    },
    {
      id: 2,
      image: homeImage2,
      title: "Did you know?",
      description: "This is a another sample description for the idk we'll just add a fictional fun fact about the restaurant or something XDDDD",
      alt: "Did you know?"
    },
    {
      id: 3,
      image: homeImage3,
      title: "Meet the Owners",
      description: "Another sample description, idk we can insert a pic of us and pretend we're founders",
      alt: "Menu Item #3"
    },
    {
      id: 4,
      image: homeImage4,
      title: "Fun Fact",
      description: "Hiiii",
      alt: "Fun Fact"
    }
  ];

  const handleContentBlockClick = () => {
    navigate('/Menu');
  };

  return (
    <main className="home">


      <div className="banner">
      </div>

      
      <div className="content-blocks-container">
        {contentBlocks.map((block, index) => (
          <ContentBlock
            key={block.id}
            image={block.image}
            title={block.title}
            description={block.description}
            alt={block.alt}
            isAlternate={index % 2 === 1}
            onClick={handleContentBlockClick}
          />
        ))}
      </div>
    </main>
  );
}
