import React from 'react';
import '../../css/main-slider-section.css';
import Icon from './icon.js';

class CarouselItem extends React.Component{
    render() {
        const {title, content} = this.props;
        return (
          <div
            className="container d-flex align-items-center p-0 main-slider-carousel-item-container">
              <div className="d-flex w-100 p-0 m-0">
                  <div
                    className="col-5 main-slider-carousel-item-image-container">
                      <img
                        src="http://z6z7q2p8.stackpathcdn.com/wp-content/uploads/revslider/home-01/slider2.png"
                        alt="cake-main-slider"/>
                  </div>
                  <div
                    className="col-7 w-100 d-flex align-items-center main-slider-carousel-item-info-container">
                      <div>
                          <div
                            className="main-slider-carousel-item-info-title-container">
                              {title}
                          </div>
                          <div
                            className="mt-2 main-slider-carousel-item-info-description-container">
                              {content}
                          </div>
                          <div
                            className="mt-4 main-slider-carousel-item-info-button-container">
                              <button
                                className="d-flex btn w-100 align-items-center justify-content-around">
                                  See more
                                  <Icon name="seeMore" width={30} height={30} color="#5FA8D3" />
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default CarouselItem;