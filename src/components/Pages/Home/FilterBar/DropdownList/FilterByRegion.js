import React, { useContext } from "react";
import "./css/DropdownList.css";
import { useState } from "react";
import { chevronDown } from "../../../../../svg-icons";
import { AppContext } from "../../../../AppContext/AppContext";
import { useEffect } from "react";
import { windowClickEventListener } from "../../../../../methods";
import { useCallback } from "react";
import { isTheSameRegion } from "../../../../../functions/isTheSameRegion";
import { useHistory } from "react-router";
const FilterByRegion = () => {
  const {
    dispatch,
    homePage: { currentRegion, filteredList },
  } = useContext(AppContext);

  const [show, setShow] = useState(false);

  const { push: historyPush } = useHistory();

  const [currentOption, setCurrentOption] = useState(currentRegion);

  const showHide = () => {
    setShow(!show);
  };

  const hiddenList = useCallback(() => {
    show && setShow(false);
  }, [show]);

  const showCurrentOption = ({ target: { textContent } }) => {
    setCurrentOption(textContent);
    setShow(false);
    dispatch({ type: "FILTER_COUNTRIES_BY_REGION", payload: textContent });
    if (textContent === "All") { //Go home
      historyPush(`/`); 
    } else {
      historyPush(`search?q=${textContent.toLowerCase()}`);
    }
    dispatch({ type: "SORT_COUNTRIES_BY", payload: "Sort by" });
  };

  // Set current region
  useEffect(() => {
    if (
      filteredList.length > 1 &&
      filteredList.length !== 250 &&
      currentRegion !== "All" &&
      isTheSameRegion(filteredList)
    ) {
      setCurrentOption(filteredList[0].region);
    } else if (filteredList.length === 1 && currentRegion !== "All") {
      setCurrentOption(filteredList[0].region);
    } else {
      setCurrentOption("Filter by Region");
    }
  }, [filteredList, currentRegion]);
  // Hidden list
  useEffect(() => {
    if (show) {
      windowClickEventListener.add(hiddenList);
    } else {
      windowClickEventListener.remove(hiddenList);
    }
    return () => {
      show && windowClickEventListener.remove(hiddenList);
    };
  }, [show, hiddenList]);

  return (
    <div className="dropdown-list flex flex-col w-full items-start">
      <button
        onClick={showHide}
        className={`w-full flex justify-between items-center ${
          show ? "rotated-icon" : ""
        }`}>
        {currentOption}
        {chevronDown}
      </button>
      <ul className={`w-full absolute ${!show ? "none" : ""}`}>
        <li>
          <button onClick={showCurrentOption}>Africa</button>
        </li>
        <li>
          <button onClick={showCurrentOption}>Americas</button>
        </li>
        <li>
          <button onClick={showCurrentOption}>Asia</button>
        </li>
        <li>
          <button onClick={showCurrentOption}>Europe</button>
        </li>
        <li>
          <button onClick={showCurrentOption}>Oceania</button>
        </li>
        <li>
          <button onClick={showCurrentOption}>All</button>
        </li>
      </ul>
    </div>
  );
};

export default FilterByRegion;
