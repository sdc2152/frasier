import Question from "./question.jsx";
import {connect} from "react-redux";
import {
  fetchRandomQuestion,
  fetchInitialQuestion,
  answerQuestion
} from "../../actions/questionActions";

import {receiveAnswer} from "../../actions/gameActions";

const mapStateToProps = state => (
  {
    question: state.question,
    gameStart: state.game.gameStart
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchRandomQuestion: () => dispatch(fetchRandomQuestion()),
    fetchInitialQuestion: () => dispatch(fetchInitialQuestion()),
    answerQuestion: data => dispatch(answerQuestion(data)),
    receiveAnswer: (answer, type) => dispatch(receiveAnswer(answer, type)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Question);
