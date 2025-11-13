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
      title: "OUR STORY",
      description:
        "Welcome to Bytes, where technology meets taste! Founded in 2025, Bytes is a unique cafe that combines our love for food and technology. Our mission is to provide delicious, tech-inspired dishes that satisfy both your hunger and your mind.",
      alt: "About Bytes",
    },
    {
      id: 2,
      image: homeImage2,
      title: "DID YOU KNOW?",
      description: "A byte is a unit of digital information made up of 8 bits. Just like how a byte is made up of smaller bits, our dishes are crafted from a combination of fresh ingredients to create a byte-worthy experience!",
      alt: "Did you know?",
    },
    {
      id: 3,
      image: homeImage3,
      title: "MEET THE OWNERS",
      description:
        "Behind Bytes is a team of food and tech enthusiasts! We came together with the shared goal of creating delicious dishes for everyone to enjoy.",
      alt: "Meet the Owners",
    },
    {
      id: 4,
      image: homeImage4,
      title: "FUN FACT",
      description: "The name ‘Bytes’ was chosen for our restaurant as it references our passion for technology and our mission to create tasty bites!",
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
