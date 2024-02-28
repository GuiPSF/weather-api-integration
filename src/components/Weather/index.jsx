import { useState } from "react";
import "./weather.css";
import Axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../App";
//api.weatherapi.com/v1

const Weather = () => {
  // Picking the city state from the AppContext context
  const { city } = useContext(AppContext);
  const [cityStatus, setCityStatus] = useState("");
  const [cityTemperature, setCityTemperature] = useState(0);
  const [icon, setIcon] = useState("");
  const [time, setTime] = useState("");

  Axios.get(`https://api.weatherapi.com/v1/current.json?q=${city}`, {
    params: { key: "d99718277c5a4c47acf151439242702" },
  }).then((res) => {
    setIcon(res.data.current.condition.icon);
    setCityStatus(res.data.current.condition.text);
    setCityTemperature(res.data.current.temp_c);
    setTime(res.data.location.localtime);
    console.log(res.data);
  });

  return (
    <div id="weather-box">
      <h1>{city}</h1>
      <hr />
      <img src={icon} alt="" />
      <h1>{cityStatus}</h1>
      <h3>Temperature: {cityTemperature}ºc</h3>
      <h3>Time: {time}</h3>
    </div>
  );
};

export default Weather;
