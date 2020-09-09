import React from "react";
import "./css/LoadingError.css";
export const LoadingError = ({ fetchAction }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center loading-error">
      <h1>It looks like you're offline :(</h1>
      <p>Please, check your network connection and try again.</p>
      <button
        onClick={() => {
          fetchAction();
        }}
        className="reload-button">
        Reload
      </button>
    </div>
  );
};
