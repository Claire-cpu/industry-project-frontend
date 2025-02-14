import { useState, useEffect } from "react";
import clippy from "../../assets/images/1997.png";
import blibby from "../../assets/images/2005.png";
import codex from "../../assets/images/2012.png";
import Azure from "../../assets/images/2018.png";
import byte from "../../assets/images/2024.png";
import "./Animation.scss"; 

const characterImages = [
  clippy, blibby, codex, Azure, byte
]; 

const years = [1997, 2005, 2012, 2018, 2024, "Future AI 🚀"];

const Animation = ({ score }) => {  
  const characterIndex = Math.floor(score / 10); 
  const characterImage = characterImages[Math.min(characterIndex, characterImages.length - 1)];
  const moveDistance = 14; 
  return (
    <div className="game-container">
      <div className="track-container">
        <div className="track">
          {years.map((year, index) => (
            <span key={index} className="year" style={{ left: `${index * (100 / (years.length - 1))}%` }}>
              {year}
            </span>
          ))}
        </div>
      </div>
      <div
        className="small-character"
        style={{ transform: `translateX(${score * moveDistance}px)` }} 
      >
        <img src={characterImage} alt="Small Character" />
      </div>
    </div>
  );
};

export default Animation;
