//code to convert temp from fahrenheit to celsius and vise-Versa depend on the radio button selected before changing the temprature

import React, { useEffect, useState } from "react";
function Converter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [temprature, setTemprature] = useState(""); // default state for temrature user entered value
  const [radioButton, setRadioButton] = useState("Celsius"); //set default value of radio Button to celcious
  const [convTemp, setConvTemp] = useState(""); // converted temprature to show on UI

  const handleClickSwap = () => {
    //function for toggle the radio button and recalculated the temprature by calling the function 
    if (radioButton === "Celsius") {
      setRadioButton("Fahrenheit");
      handleRaioChange("Fahrenheit");
    } else {
      setRadioButton("Celsius");
      handleRaioChange("Celsius");
    }
  };

  useEffect(() => {
    // on user enter new temprature assign that to the field that user selected from radio button 
    if (temprature !== "") {
      if (radioButton === "Celsius") {
        setCelsius(temprature);
        setFahrenheit("");
      } else {
        setFahrenheit(temprature);
        setCelsius("");
      }

      setConvTemp(temprature);
    }
  }, [temprature]);

  const handleRaioChange = (name) => {
    if (temprature !== "") {
      if (name === "Fahrenheit") {
        //convert from farenheit to celsius
        const converted =
          temprature === fahrenheit ? fahrenheit : celsius * (9 / 5) + 32;
        setConvTemp(converted);
      } else if (name === "Celsius") {
        //convert from celsius to farenheit
        const converted =
          temprature === celsius ? celsius : ((fahrenheit - 32) * 5) / 9;
        setConvTemp(converted);
      }
    }
  };

  return (
    <div className="converter">
      <p> Enter Temprature value to Convert</p>

      <input
        className="tempInput"
        type="number"
        value={temprature}
        onChange={(e) => setTemprature(e.target.value)}
      />
      <div className="radioDiv">
        <span>
          <input
            className="radioButton"
            type="radio"
            name="Celsius"
            value="Celsius"
            id="Celsius"
            checked={radioButton === "Celsius"}
            onChange={(e) => setRadioButton(e.target.value)}
            onMouseDown={(e) => handleRaioChange(e.target.name)}
          />
          <label for="m">Celsius </label>
        </span>
        <span>
          <input
            className="radioButton"
            type="radio"
            name="Fahrenheit"
            value="Fahrenheit"
            id="Fahrenheit"
            checked={radioButton === "Fahrenheit"}
            onChange={(e) => setRadioButton(e.target.value)}
            onMouseDown={(e) => handleRaioChange(e.target.name)}
          />
          <label>Fahrenheit</label>
        </span>
      </div>

      <p>Translated Temrature</p>
      <div className="resultDiv">{convTemp}</div>
      <button className="swapButton" onClick={handleClickSwap}>
        Swap
      </button>
    </div>
  );
}

export default Converter;
