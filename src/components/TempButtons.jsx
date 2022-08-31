/* eslint-disable react/prop-types */
import React from "react";

function TempButtons({ changetoC, changetoF, unit }) {
  if (unit === "C") {
    return (
      <div className="c-f-buttons">
        <button type="button" className="cf" id="f" onClick={changetoF}>
          °F
        </button>
      </div>
    );
  }

  if (unit === "F") {
    return (
      <div className="c-f-buttons">
        <button type="button" className="cf" id="c" onClick={changetoC}>
          °C
        </button>
      </div>
    );
  }
}

export default TempButtons;
