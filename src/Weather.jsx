import { useState } from "react";
import {
  dayOrNight,
  fahrenheitToCelsius,
  windDirection,
  mphToKmHr,
} from "./conversions";
import conditionIcon from "./conditionIcon";
import "weather-icons/css/weather-icons.css";

export default function Weather(props) {
  const [units, setUnits] = useState("imperial");
  console.log(props.data);
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
  let low = props.data?.main?.temp_min.toFixed(0);
  let high = props.data?.main?.temp_max.toFixed(0);
  let humidity = props.data?.main?.humidity;
  let windSpeed = props.data?.wind?.speed;
  let windDeg = windDirection(props.data?.wind?.deg);

  const changeUnits = () => {
    if (units === "imperial") {
      setUnits("metric");
    } else {
      setUnits("imperial");
    }
  }

  return (
    <>
      <h2>
        {name}
        {country ? `, ${country}` : null}
      </h2>
      <i className={`wi ${conditionIcon(conditionCode, time)}`}></i>
      <p className="temp">
        {units === "imperial"
          ? `${temp}°F`
          : `${fahrenheitToCelsius(temp)}°C`}
      </p>
      <p>{condition}</p>
      <p>
        {units === "imperial"
          ? `Low: ${low}°F | High: ${high}°F`
          : `Low: ${fahrenheitToCelsius(low)}°C | High: ${fahrenheitToCelsius(high)}°C`}
      </p>
      <p>Humidity: {humidity}%</p>
      <p>
        {units === "imperial"
          ? `Wind: ${windDeg} ${windSpeed.toFixed(0)} mph`
          : `Wind: ${windDeg} ${mphToKmHr(windSpeed)} km/h`
        }
      </p>
      <div className="temp-scale-chooser" onClick={changeUnits}>
        {units === "imperial" ?
          "°F" :
          "°C"
        }
      </div>
    </>
  );
}
