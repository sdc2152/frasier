import Question from "./question.jsx";
import {connect} from "react-redux";
import {
  fetchRandomQuestion,
  fetchInitialQuestion,
  updateAndFetchRandom
} from "../../actions/actions";

const mapStateToProps = state => (
  {
    question: state.question
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchRandomQuestion: () => {dispatch(fetchRandomQuestion());},
    fetchInitialQuestion: () => {dispatch(fetchInitialQuestion());},
    updateAndFetchRandom: data => {dispatch(updateAndFetchRandom(data));}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Question);
