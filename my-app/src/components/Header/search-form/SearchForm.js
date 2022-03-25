import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../../redux/search/actionsCreators";
import "./search-form.css";

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
      <RiSearchLine color="white" />
      <input
        type="text"
        value={text}
        placeholder={props.placeholder}
        className={`search-form__input_${props.className} search-form__input`}
        onChange={handleChange}
      ></input>
    </div>
  );
}
