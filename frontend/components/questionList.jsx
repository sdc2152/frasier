import React from "react";
import QuestionListItem from "./questionListItem";
import {connect} from "react-redux";
import {
  fetchQuestionList,
  receiveSortByIdx,
  SORT_BY
} from "../actions/questionListActions";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSortByChange(e) {
    e.preventDefault();
    this.props.receiveSortIdx(Number(e.target.value));
  }

  componentWillMount() {
    this.props.fetchQuestionList();
  }

  render() {
    const {list, sortByIdx} = this.props.questionList;
    const sortByList = SORT_BY.map((c, i) => (
      <option value={i} key={i}>{c}</option>
    ));
    const questions = list.map((c, i) => (
        <li key={i}>
          <QuestionListItem question={c}/>
        </li>
      )
    );
    return (
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">
              Sort By
            </label>
          </div>
          <select
            className="custom-select" id="inputGroupSelect01"
            onChange={this.handleSortByChange}
            defaultValue={sortByIdx}>
            {sortByList}
          </select>
        </div>
        <h1>Questions List</h1>
        <ul className="container">
          {questions}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    questionList: state.questionList,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchQuestionList: () => {dispatch(fetchQuestionList());},
    receiveSortIdx: (sortIdx) => {dispatch(receiveSortByIdx(sortIdx));}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
