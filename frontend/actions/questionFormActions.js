import {extractCookie} from "../utils";
import {getPostDataFromQuestionForm} from "../reducers/selectors";

export const RECEIVE_FORM_FIELD_CHANGE = "RECEIVE_FORM_FIELD_CHANGE";
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

export function postQuestion() {
  return (dispatch, getState) => {
    const data = getPostDataFromQuestionForm(getState());
    const csrfToken = extractCookie("csrftoken");
    fetch("/api/questions/submit/", {
      credentials: "include",
      mode: "same-origin",
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      }
    }).then(() => console.log("done"));
  };
}
