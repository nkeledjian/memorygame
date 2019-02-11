import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <ul>
            <li id="score">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Header;