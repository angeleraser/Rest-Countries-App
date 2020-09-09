import React from "react";
import "./css/LoadingAboutCountry.css";
export const LoadingAboutCountry = () => {
  return (
    <div className="w-full grid loading-about-country">
      <div className="item w-full img"></div>
      <div className="country-data grid">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};
