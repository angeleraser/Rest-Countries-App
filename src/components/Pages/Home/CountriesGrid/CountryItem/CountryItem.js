import React from "react";
import "./css/CountryItem.css";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../../../functions/formatNumber";
import { formatEmptyValue } from "../../../../../functions/formatEmptyValue";
const CountryItem = ({ flag, name, population, region, capital }) => {
  return (
    <article className="w-full country-item animate__animated animate__fadeIn flex-col flex">
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/country-details/${encodeURI(name.toLowerCase())}`}>
        {" "}
        <div
          style={{
            backgroundImage: `url(${flag})`,
          }}
          className="flag"></div>
      </Link>
      <div className="info w-full flex flex-col items-start">
        <Link
          className="name"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to={`/country-details/${encodeURI(name.toLowerCase())}`}>
          {" "}
          {name}
        </Link>
        <h3>
          Population: <span> {formatEmptyValue(formatNumber(population))}</span>
        </h3>
        <h3>
          Region: <span>{formatEmptyValue(region)}</span>
        </h3>
        <h3>
          Capital: <span>{formatEmptyValue(capital)}</span>
        </h3>
      </div>
    </article>
  );
};

export default CountryItem;
