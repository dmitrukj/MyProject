import React from "react";
import "../Profile/Profile.modules.css";
import RepositoryCard from "./RepositoryCard/RepositoryCard";

const Profile = (props) => {
  return (
    <section className="profile-content">
      <div className="profile-content-card">
        <RepositoryCard
          repos={props.repos}
          repos2={props.repos2}
          repos3={props.repos3}
          repos4={props.repos4}
          repos5={props.repos5}
        />
      </div>
    </section>
  );
};

export default React.memo(Profile);
