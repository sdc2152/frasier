import {connect} from "react-redux";
import {requestQuestion, receiveQuestion} from "../../actions/actions.js";
import Question from "./question.jsx";

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestQuestion: () => dispatch(requestQuestion()),
    // TODO: remove this after implementing API and proper question fetch
    receiveQuestion: (question) => dispatch(receiveQuestion(question))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
