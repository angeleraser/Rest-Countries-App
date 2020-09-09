import React from "react";
import "./css/LoadingFilterBar.css";
const LoadingFilterBar = () => {
  return (
    <div className="w-full loading-filter-bar flex flex-col items-start">
      <div className="item input w-full"></div>
      <div className="item dropdown-list w-full"></div>
      <div className="item dropdown-list w-full"></div>
    </div>
  );
};

export default LoadingFilterBar;
