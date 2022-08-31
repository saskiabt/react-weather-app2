/* eslint-disable react/prop-types */
import React from "react";
import { ktoC, ktoF } from "./TempConversions";

function Temperatures(props) {
  const { unit, selectedData } = props;
  if (unit === "C") {
    return (
      <div className="temperatures">
        <p className="current-temp">
          Current Temp: {ktoC(selectedData.currentTemp)} °C
        </p>
        <p className="real-feel">Real Feel: {ktoC(selectedData.realFeel)} °C</p>
      </div>
    );
  }
  return (
    <div className="temperatures">
      <p className="current-temp">
        Current Temp: {ktoF(selectedData.currentTemp)} °F
      </p>
      <p className="real-feel">Real Feel: {ktoF(selectedData.realFeel)} °F</p>
    </div>
  );
}

export default Temperatures;
