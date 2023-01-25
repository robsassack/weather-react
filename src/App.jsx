import { useState, useEffect } from "react";
import Weather from "./Weather";
import apiKey from "./config";
import "./App.css";

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    getWeather("Detroit");
  }, []);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit() {
    if (!location) {
      return;
    }
    getWeather(location);
    setLocation('');
  }

  async function getWeather(loc) {
    setData(null);
    console.log("Calling API...")
    const key = apiKey.key;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}&units=imperial`)
    const data = await response.json();
    setData(data);
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Mini Weather</h1>
        <div className='form'>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Location'
            onChange={handleChange}
            value={location}
          />
          <button id='submit' onClick={handleSubmit}>Go</button>
        </div>
      </div>
      <div className='content'>
        <Weather data={data} />
      </div>
    </div>
  );
}

export default App;
