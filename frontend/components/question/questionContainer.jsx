import Question from "./question.jsx";
import {connect} from "react-redux";
import {fetchRandomQuestion} from "../../actions/actions.js";

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRandomQuestion: (current_question_id) => {
      dispatch(fetchRandomQuestion(current_question_id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
