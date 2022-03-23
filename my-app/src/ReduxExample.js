import { createStore } from "redux";

const action = {
  type: "add",
};
const action2 = {
  type: "add2",
};
const reduser = (state = [], action) => {
  if (action.type == "add") {
    return state.concat(1);
  } else {
    return state;
  }
};
const store = createStore(reduser);
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());
store.dispatch(action2);
console.log(store.getState());
