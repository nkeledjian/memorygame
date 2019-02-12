import React, { Component } from 'react';
import GameCard from "../GameCard";
import Header from "../Header";
import Wrapper from "../Wrapper";
import data from "../../data.json";
import Container from "../Container";

class Game extends Component {

  state = {
    data,
    score: 0,
    topScore: 0,
    // message: "Click on a new image every time to score!"
  }

  // card data is randomized
  shuffleCards = data => {
    let newData = data.sort(function (a, b) { return 0.5 - Math.random() });
    return newData;
  };

  // all clicked props changed to false
  resetCards = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    // console.log(data);
    // console.log(resetData);
    return this.shuffleCards(resetData);
  };

  // correctly guessed data
  correctGuess = newData => {
    let newScore = this.state.score;
    newScore++
    let newTopScore = Math.max(newScore, this.state.topScore);

    this.setState({
        data: this.shuffleCards(newData),
        score: newScore,
        topScore: newTopScore,
        // animation: ""
    })
  }

  // game is reset with new card formation - runs resetCards function
  incorrectGuess = newData => {
    this.setState({
        data: this.resetCards(newData),
        score: 0
    })
  }

  // upon card click, function checks if card has been clicked before - update clicked property for cards
  gameCardClick = id => {
    let guessedCorrectly = false;
    console.log("correct guess", guessedCorrectly);
    // newData contains an array with the updated click properties
    const newData = this.state.data.map(item => {
      if (item.id === id) {
        if(!item.clicked) {
          item.clicked = true;
          guessedCorrectly = true;
        }
      }
      return item;
    });
    // main function for handling correct and incorrect guessed
    // if guessedCorrectly = true, correctGuess function initialized, if guessed wrong, incorrectGuess function initalized
    guessedCorrectly ? this.correctGuess(newData) : this.incorrectGuess(newData);
  };

  // react render method renders the data
  render() {
    return (
      <Wrapper>
      <Container>
        <Header score={this.state.score} topScore = {this.state.topScore} />
      </Container>
          {this.state.data.map((item) =>
          <GameCard
            key={item.id}
            id={item.id}
            image={item.image}
            clicked={item.clicked}
            handleClick={this.gameCardClick}
          />
          )}
      </Wrapper>
    );
  }
}

export default Game;