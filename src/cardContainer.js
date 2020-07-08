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

  // Description
  const description = document.createElement('h1');
  description.setAttribute('id', 'description');

  cardTitle.appendChild(city);
  cardTitle.appendChild(temperature);
  cardTitle.appendChild(span);
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardTime);
  cardContainer.appendChild(description);

  main.appendChild(cardContainer);
};

export default cardContainer;
