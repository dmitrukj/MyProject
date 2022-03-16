import React from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

const repos = [
  {
    id: "id 45715",
    name: "Project",
    author: "@dmitruk89",
    lastCommitDate: "07.03.2022",
    startAmount: 7,
  },
];

const RepositoryList = (props) => {
  return (
    <div className="repoCard">
      <RepositoryCard />
    </div>
  );
};
export default React.memo(RepositoryList);
