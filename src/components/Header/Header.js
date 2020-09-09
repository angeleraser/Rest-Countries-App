import React, { useContext } from "react";
import "./css/Header.css";
import DarkModeButton from "./DarkModeButton/DarkModeButton";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";
const Header = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <header className="flex header items-center w-full justify-between">
      <Link
        onClick={() => {
          dispatch({ type: "FILTER_COUNTRIES_BY_REGION", payload: "All" });
        }}
        to="/"
        className="font-extrabold header-title">
        Where in the world?
      </Link>
      <DarkModeButton />
    </header>
  );
};

export default Header;
