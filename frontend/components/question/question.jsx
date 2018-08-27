import React from "react";
import {
  CORRECT_ANSWER,
  INCORRECT_ANSWER
} from "../../actions/actions";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
    this.props.fetchInitialQuestion();
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  answerQuestion(e) {
    this.setState({collapse: false});
    this.props.updateAndFetchRandom({"answer": e.target.value});
    if (this.props.gameStart) {
      this.props.receiveAnswer(e.target.value);
    }
  }

  skipQuestion() {
    this.setState({collapse: false});
    this.props.fetchRandomQuestion();
  }

  render() {
    const {question} = this.props;
    const {collapse} = this.state;
    return (
      <div>
        <br/>
        <div className="row">
          <div className="col">
            <img className="center-block"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col">
            <h4>Category: {question.category}</h4>
          </div>
          <div className="col">
            <h4 className="float-right">Difficulty: {question.difficulty}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{question.body}</p>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary btn-lg"
              onClick={this.toggle}>
              Show Answer
            </button>
          </div>
          <div className="col">
            <button type="button"
              className="btn btn-primary btn-lg float-right"
              onClick={this.skipQuestion}>
                Skip Question
            </button>
          </div>
        </div>

        <br/>

        <div className={collapse ? "show" : "collapse"}>
          <div className="card card-body">
            <p className="card-text">{question.answer}</p>
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-success"
                  value={CORRECT_ANSWER} onClick={this.answerQuestion}>
                  Correct
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-danger"
                  value={INCORRECT_ANSWER} onClick={this.answerQuestion}>
                  Incorrect
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Question;
