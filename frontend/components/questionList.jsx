import React from "react";
import QuestionListItem from "./questionListItem";
import {connect} from "react-redux";

import {
  getSortByIdx,
  getQuestionList,
} from "../reducers/selectors";

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
    const sortByIdx = Number(e.target.value);
    this.props.receiveSortIdx(sortByIdx);
    this.props.fetchQuestionList(sortByIdx);
  }

  componentWillMount() {
    this.props.fetchQuestionList(this.props.sortByIdx);
  }

  render() {
    const {list, sortByIdx} = this.props;
    const sortByList = SORT_BY.map((c, i) => (
      <option value={i} key={i}>{c}</option>
    ));
    const questions = list.map((c, i) => (
        <li className="list-group-item" key={i}>
          <QuestionListItem question={c}/>
        </li>
      )
    );
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>Questions List</h1>
          </div>
        </div>
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
        <div>
          <ul className="list-group">
            {questions}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    list: getQuestionList(state),
    sortByIdx: getSortByIdx(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchQuestionList: (sortByIdx) => {dispatch(fetchQuestionList(sortByIdx));},
    receiveSortIdx: (sortByIdx) => {dispatch(receiveSortByIdx(sortByIdx));}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
