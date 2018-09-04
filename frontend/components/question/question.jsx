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
    const {difficulty, category, body, answer} = this.props.question;
    const {collapse} = this.state;
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className={`${category}-${difficulty} md-img`}/>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h4>Category: {category}</h4>
          </div>
          <div className="col">
            <h4 className="float-right">
              Difficulty: <span className={difficulty}>
                {difficulty}
              </span>
            </h4>
          </div>
        </div>
        <div className="row question-body">
          <div className="col">
            <span className="align-middle">{body}</span>
          </div>
        </div>

        <div className={collapse ? "show" : "collapse"}>
          <div className="card card-body">
            <p className="card-text">{answer}</p>
            <div className="row">
              <div className="col-sm-12 col-lg-4">
                <button type="button" className="btn btn-success btn-block"
                  value={CORRECT_ANSWER} onClick={this.answerQuestion}>
                  Correct
                </button>
              </div>
              <div className="col-sm-12 col-lg-4 mt-sm-1 mt-lg-0">
                <button type="button" className="btn btn-danger btn-block"
                  value={INCORRECT_ANSWER} onClick={this.answerQuestion}>
                  Incorrect
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={this.toggle}>
              Show Answer
            </button>
          </div>
          <div className="col-sm-12 col-lg-6 mt-lg-0 mt-sm-1">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={this.skipQuestion}>
                Skip Question
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Question;
