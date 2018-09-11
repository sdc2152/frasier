import React from "react";
import {connect} from "react-redux";

import {
  receiveAnswer,
  startNewGame,
  goToNextPlayer,
  goToPrevPlayer,
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
  getCurrentPlayer,
} from "../../reducers/selectors";

import GameEndModal from "./gameEndModal";
import GameSetup from "./gameSetup";
import PlayerAddModal from "../player/playerAddModal";
import QuestionContainer from "../question/questionContainer";
// TODO: maybe dont need this
import QuestionModal from "../question/questionModal";

// TODO: add player list???
const Game = ({
  currentPlayer,
  gameStart,
  gameOver,
  winningPlayer,
  goToNextPlayer,
  goToPrevPlayer,
  startNewGame,
  resetGame,
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
              <h6>Current Player: {currentPlayer.name}</h6>
              <button onClick={goToPrevPlayer}>previous</button>
              <button onClick={goToNextPlayer}>next</button>
            </div>

            <div className="col">
              <button
                onClick={toggleQuestionModalDisplay}
                className="btn btn-lg btn-primary btn-block"
              >
                Draw Question
              </button>

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
    currentPlayer: getCurrentPlayer(state),
    //TODO: i havent used this yet maybe remove
    winningPoints: getWinningPoints(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    // TODO: check if needed
    //addNewPlayer: name => dispatch(addNewPlayer(name)),
    goToNextPlayer: () => dispatch(goToNextPlayer()),
    goToPrevPlayer: () => dispatch(goToPrevPlayer()),
    setWinningPoints: points => dispatch(setWinningPoints(points)),
    startNewGame: () => dispatch(startNewGame()),
    resetGame: () => dispatch(resetGame()),
    toggleQuestionModalDisplay: () => dispatch(toggleQuestionModalDisplay()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
