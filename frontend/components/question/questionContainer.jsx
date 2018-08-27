import Question from "./question.jsx";
import {connect} from "react-redux";
import {
  fetchRandomQuestion,
  fetchInitialQuestion,
  updateAndFetchRandom
} from "../../actions/actions";

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
    updateAndFetchRandom: data => dispatch(updateAndFetchRandom(data)),
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Question);
