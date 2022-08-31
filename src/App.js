/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import Heading from "./components/Heading";

function App() {
  const [selectedData, setSelectedData] = useState({
    location: "",
    state: "",
    country: "",
    condition: "",
    description: "",
    currentTemp: "",
    realFeel: "",
    high: "",
    low: "",
  });

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <div className="content">
        <Heading />
        <Form
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          setIsLoaded={setIsLoaded}
        />
        <Card
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          isLoaded={isLoaded}
        />
      </div>
    </div>
  );
}

export default App;
