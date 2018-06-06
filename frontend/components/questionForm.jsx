import React from "react";
import {connect} from "react-redux";
import {
  CATEGORIES,
  DIFFICULTIES,
  postQuestion,
  receiveFormFieldChange
} from "../actions/questionFormActions";

const handleChange = (e) => {
  let change = {};
  change[e.target.title] = e.target.value;
  return change;
};

const QuestionForm = ({postQuestion, receiveFormFieldChange, questionForm}) => {
  const {body, answer, category, difficulty} = questionForm;
  return (
    <div className="container">
      <div className="row">
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

          <input type="submit"/>
        </form>
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
    postQuestion: () => {dispatch(postQuestion());},
    receiveFormFieldChange: change => {
      dispatch(receiveFormFieldChange(change));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
