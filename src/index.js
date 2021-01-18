import 'regenerator-runtime/runtime' //async/await with Parcel

import { CheckWeatherMain, displayQuotes } from './scripts/quotes';

// autolokalizacja
let localization = { lat: 50, lng: 19 }

let findMebtn = document.getElementById("FindMeBtn");
let foramttedAdressParagraph = document.getElementById("info");
findMebtn.addEventListener("click", getLocation);
let temporaryCityInfo = document.getElementById("test");

// sprawdzam dlugosc i szerokosc geograficzna, a nastepnie wrzucam je google maps api
function showPosition(position) {
  let LAT = position.coords.latitude.toFixed(4);
  let LNG = position.coords.longitude.toFixed(4);

  Object.assign(localization, { lat: LAT, lng: LNG });

  console.log(localization);
  // tutaj wrzucamy getWeather
  getWeather();
}
function getLocation() {
  navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : console.log("Brak wspracia wykrywania geolokalizacji w tej przeglądarce");
}
//-----------------------------------------------
const API_KEY = 'a53136f1a7cfa62997f97997cfb14cde';
let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${localization.lat}&lon=${localization.lng}&appid=${API_KEY}`;
var weatherData = {
  cityName: '',
  temp: 0,
  feelsTemp: 0,
  weatherType: '',
  cloudsCoverage: 0
};

const getAndDisplayQuotes = async () => {
  const ContentElement = document.querySelector("#quote-content");
  const AuthorElement = document.querySelector("#quote-author");

  let quote = await CheckWeatherMain(weatherData.weatherType);

  displayQuotes(quote, ContentElement, AuthorElement);
};


const getWeather = async () => {
  try {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${localization.lat}&lon=${localization.lng}&appid=${API_KEY}`;
    const response = await fetch(`${weatherApiUrl}`)
    if (response.ok) {
      const data = await response.json();

      setWeatherData(data);

      await getAndDisplayQuotes();
    }
  } catch (error) {
    window.alert(error)
  }
}

const setWeatherData = (data) => {
  weatherData.cityName = data.name;
  weatherData.temp = data.main.temp;
  weatherData.feelsTemp = data.main.feels_like;
  weatherData.weatherType = data.weather[0].main;
  weatherData.cloudsCoverage = data.clouds.all;

  insertWeatherDataToStage();
};

const insertWeatherDataToStage = () => {
  Object.keys(weatherData).forEach((key) => {
    document.querySelector(`.${key} .data`) &&
      (document.querySelector(
        `.${key} .data`,
      ).innerText = `${weatherData[key]}`);
  });
};

console.log(weatherData);
