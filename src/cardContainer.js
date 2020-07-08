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
  const humidity = document.createElement('h2');
  humidity.setAttribute('id', 'humidity');
  descHum.appendChild(description);
  descHum.appendChild(humidity);

  // Sunrise + Sunset
  const sunContainer = document.createElement('div');
  sunContainer.setAttribute('id', 'sun-container');

  const sunriseContainer = document.createElement('div');
  sunriseContainer.setAttribute('id', 'sunrise-container');
  const sunr = document.createElement('i');
  sunr.setAttribute('id', 'sunrise');
  sunr.classList.add('fa', 'fa-sun-o');
  sunr.setAttribute('aria-hidden', 'true');
  const up = document.createElement('i');
  up.classList.add('fa', 'fa-arrow-up');
  up.setAttribute('aria-hidden', 'true');
  const sunrise = document.createElement('h4');
  sunrise.setAttribute('id', 'sunrise-time');
  sunriseContainer.appendChild(sunr);
  sunriseContainer.appendChild(up);
  sunriseContainer.appendChild(sunrise);
  sunContainer.appendChild(sunriseContainer);

  const sunsetContainer = document.createElement('div');
  sunsetContainer.setAttribute('id', 'sunset-container');
  const down = document.createElement('i');
  down.classList.add('fa', 'fa-arrow-down');
  down.setAttribute('aria-hidden', 'true');
  const sunset = document.createElement('h4');
  sunset.setAttribute('id', 'sunset-time');
  const sund = document.createElement('i');
  sund.setAttribute('id', 'sunset');
  sund.classList.add('fa', 'fa-sun-o');
  sund.setAttribute('aria-hidden', 'true');
  sunsetContainer.appendChild(sund);
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
