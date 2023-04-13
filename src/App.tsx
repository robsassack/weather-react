import { useState, useEffect } from "react";
import Weather from "./Weather";
import apiKey from "./config";
import { dayOrNight } from "./conversions";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState('');

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

  function handleChange(event: any) {
    setLocation(event.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!location) {
      return;
    }
    getWeather(location);
    setLocation("");
  }

  async function getWeather(loc: any) {
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
    time === "day" ? setStyles("day") : setStyles("night");
  }

  function setStyles(time: string) {
    const body = document.querySelector("body") as HTMLBodyElement;
    const content = document.querySelector(".content") as HTMLElement;
    const location = document.querySelector("#location") as HTMLElement;
    const submit = document.querySelector("#submit") as HTMLElement;
    const tempScaleChooser = document.querySelector(
      ".temp-scale-chooser"
    ) as HTMLElement;
    const githubLink = document.querySelector(".github-link") as HTMLElement;

    if (body && content && location && submit && tempScaleChooser && githubLink) {
      if (time === "day") {
        body.style.backgroundColor = "#B0E6E8";
        body.style.transition = "background-color 1000ms linear";
        document.body.style.color = "#000";
        content.style.outline = "2px solid black";
        location.style.border = "1px solid black";
        submit.style.border = "1px solid black";
        tempScaleChooser.style.borderColor = "#000";
        location.style.color = "#000";
        submit.style.color = "#000";
        githubLink.style.color = "black";
      } else {
        body.style.backgroundColor = "#101028";
        body.style.transition = "background-color 1000ms linear";
        document.body.style.color = "#fff";
        content.style.outline = "2px solid white";
        location.style.border = "1px solid white";
        submit.style.border = "1px solid white";
        tempScaleChooser.style.borderColor = "#fff";
        location.style.color = "#fff";
        submit.style.color = "#fff";
        githubLink.style.color = "white";
      }
    }
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
        {data === '' ? '' : data === "Error" ? (
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
