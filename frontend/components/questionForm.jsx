import React from "react";
import {connect} from "react-redux";
import {
  CATEGORIES,
  DIFFICULTIES,
  postQuestion,
  receiveFormFieldChange,
  receiveDifficulty,
} from "../actions/questionFormActions";

const handleChange = (e) => {
  let change = {};
  const title = e.target.title;
  if (title === "category" || title === "difficulty") {
    change[title] = Number(e.target.value);
  }
  else {
    change[title] = e.target.value;
  }
  return change;
};

const QuestionForm = ({
  postQuestion,
  receiveFormFieldChange,
  questionForm,
  // TODO: can prolly remove this (not using seperate actions for different cha
  // nges)
  receiveDifficulty
}) => {
  const {body, answer, category, difficulty} = questionForm;
  return (
    <div className="container">

      <div className="row text-center">
        <div className="col">
          <h1>Submit Question</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <form
            onSubmit={(e) => {e.preventDefault(); postQuestion();}}>

            <div className="form-group row">
              <label htmlFor="inputBody"
                className="col-sm-3 col-form-label">
                Body
              </label>
              <div className="col-sm-9">
                <textarea title="body" className="form-control" id="inputBody"
                  value={body}
                  onChange={e => receiveFormFieldChange(handleChange(e))}>
                </textarea>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputAnswer"
                className="col-sm-3 col-form-label">
                Answer
              </label>
              <div className="col-sm-9">
                <textarea title="answer" className="form-control"
                  value={answer}
                  id="inputAnswer" onChange={
                  e => receiveFormFieldChange(handleChange(e))}>
                </textarea>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputCategory"
                className="col-sm-3 col-form-label">
                Category
              </label>
              <div className="col-sm-9">
                <select className="form-control" id="inputCategory"
                  title="category" value={category}
                  onChange={e => receiveFormFieldChange(handleChange(e))}>
                  {CATEGORIES.map((c, i) =><option value={i} key={i}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputDifficulty"
                className="col-sm-3 col-form-label">
                Difficulty
              </label>
              <div className="col-sm-9">
                <select className="form-control" id="inputDifficulty"
                  title="difficulty" value={difficulty}
                  onChange={e => receiveFormFieldChange(handleChange(e))}>
                  {DIFFICULTIES.map((c, i) =><option value={i} key={i}>{c}</option>)}
                </select>
              </div>
            </div>

            <input className="btn btn-lg btn-block btn-primary"
              type="submit" value="Submit Question"/>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
    questionForm: state.questionForm
  }
);

const mapDispatchToProps = dispatch => (
  {
    postQuestion: () => dispatch(postQuestion()),
    receiveFormFieldChange: change => dispatch(receiveFormFieldChange(change)),
    receiveDifficulty: difficulty => dispatch(receiveDifficulty(difficulty)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
