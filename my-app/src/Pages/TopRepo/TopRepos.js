import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRepositories } from "../../../redux/toprepos/reducer";

function fetchTopRepos(params) {
  return [];
}

export default function TopRepos(props) {
  const repos = useSelector((store) => store.topRepositories.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRepositories());
  }, [dispatch]);
  return (
    <div>
      {repos.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
    </div>
  );
}
