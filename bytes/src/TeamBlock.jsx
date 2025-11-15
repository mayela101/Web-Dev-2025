import React from "react";
import "./About.css";

const TeamBlock = ({ block, isAlternate, onClick }) => {
    return (
      <div
        className={`content-block block-${block.id} ${isAlternate ? "alternate" : ""}`}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <div className="content-block-image">
          <img src={block.image} alt={block.alt || ""} />
        </div>
        <div className={`content-block-text block-text-${block.id} ${isAlternate ? "alternate" : ""}`}>
          {block.name && <h3 className="content-block-title">{block.name}</h3>}
          {block.year && (
            <p className="content-block-description">{block.year}</p>
          )}
          {block.interest && (
            <p className="content-block-description">{block.interest}</p>
          )}
          <strong>{block.contribution && (
            <p className="content-block-description">{block.contribution}</p>
          )}</strong>
        </div>
      </div>
    );
};

export default TeamBlock;