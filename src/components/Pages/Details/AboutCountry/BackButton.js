import React from "react";
import { arrowLeft } from "../../../../svg-icons";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const { goBack } = useHistory();
  return (
    <button
      onClick={() => {
        goBack();
      }}
      className="back-button flex justify-center items-center">
      {arrowLeft} Back
    </button>
  );
};

export default BackButton;
