import {
  CATEGORIES,
  ALL_CATEGORIES_IDX,
  DIFFICULTIES,
  ALL_DIFFICULTIES_IDX
} from "./settingsActions";

export const REQUEST_QUESTION = "REQUEST_QUESTION";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export function requestQuestion() {
  return {
    type: REQUEST_QUESTION,
  };
}

export function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question: question
  };
}

export function fetchRandomQuestion(params={}) {
  if (params.category === CATEGORIES[ALL_CATEGORIES_IDX]) {
    delete params.category;
  }
  if (params.difficulty === DIFFICULTIES[ALL_DIFFICULTIES_IDX]) {
    delete params.difficulty;
  }
  const query = Object.keys(params).map(k => `${k}=${params[k]}`).join("&");
  const url = `/api/questions/random/?${query}`;
  console.log(url);
  return dispatch => {
    return fetch(url)
      .then((response) => {
        return response.json();})
      .then((json) => {dispatch(receiveQuestion(json));})
      .catch((ex) => {console.log("parsing failed", ex);});
  };
}
