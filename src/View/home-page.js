import React from 'react';
import './css/home-page.css';
import MainSlider from './components/main-slider-section';
import ShowProduct from './components/show-product-section';
import WeServices from './components/we-services-section.js';

class HomePage extends React.Component {
    render() {
        return (
          <div className={'home-page'}>
              <MainSlider/>
              <ShowProduct/>
              <WeServices/>
          </div>
        );
    }
}

export default HomePage;