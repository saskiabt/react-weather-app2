/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Form({ setSelectedData, setIsLoaded }) {
  const [location, setLocation] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const onChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchCoordinates = async () => {
    try {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
      const result = await fetch(url, { mode: "cors" });
      const response = await result.json();
      const coordinates = {
        lat: response[0].lat,
        lon: response[0].lon,
        state: response[0].state,
      };
      return coordinates;
    } catch (err) {
      setError(true);
      return null;
    }
  };

  const fetchweather = async (coordinateData) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinateData.lat}&lon=${coordinateData.lon}&appid=${process.env.REACT_APP_API_KEY}`;
      const result = await fetch(url, { mode: "cors" });
      const response = await result.json();
      return response;
    } catch (err) {
      setError(true);
      return null;
    }
  };

  const requestData = async () => {
    const coordinates = await fetchCoordinates();
    const weather = await fetchweather(coordinates);

    const data = {
      lat: coordinates.lat,
      lon: coordinates.lon,
      location: weather.name,
      state: coordinates.state,
      country: weather.sys.country,
      condition: weather.weather[0].main,
      description: weather.weather[0].description,
      currentTemp: weather.main.temp,
      realFeel: weather.main.feels_like,
      humidity: weather.main.humidity,
      icon: weather.weather[0].icon,
      link: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    };

    setSelectedData(data);
    setIsLoaded(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestData();
    console.log("Requested");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="location-input"
          placeholder="Enter a city:"
          onChange={onChange}
          value={location}
        />
        <button className="submit" type="submit" onClick={requestData}>
          <span className="material-symbols-sharp">search</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
