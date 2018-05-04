import React from "react";

import {
  Card,
  CardBody,
  CardText,
} from "reactstrap";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
    // TODO: this will fetch a new question every time navigate to question
    // page. Maybe add a setting that checks for the need to fetch a question
    // before fetching fetchQuestionIfNeeded(params) => if state.questionNeded
    // then fetch question
    this.props.fetchRandomQuestion({
      "category": this.props.category,
      "difficulty": this.props.difficulty
    });
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  skipQuestion() {
    this.setState({collapse: false});
    this.props.fetchRandomQuestion({
      "exclude_id": this.props.question.id,
      "category": this.props.category,
      "difficulty": this.props.difficulty
    });
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
                <button type="button" className="btn btn-success">
                  Correct
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-danger">
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
