/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./css/Home.css";
import FilterBar from "./FilterBar/FilterBar";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useFetch } from "../../hooks/useFetchV2";
import CountriesGrid from "./CountriesGrid/CountriesGrid";
import LoadingCountriesGrid from "./CountriesGrid/LoadingCountriesGrid/LoadingCountriesGrid";
import LoadingFilterBar from "./FilterBar/LoadingFilterBar/LoadingFilterBar";
import { Loading } from "../../Loading/Loading";
import { useHistory } from "react-router";
const Home = () => {
  const {
    homePage: { shouldFetchData, filteredList },
    dispatch,
  } = useContext(AppContext);

  const [response, , error, fetchAction] = useFetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;region;alpha3Code"
  );

  const {
    location: { search },
  } = useHistory();
  const query = search.split("=")[1];
  useEffect(() => {
    if (shouldFetchData) {
      fetchAction();
    }
  }, [shouldFetchData]);

  useEffect(() => {
    !!response && dispatch({ type: "STORE_COUNTRIES_LIST", payload: response });
  }, [response, dispatch]);

  useEffect(() => {
    !!response &&
      search &&
      dispatch({ type: "SEARCH_COUNTRY", payload: query });
  }, [response]);

  return (
    <main className="w-full main flex flex-col items-start">
      {!shouldFetchData ? (
        <>
          {" "}
          <FilterBar />
          {filteredList.length > 1 && (
            <h1 className="total-countries w-full">
              Total Countries: {filteredList.length}
            </h1>
          )}
          <CountriesGrid countries={filteredList || []} search={query} />
        </>
      ) : (
        <Loading
          error={error}
          fetchAction={fetchAction}
          components={
            <>
              <LoadingFilterBar />
              <LoadingCountriesGrid />
            </>
          }
        />
      )}
    </main>
  );
};

export default Home;
