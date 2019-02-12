import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <h1 className="title">Memory Game</h1>
        <ul>
            <li id="score">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Header;