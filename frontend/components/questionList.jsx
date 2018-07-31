import React from "react";
import {connect} from "react-redux";
import {fetchQuestionList} from "../actions/questionListActions";

const QuestionList = ({questionList, fetchQuestionList}) => {
  const {list} = questionList;

  // TODO: change this so i don't have to do the list length check
  // look up lifecycle method to use maybe or do initial check
  if (list.length === 0) {
    console.log("here");
    fetchQuestionList();
  }

  const questions = list.map((c, i) =>(<li key={i}>{c.body}</li>));
  return (
    <div className="container">
      <h1>Questions List</h1>
      <ul>
        {questions}
      </ul>
    </div>
  );
};

const mapStateToProps = state => (
  {
    questionList: state.questionList
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchQuestionList: () => {dispatch(fetchQuestionList());}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
