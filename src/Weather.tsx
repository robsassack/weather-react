import { useState, useEffect } from "react";
import {
  dayOrNight,
  fahrenheitToCelsius,
  windDirection,
  mphToKmHr,
} from "./conversions";
import conditionIcon from "./conditionIcon";
import "weather-icons/css/weather-icons.css";

export default function Weather(props: any) {
  const [units, setUnits] = useState("");

  useEffect(() => {
    if (localStorage.getItem("weather-units")) {
      setUnits(localStorage.getItem("weather-units") as string);
    } else {
      setUnits("imperial");
    }
  }, []);

  // console.log(props.data);
  let name = props.data?.name;
  let country = props.data?.sys?.country;
  let time = dayOrNight(
    Date.now(),
    props.data?.sys?.sunrise,
    props.data?.sys?.sunset
  );
  let conditionCode = props.data?.weather?.[0]?.id;
  let temp = props.data?.main?.temp.toFixed(0);
  let condition = props.data?.weather?.[0]?.main;
  let description = props.data?.weather?.[0]?.description;
  if (description) {
    condition += ` (${description})`;
  }
  let feelsLike = props.data?.main?.feels_like.toFixed(0);
  let low = props.data?.main?.temp_min.toFixed(0);
  let high = props.data?.main?.temp_max.toFixed(0);
  let humidity = props.data?.main?.humidity;
  let windSpeed = props.data?.wind?.speed;
  let windDeg = windDirection(props.data?.wind?.deg);

  const changeUnits = () => {
    if (units === "imperial") {
      localStorage.setItem("weather-units", "metric");
      setUnits("metric");
    } else {
      localStorage.setItem("weather-units", "imperial");
      setUnits("imperial");
    }
  };

  const sunTime = () => {
    if (time === "day") {
      // get sunset time
      const date = new Date(props.data?.sys?.sunset * 1000);
      const localizedTime = date.toLocaleTimeString();
      return `Sunset: ${localizedTime}`;
    } else {
      // get sunrise time
      const date = new Date(props.data?.sys?.sunrise * 1000);
      const localizedTime = date.toLocaleTimeString();
      return `Sunrise: ${localizedTime}`;
    }
  }

  return (
    <>
      <h2>
        {name}
        {country ? `, ${country}` : null}
      </h2>
      <i className={`wi ${conditionIcon(conditionCode, time)}`}></i>
      <p className='temp'>
        {units === "imperial" ? `${temp}°F` : `${fahrenheitToCelsius(temp)}°C`}
      </p>
      <p>{condition}</p>
      <p>
        Feels like:
        {units === "imperial"
          ? ` ${feelsLike}°F`
          : ` ${fahrenheitToCelsius(feelsLike)}°C`}
      </p>
      <p>
        {units === "imperial"
          ? `Low: ${low}°F | High: ${high}°F`
          : `Low: ${fahrenheitToCelsius(low)}°C | High: ${fahrenheitToCelsius(
              high
            )}°C`}
      </p>
      <p>Humidity: {humidity}%</p>
      <p>
        {units === "imperial"
          ? `Wind: ${windDeg} ${windSpeed.toFixed(0)} mph`
          : `Wind: ${windDeg} ${mphToKmHr(windSpeed)} km/h`}
      </p>
      <p>{sunTime()}</p>
      <div className='temp-scale-chooser' onClick={changeUnits}>
        {units === "imperial" ? "°F" : "°C"}
      </div>
    </>
  );
}
