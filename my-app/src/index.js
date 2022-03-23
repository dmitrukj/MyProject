import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state.store}
        repos={store.repos}
        repos2={store.repos2}
        repos3={store.repos3}
        repos4={store.repos4}
        repos5={store.repos5}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
