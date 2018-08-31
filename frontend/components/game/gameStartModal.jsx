import React from "react";
import Modal from "react-modal";

import PlayerForm from "../player/playerForm";
import PlayerList from "../player/playerList";

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
          <h2>New Game</h2>
          <div className="border scroll-list scroll-list-sm">
            <PlayerList />
          </div>
          <PlayerForm />
          <button
            className="btn btn-secondary btn-lg btn-block mt-1"
            onClick={this.startGame}>
            start game
          </button>

        </Modal>
      </div>
    );
  }
}

export default GameStartModal;
