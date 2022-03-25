import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../../Redux/search/actionsCreators";
import "./SearchForm.css";

export default function SearchForm(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    props.onSearchChange(text);
    dispatch(setSearchText(text));
    setText(event.target.value);
  };
  return (
    <div className={`search-form_${props.className} search-form`}>
        <form>
            <input
    type="text"
    value={text}
    placeholder={props.placeholder}
    onChange={handleChange}
    /></form>

    </div>
  );
}
