import React from "react";
import { LoadingError } from "../LoadingError/LoadingError";

export const Loading = ({ error, fetchAction, components }) => {
  return !!error ? (
    <LoadingError fetchAction={fetchAction} />
  ) : (
    <>{components}</>
  );
};
