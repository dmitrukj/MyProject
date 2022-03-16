import React from "react";
import "./RepositoryCard.css";

const repos = [
  {
    id: "id 45715",
    name: "Project",
    author: "@dmitruk89",
    lastCommitDate: "07.03.2022",
    startAmount: 7,
  },
];

const repos2 = [
  {
    id: "id 87955",
    name: "MyShop",
    author: "@svetapusik",
    lastCommitDate: "01.03.2021",
    startAmount: 10,
  },
];

const repos3 = [
  {
    id: "id 80085",
    name: "Social-network",
    author: "@dimon",
    lastCommitDate: "12.03.2020",
    startAmount: 4,
  },
];

const RepositoryCard = (props) => {
  return (
    <div className="repoCard">
      {repos.map((item) => (
        <ul>
          <li>
            <h3>{item.author}</h3>
          </li>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.lastCommitDate}</li>
          <li>{item.startAmount}</li>
        </ul>
      ))}
      {repos2.map((item) => (
        <ul>
          <li>
            <h3>{item.author}</h3>
          </li>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.lastCommitDate}</li>
          <li> {item.startAmount}</li>
        </ul>
      ))}
      {repos3.map((item) => (
        <ul>
          <li>
            <h3>{item.author}</h3>
          </li>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.lastCommitDate}</li>
          <li> {item.startAmount}</li>
        </ul>
      ))}
    </div>
  );
};
export default React.memo(RepositoryCard);
