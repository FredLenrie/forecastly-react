import React, { useState } from 'react';
import './HowItWorksSection.css';

const HowItWorksSection = () => {
  const [weatherInfo, setWeatherInfo] = useState('');

  const getWeather = () => {
    const city = document.getElementById("cityInput").value;
    const apiKey = '6c78fe8f2f3d3fa181e658d23a720f23'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherInfo(`
          <h2>${data.name}</h2>
          <p>${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        setWeatherInfo("<p>Failed to fetch weather data. Please try again later.</p>");
      });
  };

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h1 className="header">Check Weather</h1>
        <p>Enter a city name to get the weather:</p>
        <input type="text" id="cityInput" placeholder="Enter city name" />
        <button onClick={getWeather}>Get Weather</button>
        <div id="weatherInfo" dangerouslySetInnerHTML={{ __html: weatherInfo }}></div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
