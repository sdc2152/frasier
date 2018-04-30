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
