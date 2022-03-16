import React from "react";
import classes from "./Nav.modules.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <a href="/recent repo">Recent Repositories</a>
      <a href="/recent activity">Recent activity</a>
    </nav>
  );
};
export default React.memo(Nav);
