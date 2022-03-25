import { SET_SEARCH_TEXT } from "./action";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      return action.payload;
    }

    default:
      return state;
  }
};
