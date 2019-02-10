import React, { Component } from 'react';
import GameCard from "../GameCard";
import Wrapper from "./components/Wrapper";
import data from "../../data";

class Game extends Component {

    state = {
      data,
      score: 0,
      topScore: 0,
      message: "Click on a new image every time to score!"
    }
  
    render() {
      return (
        <Wrapper>
        <h1 className="title">Memory Game</h1>
        
        {this.state.data.map((item) => 
          <GameCard
            key = {item.id}
            id = {item.id}
            image = {item.image}
            clicked = {item.clicked}
            handleClick = {item.gameCardClick}
          />
        )}
  
      </Wrapper>
      );
    }
  }

  export default Game;