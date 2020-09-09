import React from "react";
import { Link } from "react-router-dom";
import { getBorderCountries } from "../../../../selectors/getBorderCountries";
const BorderCountries = ({ countries }) => {
  return (
    <li className="border-countries flex-col flex items-start">
      <h2>Border Countries:</h2>
      <div className="buttons-wrapper w-full grid">
        {countries.length
          ? getBorderCountries(countries).map(({ name }) => (
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={name}
                to={`${name.toLowerCase()}`}>
                {name.length > 12 ? name.split(" ")[0] : name}
              </Link>
            ))
          : "Unknow"}
      </div>
    </li>
  );
};

export default BorderCountries;
