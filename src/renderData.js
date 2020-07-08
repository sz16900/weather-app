import getWeatherData from './getWeatherData';

const renderData = () => {
  getWeatherData().then((data) => {
    console.log(data);
    const h1 = document.getElementById('city-country');
    h1.textContent = `${data.city}, ${data.country}`;
    const temperature = document.getElementById('temperature');
    temperature.textContent = `${Math.floor(data.temperature)}°`;
    const span = document.getElementById('icon');
    span.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    const time = document.getElementById('card-time');
    time.textContent = data.current_time;
    const description = document.getElementById('description');
    description.textContent = data.description;
  });
};

export default renderData;
