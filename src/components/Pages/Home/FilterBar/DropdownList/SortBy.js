import React, { useContext } from "react";
import "./css/DropdownList.css";
import { useState } from "react";
import { chevronDown } from "../../../../../svg-icons";
import { AppContext } from "../../../../AppContext/AppContext";
import { useEffect } from "react";
import { windowClickEventListener } from "../../../../../methods";
import { useCallback } from "react";
const SortBy = () => {
  const {
    dispatch,
    homePage: { sortedBy },
  } = useContext(AppContext);

  const [show, setShow] = useState(false);

  const showHide = () => {
    setShow(!show);
  };

  const hiddenList = useCallback(() => {
    show && setShow(false);
  }, [show]);

  const showCurrentOption = ({ target: { textContent } }) => {
    dispatch({ type: "SORT_COUNTRIES_BY", payload: textContent });
  };

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
        {sortedBy}
        {chevronDown}
      </button>
      <ul className={`w-full absolute ${!show ? "none" : ""}`}>
        <li>
          <button onClick={showCurrentOption}>High Population</button>
        </li>
        <li>
          <button onClick={showCurrentOption}>Low Population</button>
        </li>
      </ul>
    </div>
  );
};

export default SortBy;
