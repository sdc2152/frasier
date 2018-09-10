export const SORT_BY = [
  "Easy to Hard",
  "Hard to Easy",
  "Most Recent",
  "Least Recent",
];

export const EASY_TO_HARD_IDX = 0;
export const DEFAULT_SORT_IDX = EASY_TO_HARD_IDX;

export const RECEIVE_QUESTION_LIST = "RECEIVE_QUESTION_LIST";
export const RECEIVE_SORT_IDX = "RECEIVE_SORT_IDX";

export function receiveQuestionList(questionList) {
  return {
    type: RECEIVE_QUESTION_LIST,
    questionList: questionList
  };
}

export function fetchQuestionList() {
  return dispatch => {
    return fetch("/api/questions/list/")
      .then(response => response.json())
      .then(json => {dispatch(receiveQuestionList(json));})
      .catch(ex => {console.log("parsing failed", ex);});
  };
}

export function receiveSortByIdx(sortByIdx) {
  return dispatch => {
    dispatch({type: RECEIVE_SORT_IDX, sortByIdx: sortByIdx});
    const url = `/api/questions/list/?sort=${sortByIdx}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {dispatch(receiveQuestionList(json));})
      .catch(ex => {console.log("parsing failed", ex);});
  };
}

