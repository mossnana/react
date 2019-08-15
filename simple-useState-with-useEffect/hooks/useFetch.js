import React, { useEffect } from "react";

export const useFetch = (url, options) => {
  const [res, setRes] = React.useState("");
  const [err, setErr] = React.useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        setRes(json);
      } catch (err) {
        setErr(err);
      }
    };
    fetchData();
  }, []);
  console.log(res, err);
  return { res, err };
};
