import getWeatherData from './getWeatherData';

const renderData = (info) => {
  getWeatherData(info)
    .then((data) => {
      const h1 = document.getElementById('city-country');
      h1.textContent = `${data.city}, ${data.country}`;

      const span = document.getElementById('icon');
      span.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
      const time = document.getElementById('card-time');
      time.textContent = data.current_time;
      const description = document.getElementById('description');
      description.textContent = data.description;
      const humidity = document.getElementById('humidity');
      humidity.textContent = ` ${data.humidity}%`;

      const temperature = document.getElementById('temperature');
      const high = document.getElementById('high-temp');
      const low = document.getElementById('low-temp');
      const input = document.getElementById('input-bar');
      if (input.value === '0') {
        temperature.textContent = `| ${Math.floor(data.temperature)}°`;
        temperature.value = data.temperature;
        high.textContent = `${Math.floor(data.highTemp)}°`;
        high.value = Math.floor(data.highTemp);
        low.textContent = `${Math.floor(data.lowTemp)}°`;
        low.value = Math.floor(data.lowTemp);
      } else {
        temperature.textContent = `| ${Math.floor(
          (data.temperature - 32) / 1.8,
        )}°`;
        high.textContent = `${Math.floor((data.highTemp - 32) / 1.8)}°`;
        low.textContent = `${Math.floor((data.lowTemp - 32) / 1.8)}°`;
      }
    })
    .catch((e) => {
      const input = document.getElementById('fname');
      input.placeholder = e;
    });
};

export default renderData;
