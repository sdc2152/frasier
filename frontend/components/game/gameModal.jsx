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

Modal.setAppElement("#react-root");

class GameModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: !props.gameStart,
      showPlayerError: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  startGame() {
    this.props.startNewGame();
    this.closeModal();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Game Setup"
        >
          <h2>Game Setup</h2>
          <a hidden={!this.state.showPlayerError}>test</a>
          <button onClick={this.startGame}>start game</button>
          <div>
          </div>
          <PlayerContainer />
        </Modal>
      </div>
    );
  }
}

export default GameModal;
