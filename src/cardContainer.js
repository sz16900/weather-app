const cardContainer = () => {
  const main = document.getElementById('main-container');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  // Title
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  const city = document.createElement('h1');
  city.setAttribute('id', 'city-country');
  const temperature = document.createElement('h2');
  temperature.setAttribute('id', 'temperature');
  const span = document.createElement('img');
  span.setAttribute('id', 'icon');

  // Time
  const cardTime = document.createElement('h2');
  cardTime.setAttribute('id', 'card-time');

  // Description + Humidity
  const descHum = document.createElement('div');
  descHum.setAttribute('id', 'desc-hum-container');
  const description = document.createElement('h2');
  description.setAttribute('id', 'description');
  const humidity = document.createElement('i');
  humidity.setAttribute('id', 'humidity');
  humidity.setAttribute('aria-hidden', 'true');
  humidity.classList.add('fa', 'fa-tint');
  descHum.appendChild(description);
  descHum.appendChild(humidity);

  // Sunrise + Sunset
  const sunContainer = document.createElement('div');
  sunContainer.setAttribute('id', 'sun-container');

  const sunriseContainer = document.createElement('div');
  sunriseContainer.setAttribute('id', 'sunrise-container');
  const up = document.createElement('i');
  up.classList.add('fa', 'fa-arrow-up');
  up.setAttribute('aria-hidden', 'true');
  const sunrise = document.createElement('h4');
  sunrise.setAttribute('id', 'high-temp');
  sunriseContainer.appendChild(up);
  sunriseContainer.appendChild(sunrise);
  sunContainer.appendChild(sunriseContainer);

  const sunsetContainer = document.createElement('div');
  sunsetContainer.setAttribute('id', 'sunset-container');
  const down = document.createElement('i');
  down.classList.add('fa', 'fa-arrow-down');
  down.setAttribute('aria-hidden', 'true');
  const sunset = document.createElement('h4');
  sunset.setAttribute('id', 'low-temp');
  sunsetContainer.appendChild(down);
  sunsetContainer.appendChild(sunset);
  sunContainer.appendChild(sunsetContainer);

  cardTitle.appendChild(city);
  cardTitle.appendChild(temperature);
  cardTitle.appendChild(span);
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardTime);
  cardContainer.appendChild(descHum);
  cardContainer.appendChild(sunContainer);

  main.appendChild(cardContainer);
};

export default cardContainer;
