import React from "react";

const repos = [
  {
    id: "repo1",
    name: "RepoName1",
    author: "Author1",
    lastCommitDate: "07.03.2022",
    startAmount: 7,
  },
];

function User({ name }) {
  return <span>It's user {name}</span>;
}

export const UserList = () => {
  return (
    <div>
      {repos.map((item) => (
        <span key={item.id}>
          <User name={item.name} />
        </span>
      ))}
    </div>
  );
};

export default User;
