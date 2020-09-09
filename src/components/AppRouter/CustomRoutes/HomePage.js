import React from "react";
import { Route } from "react-router";
import Home from "../../Pages/Home/Home";

const HomePage = ({ path, ...rest }) => {
  return (
    <Route path={path} {...rest}>
       <Home />
    </Route>
  );
};

export default HomePage;
