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


import GameStartModal from "./gameStartModal";
import QuestionContainer from "../question/questionContainer";
import PlayerAddModal from "../player/playerAddModal";
import PlayerList from "../player/playerList";

const Game = ({gameStart, gameOver, startNewGame}) => (
    <div>
      <GameStartModal
        gameStart={gameStart}
        gameOver={gameOver}
        startNewGame={startNewGame}
      >
      </GameStartModal>
      <div className="container">
        <h1>Game</h1>
        <div className="row">
          <div className="col">
            <PlayerAddModal />
            <PlayerList />
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
