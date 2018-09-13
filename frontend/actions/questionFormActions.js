import {extractCookie} from "../utils";
import {getPostDataFromQuestionForm} from "../reducers/questionFormSelectors";

export const RECEIVE_FORM_FIELD_CHANGE = "RECEIVE_FORM_FIELD_CHANGE";
export const RESET_FORM_FIELD = "RESET_FORM_FIELD";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DEFAULT_CATEGORY_IDX = 0;
export const DEFAULT_DIFFICULTY_IDX = 0;

export const CATEGORIES = [
  "Daphne",
  "Eddie",
  "Frasier",
  "Martin",
  "Niles",
  "Roz"
];

export const DIFFICULTIES = [
  "Easy",
  "Medium",
  "Hard"
];

export function receiveFormFieldChange(change) {
  return {
    type: RECEIVE_FORM_FIELD_CHANGE,
    change: change
  };
}

export function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    errors: errors,
  };
}

export function resetFormField() {
  return {
    type: RESET_FORM_FIELD
  };
}

export function postQuestion() {
  return (dispatch, getState) => {
    const data = getPostDataFromQuestionForm(getState());
    const csrfToken = extractCookie("csrftoken");
    return fetch("/api/questions/submit/", {
      credentials: "include",
      mode: "same-origin",
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      }
    })
      .then(res => res.ok ? dispatch(resetFormField()) : res.json()
        .then(json => dispatch(receiveErrors(json))));
  };
}
