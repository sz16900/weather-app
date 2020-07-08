const renderSlider = () => {
  const main = document.getElementById('main-container');
  const div = document.createElement('div');
  div.classList.add('slider-container');
  const label = document.createElement('label');
  label.classList.add('switch');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  const span = document.createElement('span');
  span.classList.add('slider');
  label.appendChild(input);
  label.appendChild(span);
  div.appendChild(label);

  main.appendChild(div);
};

export default renderSlider;
