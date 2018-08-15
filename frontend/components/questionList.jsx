import React from "react";
import {connect} from "react-redux";
import {fetchQuestionList} from "../actions/questionListActions";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchQuestionList();
  }

  render() {
    const {list} = this.props.questionList;
    const questions = list.map((c, i) =>(
      <li key={i}>
        {c.body}
      </li>
      ));
    return (
      <div className="container">
        <h1>Questions List</h1>
        <ul>
          {questions}
        </ul>
      </div>
    );
  }
}

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
