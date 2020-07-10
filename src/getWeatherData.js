const getWeatherData = async (info) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${info}&units=imperial&APPID=89aa0327608e9bae4e9fcb1f777577f9`,
    { mode: 'cors' },
  );

  if (!response.ok) {
    throw new Error('Something went wrong with your query.');
  } else {
    const gatheredData = {};
    const weatherData = await response.json();

    //   city & country
    gatheredData.city = weatherData.name;
    gatheredData.country = weatherData.sys.country;
    //   temperature
    gatheredData.temperature = weatherData.main.temp;
    //   current time
    const localTimeOffset = new Date().getTimezoneOffset() * 60;
    const currentDate = new Date(
      new Date() - (-localTimeOffset - weatherData.timezone) * 1000,
    );
    const theTime = currentDate.toLocaleTimeString('en-GB').slice(0, -3);
    gatheredData.currentTime = theTime;
    //   main condition
    gatheredData.icon = weatherData.weather[0].icon;
    gatheredData.description = weatherData.weather[0].description;
    //   humidity
    gatheredData.humidity = weatherData.main.humidity;
    // high temp
    gatheredData.highTemp = weatherData.main.temp_max;
    // low temp
    gatheredData.lowTemp = weatherData.main.temp_min;

    return gatheredData;
  }
};

export default getWeatherData;
