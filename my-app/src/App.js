import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import "./ReduxExample";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              repos={props.repos}
              repos2={props.repos2}
              repos3={props.repos3}
              repos4={props.repos4}
              repos5={props.repos5}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default React.memo(App);
