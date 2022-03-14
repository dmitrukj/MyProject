import React from "react";
import "../Profile/Profile.modules.css";

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
    <profile className="profile-content">
      <div className="profile-content-card">
        {repos.map((item) => (
          <h3>{item.name}</h3>
        ))}
        <div className="profile-content-data">
          {repos.map((item) => (
            <p>
              {item.id} {item.author} {item.lastCommitDate} {item.startAmount}
            </p>
          ))}
        </div>
      </div>
    </profile>
  );
};

export default Profile;
