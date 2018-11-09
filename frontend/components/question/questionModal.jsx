import React from "react";
import Modal from "react-modal";
import {baseModalStyle} from "../../static/styles"

// TODO change this so modals can be exited

const QuestionModal = ({isOpen, children}) => (
  <div>
    <Modal
      isOpen={isOpen}
      style={baseModalStyle}
      contentLabel="Current Question"
    >
      {children}
    </Modal>
  </div>
);

export default QuestionModal;
