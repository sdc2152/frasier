import React from "react";
import QuestionContainer from "./question/questionContainer";
import {
  Col,
  Row,
  Container
} from "reactstrap";

const randomQuestion = () => {
  return (
    <Container>
      <Row>
        <Col>
          This is the settings part
        </Col>
        <Col>
          <QuestionContainer/>
        </Col>
      </Row>
    </Container>
  );
};
export default randomQuestion;
