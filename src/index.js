import './css/main.css';
import './css/slider.css';

import cardContainer from './cardContainer';
import renderData from './renderData';
import renderSlider from './renderSlider';
import renderSearch from './renderSearchBar';

cardContainer();
renderData('quito');
renderSlider();
renderSearch();
