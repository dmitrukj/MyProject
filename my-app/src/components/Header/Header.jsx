import React from "react";
import classes from "./Header.modules.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="logo">
        <img src="images/Header/logo.png" alt="logo" />
        <form>
          <input
            type="text"
            name="text"
            class="search"
            placeholder="Search MyGitHub..."
          ></input>
        </form>
      </div>
      <div>
        <h1>MyGitHub</h1>
      </div>
      <div className="user">
        <a href="#s">
          <img src="images/Header/notif.png" alt="notif" />
        </a>
      </div>
    </header>
  );
};

export default Header;
