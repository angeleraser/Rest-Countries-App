/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./css/Details.css";
import BackButton from "./AboutCountry/BackButton";
import { useFetch } from "../../hooks/useFetchV2";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import CountryData from "./AboutCountry/CountryData";
import { LoadingAboutCountry } from "./LoadingAboutCountry/LoadingAboutCountry";
import { Loading } from "../../Loading/Loading";
import { getCountryByName } from "../../../selectors/getCountryByName";
import { allCountries } from "../../../data";
import { isInTheList } from "../../../functions/isInTheList";
import { Redirect } from "react-router";
const Details = ({
  match: {
    params: { country: countryName },
  },
}) => {
  const [response, , error, fetchCountry] = useFetch(
    `https://restcountries.eu/rest/v2/alpha/${
      getCountryByName(allCountries, countryName)?.alpha3Code
    }?fields=name;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag`
  );

  const {
    detailsPage: { fetchedCountries, currentCountry },
    dispatch,
  } = useContext(AppContext);

  // Check existence of the country in the fetchedList
  useEffect(() => {
    if (isInTheList(fetchedCountries, countryName)) {
      dispatch({
        type: "SET_CURRENT_COUNTRY",
        payload: getCountryByName(fetchedCountries, countryName),
      });
    } else {
      // Resets the current country while is fetching
      dispatch({
        type: "SET_CURRENT_COUNTRY",
        payload: null,
      });
      if (isInTheList(allCountries, countryName)) {
        setTimeout(() => {
          fetchCountry();
        }, 500);
      }
    }
  }, [countryName]);

  // Save and set the current country
  useEffect(() => {
    if (!!response) {
      dispatch({
        type: "SET_CURRENT_COUNTRY",
        payload: response,
      });
      !isInTheList(fetchedCountries, countryName) &&
        dispatch({
          type: "SAVE_FETCHED_COUNTRY",
          payload: response,
        });
    }
  }, [response]);

  // Set to null the currentCountry whe the user leaves the Details page
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_CURRENT_COUNTRY",
        payload: null,
      });
    };
  }, []);

  // Redirect to Home page when the country url is wrong
  if (!isInTheList(allCountries, countryName)) {
    return <Redirect to="/" />;
  }

  return (
    <section className="w-full details grid">
      {!!currentCountry ? (
        <>
          {" "}
          <BackButton />
          <CountryData data={currentCountry} />
        </>
      ) : (
        <Loading
          error={error}
          fetchAction={fetchCountry}
          components={<LoadingAboutCountry />}
        />
      )}
    </section>
  );
};

export default Details;
