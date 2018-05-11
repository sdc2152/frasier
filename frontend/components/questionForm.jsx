import React from "react";
import {connect} from "react-redux";
import {
  DEFAULT_CATEGORY_IDX,
  CATEGORIES,
  DEFAULT_DIFFICULTY_IDX,
  DIFFICULTIES,
  postQuestion,
  receiveFormFieldChange
} from "../actions/questionFormActions";

const handleChange = (e) => {
  let change = {};
  change[e.target.title] = e.target.value;
  return receiveFormFieldChange(change);
};

const QuestionForm = ({dispatch}) => {
  return (
    <div className="container">
      <div className="row">
        <form
          onSubmit={(e) => {e.preventDefault(); dispatch(postQuestion());}}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Body</label>
            </div>
            <input title="body"
              onChange={e => dispatch(handleChange(e))}>
            </input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Answer</label>
            </div>
            <input title="answer"
              onChange={e => dispatch(handleChange(e))}>
            </input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Category</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
              title="category" defaultValue={DEFAULT_CATEGORY_IDX}
              onChange={e => dispatch(handleChange(e))}>
              {CATEGORIES.map((c, i) =><option key={i}>{c}</option>)}
            </select>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Category</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"
              title="difficulty" defaultValue={DEFAULT_DIFFICULTY_IDX}
              onChange={e => dispatch(handleChange(e))}>
              {DIFFICULTIES.map((c, i) =><option key={i}>{c}</option>)}
            </select>
          </div>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
};


export default connect()(QuestionForm);
