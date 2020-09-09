import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "./CustomRoutes/HomePage";
import CountryDetails from "./CustomRoutes/CountryDetails";
import Seach from "./CustomRoutes/Search";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <HomePage path="/" exact={true} />
        <Seach path="/search" exact={true} />
        <CountryDetails path="/country-details/:country" />
        <Redirect to="/" /> {/* To control undefined routes  */}
      </Switch>
    </Router>
  );
};
