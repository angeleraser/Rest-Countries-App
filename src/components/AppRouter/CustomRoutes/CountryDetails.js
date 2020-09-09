import React from "react";
import { Route } from "react-router";
import Details from "../../Pages/Details/Details";

const CountryDetails = ({ path, ...rest }) => {
  return <Route path={path} {...rest} component={Details} />;
};

export default CountryDetails;
