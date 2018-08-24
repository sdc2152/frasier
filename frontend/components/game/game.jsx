import React from "react";
import QuestionContainer from "../question/questionContainer";
import Player from "../player/player";

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Game</h1>
        <div className="row">
          <div className="col">
            <Player />
          </div>
          <div className="col">
            <QuestionContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
