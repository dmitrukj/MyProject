import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import TopRepos from "../TopRepo/TopRepos";
import Pagination from "../../components/Paginator/Paginator";

export const HomePage = () => {
  const [search, setSearch] = useState();
  return (
    <main>
      <Header onSearchChange={setSearch} />
      <TopRepos />
      <Profile repositoriesData={[]} />
      <Pagination />
    </main>
  );
};
