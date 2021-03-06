export const RECEIVE_CATEGORY_IDX = "RECEIVE_CATEGORY_IDX";
export const RECEIVE_DIFFICULTY_IDX = "RECEIVE_DIFFICULTY_IDX";
export const SET_DEFAULT_SETTINGS = "SET_DEFAULT_SETTINGS";

export const ALL_CATEGORIES_IDX = 0;
export const CATEGORIES = [
  "All",
  "Daphne",
  "Eddie",
  "Frasier",
  "Martin",
  "Niles",
  "Roz"
];

export const ALL_DIFFICULTIES_IDX = 0;
export const DIFFICULTIES = [
  "All",
  "Easy",
  "Medium",
  "Hard"
];

export function receiveCategoryIdx(categoryIdx) {
  return {
    type: RECEIVE_CATEGORY_IDX,
    categoryIdx: categoryIdx
  };
}

export function receiveDifficultyIdx(difficultyIdx) {
  return {
    type: RECEIVE_DIFFICULTY_IDX,
    difficultyIdx: difficultyIdx
  };
}

export function setDefaultSettings() {
  return {
    type: SET_DEFAULT_SETTINGS,
  };
}
