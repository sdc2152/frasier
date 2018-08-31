import React from "react";
import {connect} from "react-redux";

import {
  receiveAnswer,
  addNewPlayer,
  startNewGame
} from "../../actions/gameActions";

import {
  getGameStart,
  getGameOver,
  getWinningPoints,
} from "../../reducers/selectors";

import GameSetup from "./gameSetup";
import QuestionContainer from "../question/questionContainer";
import PlayerAddModal from "../player/playerAddModal";
import PlayerList from "../player/playerList";

const Game = ({
  gameStart,
  gameOver,
  winningPoints,
  startNewGame
}) => {
  if (!gameStart) {
    return (
      <GameSetup startNewGame={startNewGame} />
    );
  }
  else {
    return (
      <div>
        <div className="container">
          <h1>Game</h1>
          <div className="row">
            <div className="col">
              <PlayerAddModal />
              <div className="border scroll-list scroll-list-sm">
                <PlayerList />
              </div>
            </div>
            <div className="col">
              <QuestionContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    gameStart: getGameStart(state),
    gameOver: getGameOver(state),
    winningPoints: getWinningPoints(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    addNewPlayer: name => dispatch(addNewPlayer(name)),
    setWinningPoints: points => dispatch(setWinningPoints(points)),
    startNewGame: () => dispatch(startNewGame()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
