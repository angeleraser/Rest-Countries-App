import React from "react";
import "./css/FilterBar.css";
import SearchInput from "./SearchInput/SearchInput";
import FilterByRegion from "./DropdownList/FilterByRegion";
import SortBy from "./DropdownList/SortBy";
const FilterBar = () => {
  return (
    <section
      className="w-full filter-bar grid">
      <SearchInput />
      <SortBy />
      <FilterByRegion />
    </section>
  );
};

export default FilterBar;
