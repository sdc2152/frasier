import React from "react";
import Modal from "react-modal";

const customStyles = {
  content : {
    top                   : "50%",
    left                  : "50%",
    right                 : "auto",
    bottom                : "auto",
    marginRight           : "-50%",
    transform             : "translate(-50%, -50%)",
  }
};

const Winner = ({winningPlayer}) => {
  if (winningPlayer === undefined) {
    return null;
  }
  return (
    <h4>Winner: {winningPlayer.name}</h4>
  );
};

const GameEndModal = ({gameOver, startNewGame, resetGame, winningPlayer}) => (
  <Modal
    isOpen={gameOver}
    style={customStyles}
    contentLabel="New Game"
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Game Over</h2>
        </div>
      </div>
      <div className="row">
        <Winner winningPlayer={winningPlayer}/>
      </div>
      <div className="row">
        <button className="btn btn-primary btn-block" onClick={resetGame} >
          play again
        </button>
      </div>
      <div className="row">
        <button className="btn btn-secondary btn-block mt-sm-1"
          onClick={startNewGame}
        >
          new game
        </button>
      </div>
    </div>
  </Modal>
);

export default GameEndModal;
