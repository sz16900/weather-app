const cardContainer = () => {
  const main = document.getElementById('main-container');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title', 'justify-space-between');
  const city = document.createElement('h1');
  city.setAttribute('id', 'city-country');
  const temperature = document.createElement('h2');
  temperature.setAttribute('id', 'temperature');
  const span = document.createElement('img');
  span.setAttribute('id', 'icon');

  cardTitle.appendChild(city);
  cardTitle.appendChild(temperature);
  cardTitle.appendChild(span);
  cardContainer.appendChild(cardTitle);

  main.appendChild(cardContainer);
};

export default cardContainer;
