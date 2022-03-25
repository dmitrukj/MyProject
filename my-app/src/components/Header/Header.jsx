import React from "react";
import classes from "./Header.modules.css";
import SearchForm from "./search-form/SearchForm";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className="logo">
        <img src="images/Header/logo.png" alt="logo" />
        <SearchForm
          onSearchChange={props.onSearchChange}
          placeholder="Search MyGitHub..."
        />
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

export default React.memo(Header);
