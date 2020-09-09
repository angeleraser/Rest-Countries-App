import React from "react";
import BorderCountries from "./BorderCountries";
import { formatNumber } from "../../../../functions/formatNumber";
import { formatEmptyValue } from "../../../../functions/formatEmptyValue";
const CountryData = ({
  data: {
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
  } = {},
}) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${flag})`,
        }}
        className="country-flag animate__slideInLeft animate__animated bg-cover bg-center bg-no-repeat inline-block w-full"></div>
      <ul className="country-info animate__slideInRight animate__animated grid w-full">
        <h1 className="country-name">{name}</h1>
        <li>
          Native name: <span>{name}</span>
        </li>
        <li>
          Population: <span>{formatEmptyValue(formatNumber(population))}</span>
        </li>
        <li>
          Region: <span>{formatEmptyValue(region)}</span>
        </li>
        <li>
          Sub Region: <span>{formatEmptyValue(subregion)}</span>
        </li>
        <li>
          Capital: <span>{formatEmptyValue(capital)}</span>
        </li>
        <li>
          Top level domain: <span>{formatEmptyValue(topLevelDomain[0])}</span>
        </li>
        <li>
          Currencies: <span>{formatEmptyValue(currencies[0].name)}</span>
        </li>
        <li>
          Languages:{" "}
          <span>
            {languages.map(
              (lang, i, arr) =>
                ` ${lang.name}${i !== arr.length - 1 ? "," : ""}`
            )}
          </span>
        </li>
        <BorderCountries countries={borders} />
      </ul>
    </>
  );
};

export default CountryData;
