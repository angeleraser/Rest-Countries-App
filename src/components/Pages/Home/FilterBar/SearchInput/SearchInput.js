import React from "react";
import "./css/SearchInput.css";
import { searchIcon } from "../../../../../svg-icons";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import useForm from "../../../../hooks/useForm";
import { useState } from "react";
import { windowClickEventListener } from "../../../../../methods";
import { useEffect } from "react";
import { useCallback } from "react";
import { isValidQuery } from "../../../../../functions/isValidQuery";
import { useHistory } from "react-router";
const SearchInput = ({ history }) => {
  const { dispatch } = useContext(AppContext);

  const [{ countryName }, handleInputValue, reset] = useForm({
    countryName: "",
  });

  const [invalid, setInvalid] = useState(false);
  const { push: historyPush } = useHistory();

  const searchCountry = (e) => {
    const query = countryName.trim();
    e.preventDefault();
    if (isValidQuery(query) && query.length > 1) {
      dispatch({
        type: "SEARCH_COUNTRY",
        payload: query,
      });
      historyPush(`search?q=${query}`);
    } else {
      setInvalid(true);
    }
    reset();
  };

  const handleCountryName = (e) => {
    handleInputValue(e);
    setInvalid(false);
  };

  const removeInvalidStyle = useCallback(() => {
    invalid && setInvalid(false);
  }, [invalid]);

  // Remove invalid styles
  useEffect(() => {
    if (invalid) {
      windowClickEventListener.add(removeInvalidStyle);
    } else {
      windowClickEventListener.remove(removeInvalidStyle);
    }
    return () => {
      invalid && windowClickEventListener.remove(removeInvalidStyle);
    };
  }, [invalid, removeInvalidStyle]);
  return (
    <form
      autoComplete="off"
      onSubmit={searchCountry}
      className={`search w-full flex items-center ${
        invalid ? "invalid animate__animated animate__headShake" : ""
      }`}>
      <button type="submit">{searchIcon}</button>
      <input
        type="text"
        placeholder={`${
          invalid ? "Please enter a valid name" : "Search for a country..."
        } `}
        className={`w-full`}
        name="countryName"
        onChange={handleCountryName}
        value={countryName}
      />
    </form>
  );
};

export default SearchInput;
