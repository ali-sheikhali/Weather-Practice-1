import { useState } from "react";
import React from "react";
import MainForm from "./components/MainForm";
import Weather from "./components/Weather";
const App = () => {
  const [weatherCast, setWeatherCast] = useState({
    name: null,
    description: null,
    city: null,
    country: null,
    humidity: null,
    error: null,
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a27accb2f7c2aa11962c40a3696e282a&units=metric`
    );
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      setWeatherCast({
        name: data.name,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        error: null,
      });
    }else{
      alert('please fill the input')
    }
  };
  return (
    <div className="bg-orange-400 h-screen  ">
      <MainForm getWeather={getWeather} weatherCast={weatherCast} />
      <Weather
        name={weatherCast.name}
        description={weatherCast.description}
        city={weatherCast.city}
        country={weatherCast.country}
        humidity={weatherCast.humidity}
        error={weatherCast.error}
      />
    </div>
  );
};

export default App;
