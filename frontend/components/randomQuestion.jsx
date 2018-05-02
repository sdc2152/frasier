import React from "react";
import QuestionContainer from "./question/questionContainer";
import SettingsContainer from "./settings/settingsContainer";
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
          <SettingsContainer/>
        </Col>
        <Col>
          <QuestionContainer/>
        </Col>
      </Row>
    </Container>
  );
};
export default randomQuestion;
