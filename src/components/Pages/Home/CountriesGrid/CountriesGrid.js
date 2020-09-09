import React, { useState } from "react";
import "./css/CountriesGrid.css";
import CountryItem from "./CountryItem/CountryItem";
import { GoTopButton } from "./GoTopButton/GoTopButton";
import { useEffect } from "react";
const CountriesGrid = ({ countries, search }) => {
  const [needScroll, setNeedScroll] = useState(false);
  useEffect(() => {
    const height = window.innerHeight;
    const displayGoTopButton = () => {
      if (window.scrollY > height) {
        setNeedScroll(true);
      } else {
        setNeedScroll(false);
      }
    };
    if (window.scrollY > height) setNeedScroll(true);
    window.addEventListener("scroll", displayGoTopButton);
    return () => {
      window.removeEventListener("scroll", displayGoTopButton);
    };
  }, []);
  return (
    <section className="w-full countries-grid grid">
      {countries.length > 0 ? (
        countries.map((data, i) => <CountryItem key={i} {...data} />)
      ) : (
        <div className="not-found w-full flex flex-col items-start">
          <h1> Cannot found: {`"${search}".`}</h1>
        </div>
      )}
      {needScroll && <GoTopButton />}
    </section>
  );
};

export default CountriesGrid;
