import React from 'react';
import './css/home-page.css';

import Header from './components/header';
import MainSlider from './components/main-slider-section';
import ShowProduct from './components/show-product-section';
import WeServices from './components/we-services-section.js';
import Footer from './components/footer';


class HomePage extends React.Component {
    render() {
        return (
          <div className={'home-page'}>
              <Header/>
              <MainSlider/>
              <ShowProduct/>
              <WeServices/>
              <Footer/>
          </div>
        );
    }
}

export default HomePage;