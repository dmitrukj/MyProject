import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.modules.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile">All repositories</NavLink>
      <NavLink to="/recent activity">Recent activity</NavLink>
    </nav>
  );
};
export default React.memo(Nav);
