import React from "react";
import {connect} from "react-redux";

import {
  receiveAnswer,
  addNewPlayer,
  startNewGame,
  resetGame,
  toggleQuestionModalDisplay,
} from "../../actions/gameActions";

import {RECEIVE_GAME_ANSWER} from "../../actions/gameActions";

import {
  getGameStart,
  getGameOver,
  getWinningPoints,
  getWinningPlayer,
  getQuestionModalDisplay,
} from "../../reducers/selectors";

import GameEndModal from "./gameEndModal";
import GameSetup from "./gameSetup";
import PlayerAddModal from "../player/playerAddModal";
import PlayerList from "../player/playerList";
import QuestionContainer from "../question/questionContainer";
// TODO: maybe dont need this
import QuestionModal from "../question/questionModal";

const Game = ({
  gameStart,
  gameOver,
  startNewGame,
  resetGame,
  winningPlayer,
  questionModalDisplay,
  toggleQuestionModalDisplay,
}) => {
  if (!gameStart) {
    return (
      <GameSetup startNewGame={startNewGame} />
    );
  }
  else {
    return (
      <div>
        <GameEndModal
          winningPlayer={winningPlayer}
          gameOver={gameOver}
          startNewGame={startNewGame}
          resetGame={resetGame}
        />
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
              <button onClick={toggleQuestionModalDisplay}>toggle</button>
              <QuestionModal isOpen={questionModalDisplay}>
                <QuestionContainer scope={RECEIVE_GAME_ANSWER} />
              </QuestionModal>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    gameStart: getGameStart(state),
    gameOver: getGameOver(state),
    winningPlayer: getWinningPlayer(state),
    questionModalDisplay: getQuestionModalDisplay(state),
    //TODO: i havent used this yet maybe remove
    winningPoints: getWinningPoints(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    addNewPlayer: name => dispatch(addNewPlayer(name)),
    setWinningPoints: points => dispatch(setWinningPoints(points)),
    startNewGame: () => dispatch(startNewGame()),
    resetGame: () => dispatch(resetGame()),
    toggleQuestionModalDisplay: () => dispatch(toggleQuestionModalDisplay()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
