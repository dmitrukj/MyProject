import React from "react";

const Repo1 = (props) => {
  return (
    <div className="repoCard">
      {props.repos.map((item) => (
        <ul>
          <li className="item__name">
            <img src="images/ava1.jpg" alt="ava1" />
            <h3>{item.author}</h3>
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
    </div>
  );
};
export default React.memo(Repo1);
