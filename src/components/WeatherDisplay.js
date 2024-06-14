import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div>No data available</div>;
  }

  const { name, main, weather, wind } = weatherData;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp} °F</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Condition: {weather[0].description}</p>
      <p>Wind Speed: {wind.speed} mph</p>
    </div>
  );
};

export default WeatherDisplay;
