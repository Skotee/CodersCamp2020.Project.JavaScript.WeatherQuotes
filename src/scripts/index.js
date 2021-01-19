/* eslint-disable */
import "regenerator-runtime/runtime"; //async/await with Parcel
import { changeWeather } from "./script";

import { CheckWeatherMain, displayQuotes } from "/src/scripts/quotes.js";

// autolokalizacja
let localization = { lat: 50, lng: 19 };
let findMebtn = document.getElementById("FindMeBtn");
let foramttedAdressParagraph = document.getElementById("info");
findMebtn.addEventListener("click", getLocation);
let temporaryCityInfo = document.getElementById("test");
const container = document.querySelector(".container");
const weatherbox = document.querySelector(".weatherbox-wrapper");

// sprawdzam dlugosc i szerokosc geograficzna, a nastepnie wrzucam je google maps api
function showPosition(position) {
  let LAT = position.coords.latitude.toFixed(4);
  let LNG = position.coords.longitude.toFixed(4);

  Object.assign(localization, { lat: LAT, lng: LNG });

  // tutaj wrzucamy getWeather
  getWeatherAutoLocalization();
}
function getLocation() {
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(showPosition)
    : console.log("Brak wspracia wykrywania geolokalizacji w tej przeglądarce");
}
//-----------------------------------------------
const API_KEY = "a53136f1a7cfa62997f97997cfb14cde";
let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${localization.lat}&lon=${localization.lng}&appid=${API_KEY}`;
export var weatherData = {
  cityName: "",
  temp: 0,
  feelsTemp: 0,
  weatherType: "",
  cloudsCoverage: 0,
};

const getAndDisplayQuotes = async () => {
  const ContentElement = document.querySelector("#quote-content");
  const AuthorElement = document.querySelector("#quote-author");
  let quote = await CheckWeatherMain(weatherData.weatherType);

  displayQuotes(quote, ContentElement, AuthorElement);
};

const getWeather = async (cityName) => {
  try {
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    const response = await fetch(`${weatherApiUrl}`);
    if (response.ok) {
      const data = await response.json();

      setWeatherData(data);
      changeBackgroundImg();

      await getAndDisplayQuotes();
    }
  } catch (error) {
    console.log("get weather nie działa - wchodzi blok catch", error);
  }
};

const getWeatherAutoLocalization = async () => {
  try {
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${localization.lat}&lon=${localization.lng}&appid=${API_KEY}&units=metric`;

    const response = await fetch(`${weatherApiUrl}`);
    if (response.ok) {
      const data = await response.json();

      setWeatherData(data);
      changeBackgroundImg();
      await getAndDisplayQuotes();
    }
  } catch (error) {
    console.log(
      "getWeatherAutoLocalization nie działa - wchodzi blok catch",
      error
    );
  }
};

const setWeatherData = (data) => {
  weatherData.cityName = data.name;
  weatherData.temp = Math.round(data.main.temp);
  weatherData.feelsTemp = Math.round(data.main.feels_like);
  weatherData.weatherType = data.weather[0].main;
  weatherData.cloudsCoverage = data.clouds.all;

  insertWeatherDataToStage();
};

const insertWeatherDataToStage = () => {
  Object.keys(weatherData).forEach((key) => {
    document.querySelector(`.${key} .data`) &&
      (document.querySelector(
        `.${key} .data`
      ).innerText = `${weatherData[key]}`);
  });
  document.querySelector(`#chosenCity`).innerText = `${weatherData.cityName}`;
  document.querySelector(`#feelTemp`).innerText = `${weatherData.feelsTemp}`;
  document.querySelector(`#clouds`).innerText = `${weatherData.cloudsCoverage}`;
};

console.log(weatherData);
// Wyszukiwanie za pomoca miasta

const btn = document.querySelector(".find");
const cityName = document.querySelector("#findCityInput");
btn.addEventListener("click", handleSearch);
function handleSearch() {
  getWeather(cityName.value);
  console.log(cityName.value);
}

//FUNKCJA ZMIANY TŁA
const changeBackgroundImg = () => {
  switch (weatherData.weatherType) {
    case "Clouds":
      container.style.backgroundImage =
        "url('https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg')";
      changeWeather(weather[5]);
      break;
    case "Snow":
      container.style.backgroundImage =
        "url('https://images.pexels.com/photos/4067967/pexels-photo-4067967.jpeg')";
      changeWeather(weather[0]);
      break;
    case "Thunderstorm":
      container.style.backgroundImage =
        "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg')";
      changeWeather(weather[3]);
      break;
    case "Clear":
      container.style.backgroundImage =
        "url('https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg')";
      changeWeather(weather[4]);
      break;
    case "Wind":
      container.style.backgroundImage =
        "url('https://images.pexels.com/photos/418682/pexels-photo-418682.jpeg')";
      changeWeather(weather[1]);
      break;
    case "Rain":
    case "Drizzle":
      container.style.backgroundImage =
        "url('https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg')";
      changeWeather(weather[2]);
      break;
    default:
      changeWeather(weather[5]);
  }
};
