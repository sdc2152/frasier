import React from "react";
import Modal from "react-modal";

import PlayerContainer from "../player/playerContainer";

const customStyles = {
  content : {
    top                   : "50%",
    left                  : "50%",
    right                 : "auto",
    bottom                : "auto",
    marginRight           : "-50%",
    transform             : "translate(-50%, -50%)"
  }
};

class GameStartModal extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.props.startNewGame();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={!this.props.gameStart}
          style={customStyles}
          contentLabel="New Game"
        >
          <div className="row">
            <h2>New Game</h2>
          </div>
          <PlayerContainer />

          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={this.startGame}>
            start game
          </button>

        </Modal>
      </div>
    );
  }
}

export default GameStartModal;
