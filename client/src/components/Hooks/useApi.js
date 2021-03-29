import { useState, useEffect } from "react";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useApi = (url) => {
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });


  useEffect(() => {
    const setPartData = (partialData) => setData({ ...data, ...partialData });

    setPartData({
      state: apiStates.LOADING,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: "fetch failed",
        });
      });
  }, [data, url]);

  return data;
};
