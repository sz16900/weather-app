const getWeatherData = async (info) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${info}&units=imperial&APPID=89aa0327608e9bae4e9fcb1f777577f9`,
    { mode: 'cors' },
  );

  if (!response.ok) {
    throw new Error(
      'Something went wrong with your query. Perhaps you mistyped a city?',
    );
  } else {
    const gatheredData = {};
    const weatherData = await response.json();

    //   city & country
    gatheredData.city = weatherData.name;
    gatheredData.country = weatherData.sys.country;
    //   temperature
    gatheredData.temperature = weatherData.main.temp;
    //   current time
    let sec = weatherData.dt;
    let date = new Date(sec * 1000);
    let timestr = date.toLocaleTimeString();
    gatheredData.current_time = timestr;
    //   main condition
    gatheredData.icon = weatherData.weather[0].icon;
    gatheredData.description = weatherData.weather[0].description;
    //   humidity
    gatheredData.humidity = weatherData.main.humidity;
    //   sunrise
    sec = weatherData.sys.sunrise;
    date = new Date(sec * 1000);
    timestr = date.toLocaleTimeString();
    gatheredData.sunrise = timestr;
    //   sunset
    sec = weatherData.sys.sunset;
    date = new Date(sec * 1000);
    timestr = date.toLocaleTimeString();
    gatheredData.sunset = timestr;
    return gatheredData;
  }
};

export default getWeatherData;
