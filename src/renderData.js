import getWeatherData from './getWeatherData';

const renderData = (info) => {
  getWeatherData(info)
    .then((data) => {
      const h1 = document.getElementById('city-country');
      h1.textContent = `${data.city}, ${data.country}`;
      const temperature = document.getElementById('temperature');
      temperature.textContent = `${Math.floor(data.temperature)}°`;
      temperature.value = data.temperature;
      const span = document.getElementById('icon');
      span.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
      const time = document.getElementById('card-time');
      time.textContent = data.current_time;
      const description = document.getElementById('description');
      description.textContent = data.description;
      const humidity = document.getElementById('humidity');
      humidity.textContent = ` ${data.humidity}%`;
      const high = document.getElementById('high-temp');
      high.textContent = `${Math.floor(data.highTemp)}°`;
      high.value = Math.floor(data.highTemp);
      const low = document.getElementById('low-temp');
      low.textContent = `${Math.floor(data.lowTemp)}°`;
      low.value = Math.floor(data.lowTemp);
    })
    .catch((e) => console.log(e));
};

export default renderData;
