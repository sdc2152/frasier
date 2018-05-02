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
    this.props.fetchRandomQuestion();
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  skipQuestion() {
    this.setState({collapse: false});
    this.props.fetchRandomQuestion({
      "exclude_id": this.props.question.id
    });
  }

  render() {
    const {question} = this.props;
    const {collapse} = this.state;
    return (
      <Container>
        <img className="center-block"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />

        <h3>{question.category}</h3>

        <p>{question.body}</p>


        <Button size="lg" color="primary" onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
        >
          Show Answer
        </Button>

        <Button className="float-right" size="lg" color="primary"
          style={{ marginBottom: "1rem" }} onClick={this.skipQuestion}
        >
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
      </Container>
    );
  }
}

export default Question;
