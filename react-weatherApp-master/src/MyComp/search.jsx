import React, { useState, useEffect } from "react";
import { Result } from "./result";

export const Search = () => {
  const [city, setCity] = useState(null);
  const [sys, setSys] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const fetch_url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=hi&appid=29c4f65a50394abafbd9a1c707e67d9f`;

      const response = await fetch(fetch_url);

      const resJson = await response.json();

      setCity(resJson.main);
      setSys(resJson.sys)
    };
    fetchApi();
  }, [search]);

  return (
    <div className="inputData">
      <input
        type="search"
        className=" inputField"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {!city | !sys? (
        <p>No City found !! </p>
      ) : (
        <Result city={city} search={search} sys = {sys}/>
      )}
    </div>
  );
};
