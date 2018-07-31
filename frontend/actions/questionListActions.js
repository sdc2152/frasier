//const SORT_BY = [
  //"ALPHABETICAL",
  //"REVERSE_ALPABETICAL",
  //"MOST_RECENT",
  //"LEAST_RECENT",
  //"EASIEST",
  //"HARDEST"
//];

export const RECEIVE_QUESTION_LIST = "RECEIVE_QUESTION_LIST";

export function receiveQuestionList(questionList) {
  return {
    type: RECEIVE_QUESTION_LIST,
    list: questionList
  };
}

export function fetchQuestionList() {
  return (dispatch, getState) => {
    const url = "/api/questions/list/";

    return fetch(url)
      .then(response => response.json())
      .then(json => {dispatch(receiveQuestionList(json));})
      .catch(ex => {console.log("parsing failed", ex);});
  };
}
