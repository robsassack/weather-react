import { useState, useEffect } from "react";
import Weather from "./Weather";
import apiKey from "./config";
import { dayOrNight } from "./conversions";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // geolocation allowed
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const coords = { lat, lon };
        getWeather(coords);
      },
      () => {
        // gelocation denied
        getWeather("Detroit");
      }
    );
  }, []);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!location) {
      return;
    }
    getWeather(location);
    setLocation("");
  }

  async function getWeather(loc) {
    console.log("Calling API...");
    const key = apiKey.key;
    // if loc is string, use q=loc, if loc is coords, use lat=loc.lat&lon=loc.lon
    if (typeof loc === "string") {
      loc = `q=${loc}`;
    } else {
      loc = `lat=${loc.lat}&lon=${loc.lon}`;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?${loc}&appid=${key}&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    // if location not found, set data to "Error"
    if (data.cod === "404") {
      setData("Error");
      return;
    }
    setData(data);
    // determine if it's day or night and set styles
    let time = dayOrNight(Date.now(), data.sys.sunrise, data.sys.sunset);
    time === "day" ? setDayStyles() : setNightStyles();
  }

  function setDayStyles() {
    document.querySelector("body").style.backgroundColor = "#B0E6E8";
    document.querySelector("body").style.transition =
      "background-color 1000ms linear";
    document.body.style.color = "#000";
    document.querySelector(".content").style.outline = "2px solid black";
    document.querySelector("#location").style.border = "1px solid black";
    document.querySelector("#submit").style.border = "1px solid black";
    document.querySelector(".temp-scale-chooser").style.borderColor = "#000";
    document.querySelector("#location").style.color = "#000";
    document.querySelector("#submit").style.color = "#000";
    document.querySelector(".github-link").style.color = "black";
  }

  function setNightStyles() {
    document.querySelector("body").style.backgroundColor = "#101028";
    document.querySelector("body").style.transition =
      "background-color 1000ms linear";
    document.body.style.color = "#fff";
    document.querySelector(".content").style.outline = "2px solid white";
    document.querySelector("#location").style.border = "1px solid white";
    document.querySelector("#submit").style.border = "1px solid white";
    document.querySelector(".temp-scale-chooser").style.borderColor = "#fff";
    document.querySelector("#location").style.color = "#fff";
    document.querySelector("#submit").style.color = "#fff";
    document.querySelector(".github-link").style.color = "white";
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Mini Weather</h1>
        <form className='form'>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Location'
            onChange={handleChange}
            value={location}
          />
          <button id='submit' onClick={handleSubmit}>
            Go
          </button>
        </form>
      </div>
      <div className='content'>
        {data === null ? null : data === "Error" ? (
          <h2>Location not found</h2>
        ) : (
          <Weather data={data} />
        )}
      </div>
      <a href='https://github.com/robsassack/weather-react'>
        <i className='fa-brands fa-github github-link'></i>
      </a>
    </div>
  );
}

export default App;
