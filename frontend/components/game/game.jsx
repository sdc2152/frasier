import React from "react";
import {connect} from "react-redux";

import {
  receiveAnswer,
  addNewPlayer,
  startNewGame
} from "../../actions/gameActions";

import {
  getGameStart,
  getGameOver
} from "../../reducers/selectors";


import GameModal from "./gameModal";
import QuestionContainer from "../question/questionContainer";
import PlayerContainer from "../player/playerContainer";

const Game = ({gameStart, gameOver, startNewGame}) => (
    <div>
      <GameModal
        gameStart={gameStart}
        gameOver={gameOver}
        startNewGame={startNewGame}
      >
      </GameModal>
      <div className="container">
        <h1>Game</h1>
        <div className="row">
          <div className="col">
            <PlayerContainer />
          </div>
          <div className="col">
            <QuestionContainer />
          </div>
        </div>
      </div>
    </div>
);

const mapStateToProps = state => (
  {
    gameStart: getGameStart(state),
    gameOver: getGameOver(state)
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    addNewPlayer: name => dispatch(addNewPlayer(name)),
    startNewGame: () => dispatch(startNewGame())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
