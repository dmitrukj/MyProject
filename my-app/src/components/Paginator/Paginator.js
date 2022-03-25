import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const pages = [1, 2, 3, 4, 5];

function PageButton(props) {
  const [isSelected, setIsSelected] = React.useState(false);
  const pageNumber = props.pageNumber;
  return (
    <Link
      to={`/repositories/pages/${pageNumber}`}
      className="btn"
      onClick={() => setIsSelected((prevState) => !prevState)}
    >
      {pageNumber}
    </Link>
  );
}

function PagesList(props) {
  const pagess = props.pages;
  const pagesItem = pagess.map((item, i) => (
    <PageButton pageNumber={item} key={i}></PageButton>
  ));
  return <div className="pagesList">{pagesItem}</div>;
}

function PreviousBtn(props) {
  const isDisabled = props.isDisabled;
  return <div className={isDisabled ? "disabled" : "prev"}>Previous</div>;
}

export default function Pagination() {
  const params = useParams(); //возращает параметры
  return (
    <div>
      <PreviousBtn isDisabled={params.page === "1" ? true : false} />
      <PagesList pages={pages} />
      <div className="next">Next</div>
    </div>
  );
}
