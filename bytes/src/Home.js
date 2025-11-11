// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// local images (adjust paths if your file is in a different folder)
import homeImage from "./assets/home_img1.png";
import homeImage2 from "./assets/home_img2.png";
import homeImage3 from "./assets/home_img3.png";
import homeImage4 from "./assets/home_img4.png";

// Content Block Component
function ContentBlock({ block, isAlternate, onClick }) {
  return (
    <div
      className={`content-block block-${block.id} ${isAlternate ? "alternate" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="content-block-image">
        <img src={block.image} alt={block.alt || ""} />
      </div>
      <div className="content-block-text">
        {block.title && <h3 className="content-block-title">{block.title}</h3>}
        {block.description && (
          <p className="content-block-description">{block.description}</p>
        )}
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
      title: "ABOUT BYTES",
      description:
        "This is a sample description for the menu content block XDDDD. The images are just placeholders for now feel free to change them later.",
      alt: "About Bytes",
    },
    {
      id: 2,
      image: homeImage2,
      title: "DID YOU KNOW?",
      description: "Another sample description here.",
      alt: "Did you know?",
    },
    {
      id: 3,
      image: homeImage3,
      title: "MEET THE OWNERS",
      description:
        "We are a group of people who share a love for food and technology! We came together in order to create tasty dishes for others to enjoy.",
      alt: "Meet the Owners",
    },
    {
      id: 4,
      image: homeImage4,
      title: "FUN FACT",
      description: "The name ‘Bytes’ was chosen as it references our passion for technology and our goal to create tasty bites!",
      alt: "Fun Fact",
    },
  ];

  const handleContentBlockClick = () => {
    navigate("/menu"); // make sure your route is lowercase /menu
  };

  return (
    <main className="home">
      {/* Banner area */}
      <div className="banner" />

      {/* Content blocks */}
      <div className="content-blocks-container">
        {contentBlocks.map((block, index) => (
          <ContentBlock
            key={block.id}
            block={block}
            isAlternate={index % 2 === 1}
            onClick={handleContentBlockClick}
          />
        ))}
      </div>
    </main>
  );
}
