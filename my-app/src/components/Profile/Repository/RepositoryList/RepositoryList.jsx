import React from "react";
import RepositoryCard from "./RepositoryCard/RepositoryCard";
import { repositoriesData } from "../../../../App";

const RepositoryList = (props) => {
  return (
    <div className="repoCard">
      <RepositoryCard repositoriesData={repositoriesData} />
    </div>
  );
};
export default React.memo(RepositoryList);
