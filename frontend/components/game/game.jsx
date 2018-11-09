import React from "react";
import {connect} from "react-redux";

import {
  receiveAnswer,
  startNewGame,
  goToNextPlayer,
  goToPrevPlayer,
  resetGame,
  toggleQuestionModalDisplay,
  receiveWinningPoints,
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
import QuestionModal from "../question/questionModal";

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
  winningPoints,
  receiveWinningPoints,
  toggleQuestionModalDisplay,
}) => {
  if (!gameStart) {
    return (
      <GameSetup
        winningPoints={winningPoints}
        receiveWinningPoints={receiveWinningPoints}
        startNewGame={startNewGame}
      />
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

          <div className="row text-center">
            <div className="col">
              <h1>Game</h1>
              <p>Winning Points: {winningPoints}</p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4">
              <button
                className="btn btn-lg btn-danger btn-block"
                onClick={startNewGame}
              >
                Restart Game
              </button>
            </div>

            <div className="col-lg-4 mt-2 mt-lg-0 mr-auto">
              <button
                className="btn btn-lg btn-success btn-block"
                onClick={toggleQuestionModalDisplay}
              >
                Draw Question
              </button>
              <QuestionModal isOpen={questionModalDisplay}>
                <QuestionContainer scope={RECEIVE_GAME_ANSWER} />
              </QuestionModal>
            </div>

            <div className="col-lg-4 mt-2 mt-lg-0 ml-auto">
              <PlayerAddModal />
            </div>

          </div>


          <div className="row text-center">

            <div className="col-sm-5 p-3 mx-auto">
              <div className="row">
                <div className="col text-right">
                  Current Player:
                </div>
                <div className="col text-left">
                  <h5>
                    {currentPlayer && currentPlayer.name}
                  </h5>
                </div>
              </div>
              <div className="row mt-0">
                <div className="col text-right">
                  Points:
                </div>
                <div className="col text-left">
                  {currentPlayer && currentPlayer.points}
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-6 px-1">
                  <button className="btn btn-block" onClick={goToPrevPlayer}>
                    previous
                  </button>
                </div>
                <div className="col-sm-6 px-1">
                  <button className="btn btn-block" onClick={goToNextPlayer}>
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col frasier-chess md-img"></div>
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
    winningPoints: getWinningPoints(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    goToNextPlayer: () => dispatch(goToNextPlayer()),
    goToPrevPlayer: () => dispatch(goToPrevPlayer()),
    setWinningPoints: points => dispatch(setWinningPoints(points)),
    startNewGame: () => dispatch(startNewGame()),
    resetGame: () => dispatch(resetGame()),
    toggleQuestionModalDisplay: () => dispatch(toggleQuestionModalDisplay()),
    receiveWinningPoints: winningPoints => (
      dispatch(receiveWinningPoints(winningPoints))
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
