import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
  name: "Github",
});

const reposotoriesReduser = (state = [], action) => {
  if (action.type === "LOAD_REPOSITORIES") {
    return state.concat(action.payload);
  } else {
    return state;
  }
};

export const createApplicationStore = () =>
  createStore(
    combineReducers({ reposotoriesReduser }),
    composeEnhancers(applyMiddleware(thunk))
  );
