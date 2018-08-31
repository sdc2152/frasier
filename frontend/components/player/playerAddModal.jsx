import React from "react";
import Modal from "react-modal";

import PlayerForm from "./playerForm";
import PlayerList from "./playerList";

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

class PlayerAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      playersToAdd: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={this.openModal}>
          Add Players
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          contentLabel="Add Players"
        >
          <div className="border scroll-list scroll-list-sm">
            <PlayerList />
          </div>
          <PlayerForm />
          <button
            className="btn btn-secondary btn-lg btn-block mt-1"
            onClick={this.closeModal}>
            done
          </button>
        </Modal>
      </div>
    );
  }
}

export default PlayerAddModal;
