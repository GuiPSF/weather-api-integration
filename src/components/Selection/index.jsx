import { useState, useContext } from "react";
import "./selection.css";
import { AppContext } from "../../App";

const Selection = () => {
  // Picking the setCity function from the AppContext context
  const { setCity } = useContext(AppContext);
  const [newCity, setNewCity] = useState("");

  return (
    <div id="selection-box">
      <h1>Weather App</h1>
      <hr />
      <input
        type="search"
        className="input-search"
        placeholder="Enter city name"
        onChange={(event) => {
          setNewCity(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          setCity(newCity);
        }}
      >
        Go
      </button>
    </div>
  );
};

// api.weatherapi.com/v1;
export default Selection;
