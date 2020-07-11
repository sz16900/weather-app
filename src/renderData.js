import getWeatherData from './getWeatherData';

const renderData = (info) => {
  getWeatherData(info)
    .then((data) => {
      const {
        currentTime,
        description,
        humidity,
        temperature,
        highTemp,
        lowTemp,
        icon,
        city,
        country,
      } = data;
      const h1 = document.getElementById('city-country');
      h1.textContent = `${city}, ${country}`;

      const span = document.getElementById('icon');
      span.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const time = document.getElementById('card-time');
      time.textContent = currentTime;
      const descript = document.getElementById('description');
      descript.textContent = description;
      const hum = document.getElementById('humidity');
      hum.textContent = ` ${humidity}%`;

      const temp = document.getElementById('temperature');
      const high = document.getElementById('high-temp');
      const low = document.getElementById('low-temp');
      const input = document.getElementById('input-bar');
      if (input.value === '0') {
        temp.textContent = `| ${Math.floor(temperature)}°`;
        temp.value = temperature;
        high.textContent = `${Math.floor(highTemp)}°`;
        high.value = Math.floor(highTemp);
        low.textContent = `${Math.floor(lowTemp)}°`;
        low.value = Math.floor(lowTemp);
      } else {
        temp.textContent = `| ${Math.floor((temperature - 32) / 1.8)}°`;
        high.textContent = `${Math.floor((highTemp - 32) / 1.8)}°`;
        low.textContent = `${Math.floor((lowTemp - 32) / 1.8)}°`;
      }
    })
    .catch((e) => {
      const input = document.getElementById('fname');
      input.placeholder = e;
    });
};

export default renderData;
