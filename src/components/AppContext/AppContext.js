import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./AppReducer";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [{ homePage, detailsPage }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const providerValue = {
    homePage,
    detailsPage,
    dispatch,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
