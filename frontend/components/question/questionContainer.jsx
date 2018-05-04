import Question from "./question.jsx";
import {connect} from "react-redux";
import {
  fetchRandomQuestion,
  fetchInitialQuestion
} from "../../actions/actions";
import {
  getCategoryName,
  getDifficultyName
} from "../../reducers/settingsSelectors";

function mapStateToProps(state) {
  return {
    question: state.question,
    category: getCategoryName(state),
    difficulty: getDifficultyName(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRandomQuestion: (params) => {
      dispatch(fetchRandomQuestion(params));
    },
    fetchInitialQuestion: () => {
      dispatch(fetchInitialQuestion());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
