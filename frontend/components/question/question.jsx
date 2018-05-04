import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardText,
  Container,
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
      "category": this.props.category
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
        <img className="center-block"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
        <h3>{question.category}</h3>
        <p>{question.body}</p>
        <Button size="lg" color="primary" onClick={this.toggle}>
          Show Answer
        </Button>
        <Button className="float-right" size="lg" color="primary"
          onClick={this.skipQuestion}>
            Skip Question
        </Button>
        <div className={collapse ? "show" : "collapse"}>
          <Card>
            <CardBody>
              <CardText>{question.answer}</CardText>
              <Button className="btn-success float-left">
                Correct
              </Button>
              <Button className="btn-danger float-right">
                Incorrect
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Question;
