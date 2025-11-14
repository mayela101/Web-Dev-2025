// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useRef } from "react";


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

  const pathRef = useRef(null);

useEffect(() => {
  const path = document.querySelector(".swirl-path");
  if (!path) return;

  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);
    path.style.strokeDashoffset = pathLength * (1 - progress);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const handleContentBlockClick = () => {
    navigate("/menu"); // make sure your route is lowercase /menu
  };

  return (
    <main className="home">
      {/* Banner area */}
      <div className="banner" />
      {/* Pink swirl line */}
<svg className="swirl-line" viewBox="0 0 1000 3000" preserveAspectRatio="xMidYMid meet">
  <path
    className="swirl-path"
    d="M 520,  80
       C 740, 380  680, 800  920,  1280
       C 1040, 1480 1380, 1560 1620, 1740
       C 1320, 1860 460, 2040 800, 2360
       C 1080, 2540 540, 2680 1390, 2760
       "
  />

</svg>

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
