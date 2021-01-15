const weatherApiUrl = 'http://api.weatherbit.io/v2.0/current';
const weatherApi16DaysUrl = 'http://api.weatherbit.io/v2.0/forecast/daily';

const weatherData = {
  cityName: '',
  temp: 0,
  apparentTemp: 0,
  weatherDescription: '',
  visilibity: 0,
  windSpeed: 0,
  sunrise: '',
  sunset: '',
};

window.onload = () => {
  getWeather();
};

function getWeather() {
  fetch(
    'https://api.weatherbit.io/v2.0//current?lat=50&lon=19&key=795441d8fff6483ba206361518dc84f3',
    { method: 'GET' },
  )
    .then((resp) => {
      if (resp.ok) return resp.json();
      else throw new Error('Błąd sieci!');
    })
    .then((data) => {
      setWeatherData(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const setWeatherData = (data) => {
  weatherData.cityName = data.data[0].city_name;
  weatherData.temp = data.data[0].temp;
  weatherData.apparentTemp = data.data[0].app_temp;
  weatherData.weatherDescription = data.data[0].weather.description;
  weatherData.visilibity = data.data[0].vis;
  weatherData.windSpeed = data.wind_spd;
  weatherData.sunrise = data.sunrise;
  weatherData.sunset = data.sunset;

  insertWeatherDataToStage();
};

const insertWeatherDataToStage = () => {
  const cityName = (document.querySelector(
    '.city .data',
  ).innerText = `${weatherData.cityName}`);
  const temperature = (document.querySelector(
    '.temperature .data',
  ).innerText = `${weatherData.temp}`);
};
