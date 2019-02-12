import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GameCard;