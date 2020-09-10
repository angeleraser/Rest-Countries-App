import { useState } from "react";
import { useCallback } from "react";
const fetchResource = async ({
  url,
  onStart,
  onLoading,
  onSuccess,
  onError,
}) => {
  try {
    // Initial state
    onLoading(true);
    onStart();
    onError(null);

    // throw new Error("Error");
    // fetching API
    const response = await fetch(url);
    const jsonResponse = await response.json();

    // Get the data
    onSuccess(jsonResponse);
    console.log("Fetching completed!");
  } catch (error) {
    onError(error);
  } finally {
    onLoading(false);
  }
};

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(() => {
    console.log("Fetching data...");
    fetchResource({
      url,
      onStart() {
        setResponse(null);
      },
      onLoading(val) {
        setLoading(val);
      },
      onSuccess(val) {
        setResponse(val);
      },
      onError(val) {
        setError(val);
      },
    });
  }, [url]);

  return [response, loading, error, makeRequest];
};
