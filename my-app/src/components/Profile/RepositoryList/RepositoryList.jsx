import React from "react";
import RepositoryCard from "./RepositoryCard/RepositoryCard";
import Repo1 from "./Repo1";

const RepositoryList = (props) => {
  return (
    <div className="repoCard">
      <RepositoryCard
        repos={props.repos}
        repos2={props.repos2}
        repos3={props.repos3}
        repos4={props.repos4}
        repos5={props.repos5}
      />
      <Repo1 repos={props.repos} />
    </div>
  );
};
export default React.memo(RepositoryList);
