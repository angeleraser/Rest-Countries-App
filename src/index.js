import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind/tailwind.output.css";
import "animate.css";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { AppProvider } from "./components/AppContext/AppContext";
const ROOT = document.getElementById("root");
const App = () => {
  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
  );
};

ReactDOM.render(<App />, ROOT);
