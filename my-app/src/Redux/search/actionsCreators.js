import { SET_SEARCH_TEXT } from "./action";

export const setSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text,
  };
};
