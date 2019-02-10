import React from "react";
import "./style.css";

const GameCard = props => (
    <div 
        role="img"
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
    />
);

export default GameCard;