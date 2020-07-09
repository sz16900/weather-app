const renderSlider = () => {
  const main = document.getElementById('main-container');
  const div = document.createElement('div');
  div.classList.add('slider-container');
  const label = document.createElement('label');
  label.classList.add('switch');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.value = 0;
  input.addEventListener('click', () => {
    const mainTemp = document.getElementById('temperature');
    const highTemp = document.getElementById('high-temp');
    const lowTemp = document.getElementById('low-temp');
    if (input.value === '0') {
      mainTemp.textContent = `${Math.floor((mainTemp.value - 32) / 1.8)}°`;
      highTemp.textContent = `${Math.floor((highTemp.value - 32) / 1.8)}°`;
      lowTemp.textContent = `${Math.floor((lowTemp.value - 32) / 1.8)}°`;
      input.value = '1';
    } else {
      mainTemp.textContent = `${Math.floor(mainTemp.value)}°`;
      highTemp.textContent = `${Math.floor(highTemp.value)}°`;
      lowTemp.textContent = `${Math.floor(lowTemp.value)}°`;
      input.value = '0';
    }
  });
  const span = document.createElement('span');
  span.classList.add('slider');
  label.appendChild(input);
  label.appendChild(span);
  div.appendChild(label);

  main.appendChild(div);
};

export default renderSlider;
