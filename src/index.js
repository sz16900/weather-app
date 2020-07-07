// Use this for images
// http://openweathermap.org/img/wn/02n@2x.png

const p = document.querySelector('p');

async function getWeather() {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=quito&units=imperial&APPID=89aa0327608e9bae4e9fcb1f777577f9',
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  let sec = weatherData.dt;
  let date = new Date(sec * 1000);
  let timestr = date.toLocaleTimeString();
  console.log(weatherData);
  //   city & country
  console.log(weatherData.name);
  console.log(weatherData.sys['country']);
  //   temperature
  console.log(weatherData.main['temp']);
  //   current time
  console.log(timestr);
  //   main condition
  console.log(weatherData.weather[0].icon);
  console.log(weatherData.weather[0].description);
  //   humidity
  console.log(weatherData.main['humidity']);
  //   sunrise
  sec = weatherData.sys['sunrise'];
  date = new Date(sec * 1000);
  timestr = date.toLocaleTimeString();
  console.log(timestr);
  //   sunset
  sec = weatherData.sys['sunset'];
  date = new Date(sec * 1000);
  timestr = date.toLocaleTimeString();
  console.log(timestr);
}

getWeather();
