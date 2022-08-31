/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TempButtons from "./TempButtons";
import Temperatures from "./Temperatures";

function Card(props) {
  const { selectedData, isLoaded } = props;

  const [unit, setUnit] = useState("F");

  const changetoC = () => {
    setUnit("C");
  };

  const changetoF = () => {
    setUnit("F");
  };

  if (!isLoaded) return null;
  return (
    <div className="card">
      <TempButtons unit={unit} changetoC={changetoC} changetoF={changetoF} />
      <h1 className="location">{selectedData.location}</h1>
      <h3 className="state">
        {selectedData.state}, {selectedData.country}
      </h3>
      <div>
        <img className="icon" src={selectedData.link} alt="weather icon" />
      </div>
      <h4 className="description">
        <i>{selectedData.description}</i>
      </h4>
      <Temperatures unit={unit} selectedData={selectedData} />
      <p className="humidity">Humidity: {selectedData.humidity}%</p>
    </div>
  );
}

export default Card;
