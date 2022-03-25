import React from "react";
import RepositoryCard from "../RepositoryList/RepositoryCard";
import { repositoriesData } from "../../../../App";

const RepositoryList = (props) => {
  return (
    <div className="repoCard">
      <RepositoryCard repositoriesData={repositoriesData} />
    </div>
  );
};
export default RepositoryList;
