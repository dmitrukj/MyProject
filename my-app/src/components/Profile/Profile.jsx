import React from "react";
import "../Profile/Profile.modules.css";
import RepositoryCard from "./Repository/RepositoryList/RepositoryCard";
import { repositoriesData } from "../../App";

const Profile = (props) => {
  return (
    <section className="profile-content">
      <div className="profile-content-card">
        <RepositoryCard repositoriesData={repositoriesData} />
      </div>
    </section>
  );
};

export default React.memo(Profile);
