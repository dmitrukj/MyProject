import React from "react";
import classes from "./Nav.modules.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <a href="#s">Recent Repositories</a>
      <a href="#s">Recent activity</a>
    </nav>
  );
};
export default Nav;
