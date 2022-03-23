import React from "react";
import { NavLink } from "react-router-dom";
import "./RepositoryCard.css";

const RepositoryCard = (props) => {
  return (
    <div className="repoCard">
      {props.repos.map((item) => (
        <ul>
          <li className="item__name">
            <img src="images/ava1.jpg" alt="ava1" />
            <h3>
              <NavLink to="/author">{item.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>
              <img src="images/Profile/icon.png" alt="icon" />
            </li>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.lastCommitDate}</li>
            <li>{item.startAmount}</li>
          </div>
        </ul>
      ))}
      {props.repos2.map((item) => (
        <ul>
          <li className="item__name">
            <img src="images/ava2.jpg" alt="ava2" />
            <h3>
              <NavLink to="/author">{item.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>
              <img src="images/Profile/icon.png" alt="icon" />
            </li>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.lastCommitDate}</li>
            <li> {item.startAmount}</li>
          </div>
        </ul>
      ))}
      {props.repos3.map((item) => (
        <ul>
          <li className="item__name">
            <img src="images/ava3.jpg" alt="ava3" />
            <h3>
              <NavLink to="/author">{item.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>
              <img src="images/Profile/icon.png" alt="icon" />
            </li>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.lastCommitDate}</li>
            <li> {item.startAmount}</li>
          </div>
        </ul>
      ))}
      {props.repos4.map((item) => (
        <ul>
          <li className="item__name">
            <img src="images/ava4.jpg" alt="ava4" />
            <h3>
              <NavLink to="/author">{item.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>
              <img src="images/Profile/icon.png" alt="icon" />
            </li>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.lastCommitDate}</li>
            <li> {item.startAmount}</li>
          </div>
        </ul>
      ))}
      {props.repos5.map((item) => (
        <ul>
          <li className="item__name">
            <img src="images/ava5.jpg" alt="ava5" />
            <h3>
              <NavLink to="/author">{item.author}</NavLink>
            </h3>
          </li>
          <div className="item">
            <li>
              <img src="images/Profile/icon.png" alt="icon" />
            </li>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.lastCommitDate}</li>
            <li> {item.startAmount}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default React.memo(RepositoryCard);
