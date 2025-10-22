// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // or a Home.css if you prefer

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

  // Sample data: each item in the list is a content block 
  const contentBlocks = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/26/3e/80/263e801e6b3dfcbcf01f496ddb539fa8.jpg",
      title: "Menu Item #1",
      description: "This is a sample description for the menu content block XDDDD. The images are just placeholders for now feel free to change them later.",
      alt: "Menu Item #1"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/8c/e4/e3/8ce4e33358e9a203e873c3f81dea45cd.jpg",
      title: "Menu Item #2",
      description: "This is a another sample description for the menu content block :3. Clicking on an item takes you to the Menu page for now.",
      alt: "Menu Item #2"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/62/6d/bd/626dbdc4f1f80d7dc44a78e7478c0498.jpg",
      title: "Menu Item #3",
      description: "Another sample description for the menu content block XDDDD",
      alt: "Menu Item #3"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/1d/47/07/1d4707ebe7182edeb04bbad3cac3f9e3.jpg",
      title: "Menu Item #4",
      description: "Hiiii",
      alt: "Menu Item #4"
    }
  ];

  const handleContentBlockClick = () => {
    navigate('/Menu');
  };

  return (
    <main className="home">
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
