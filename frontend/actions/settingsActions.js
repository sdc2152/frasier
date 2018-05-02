export const RECEIVE_SETTINGS = "RECEIVE_SETTINGS";
export const RECEIVE_CATEGORY_IDX = "RECEIVE_CATEGORY";

export const CATEGORIES = [
  "Any",
  "Daphne",
  "Eddie",
  "Frasier",
  "Martin",
  "Niles",
  "Roz"
];

export function receiveSettings(settings) {
  return {
    type: RECEIVE_SETTINGS,
    settings: settings
  };
}

export function receiveCategoryIdx(categoryIdx) {
  return {
    type: RECEIVE_CATEGORY_IDX,
    categoryIdx: categoryIdx
  };
}
