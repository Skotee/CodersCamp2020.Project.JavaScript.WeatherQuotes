const weatherApiUrl = 'http://api.weatherbit.io/v2.0/current';
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

function getWeather() {
  fetch(`${weatherApiUrl}?lat=50&lon=19&key=795441d8fff6483ba206361518dc84f3`, {
    method: 'GET',
  })
    .then((resp) => {
      if (resp.ok) return resp.json();
      else throw new Error('Network error');
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
  weatherData.windSpeed = data.data[0].wind_spd.toFixed(2);
  weatherData.sunrise = data.data[0].sunrise;
  weatherData.sunset = data.data[0].sunset;

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

export { getWeather };
