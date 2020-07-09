import renderData from './renderData';

const renderSearch = () => {
  const main = document.getElementById('main-container');
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'fname');
  input.setAttribute('name', 'fname');
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Submit');
  button.addEventListener('click', () => {
    const info = document.getElementById('fname').value;
    renderData(info);
  });
  form.appendChild(input);
  form.appendChild(button);

  main.appendChild(form);
};
export default renderSearch;
