import React from "react";
import { NavLink } from "react-router-dom";
import "./RepositoryCard.css";

const RepositoryCard = (props) => {
  return (
    <div className="repoCard">
      {props.repositoriesData.map((item) => (
        <ul>
          <li className="item__name">
            <h3>
              <NavLink to="/author">{item.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.lastCommitDate}</li>
            <li>{item.startAmount}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default React.memo(RepositoryCard);
