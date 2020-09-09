import React from "react";
import "./css/GoTopButton.css";
import { chevronDown } from "../../../../../svg-icons";
export const GoTopButton = () => {
  const animatedScrolling = () => {
    let distance = window.scrollY;
    const scrollInterval = setInterval(() => {
      window.scrollTo(0, distance);
      if (distance > 100) {
        distance -= 30;
      } else {
        distance -= 1;
      }
      distance <= 0 && clearInterval(scrollInterval);
    }, 1);
  };
  return (
    <button
      onClick={animatedScrolling}
      className="go-top-button animate__animated animate__backInUp flex items-center justify-center">
      {chevronDown}
    </button>
  );
};
