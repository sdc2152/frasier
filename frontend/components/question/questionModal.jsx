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

const QuestionModal = ({isOpen, children}) => (
  <div>
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="New Game"
    >
      {children}
    </Modal>
  </div>
);

export default QuestionModal;
