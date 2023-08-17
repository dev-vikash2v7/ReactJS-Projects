import React from "react";

export const Result = ({city , search , sys}) => {
  
  return (
    <div className="info">
      <h2 className="location">
        <i className="fas fa-street-view"></i> ☺ {search} ☻
      </h2>

      <h1 className="temp">{city.temp}&deg;</h1>

      <h3 className = 'tempmin_max'>MIN : {city.temp_min}&deg; | MAX : {city.temp_max}&deg;</h3>
      <h4 className = 'pressure'>Pressure : {city.pressure}</h4>
      <h4 className = 'humidity'>Humidity : {city.humidity}</h4>
      <h4>Country : {sys.country} | Sunrise{sys.sunrise} | Sunset : {sys.sunset}</h4>
    </div>
  );
};
