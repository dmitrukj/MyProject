import React from "react";
import { NavLink } from "react-router-dom";
import "./RepositoryCard.css";
import PropTypes from 'prop-types';

RepositoryCard.propTypes={
  repository:PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    lastCommitDate: PropTypes.string,
    startAmount: PropTypes.number
  }),
}


export default function RepositoryCard({repository}) {
  return (
    <div className="repoCard">
        <ul>
          <li className="item__name">
            <h3>
              <NavLink to="/author">{repository.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>{repository.id}</li>
            <li>{repository.name}</li>
            <li>{repository.lastCommitDate}</li>
            <li>{repository.startAmount}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};


