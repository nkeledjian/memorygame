import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.gameCardClick(props.id)}>x</span>    
  </div>
);

export default GameCard;