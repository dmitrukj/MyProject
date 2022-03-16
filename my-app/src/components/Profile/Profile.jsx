import React from "react";
import "../Profile/Profile.modules.css";
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

const Profile = () => {
  return (
    <section className="profile-content">
      <div className="profile-content-card">
        <RepositoryCard />
      </div>
    </section>
  );
};

export default React.memo(Profile);
