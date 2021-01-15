import { getWeather } from './scripts/getWeatherForecast.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM elements for Weather Quotes are ready');
  getWeather();
});
