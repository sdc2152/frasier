import {getQueryParams, getQuestion} from "../reducers/selectors";
import {extractCookie} from "../utils";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question: question
  };
}

export function fetchRandomQuestion() {
  return (dispatch, getState) => {
    // get query params from state and convert to string
    const params = getQueryParams(getState());
    const paramString = Object.keys(params)
      .map(k => `${k}=${params[k]}`).join("&");
    const url = `/api/questions/random/?${paramString}`;
    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(json => {dispatch(receiveQuestion(json));})
      .catch(ex => {console.log("parsing failed", ex);});
  };
}

export function updateAndFetchRandom(data) {
  return (dispatch, getState) => {
    const questionId = getQuestion(getState()).id;
    const csrfToken = extractCookie("csrftoken");
    const url = `/api/questions/${questionId}/increment/`;
    fetch(url, {
      credentials: "include",
      mode: "same-origin",
      body: JSON.stringify(data),
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      }
    }).then(() => dispatch(fetchRandomQuestion()));
  };
}

export function fetchInitialQuestion() {
  return (dispatch, getState) => {
    if (Object.keys(getState().question).length === 0) {
      dispatch(fetchRandomQuestion());
    }
  };
}
