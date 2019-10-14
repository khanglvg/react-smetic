import React from 'react';
import CarouselItem from './fragments/carousel-item';
import MainSliderCard from './fragments/main-slider-card';

class MainSlider extends React.Component {
    render() {
        return (
          <section className="main-slider-container">
              <div id="carouselExampleIndicators"
                   className="carousel slide" data-ride="carousel">
                  <div
                    className="carousel-inner main-slider-carousel-inner">
                      <div className="carousel-item active">
                          <CarouselItem
                            title={'Title'}
                            content={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue'}/>
                      </div>
                      <div className="carousel-item">
                          <CarouselItem
                            title={'Title'}
                            content={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue'}/>
                      </div>
                      <div className="carousel-item">
                          <CarouselItem
                            title={'Title'}
                            content={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue'}/>
                      </div>
                  </div>
                  <a className="carousel-control-prev"
                     href="#carouselExampleIndicators" role="button"
                     data-slide="prev">
                    <span className="carousel-control-prev-icon"
                          aria-hidden="true"/>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next"
                     href="#carouselExampleIndicators" role="button"
                     data-slide="next">
                    <span className="carousel-control-next-icon"
                          aria-hidden="true"/>
                      <span className="sr-only">Next</span>
                  </a>
              </div>
              <div className="container p-3 main-slider-info-card">
                  <div
                    className="d-flex align-items-center main-slider-info-card-container">
                      <MainSliderCard
                      imgSrc={'http://z6z7q2p8.stackpathcdn.com/wp-content/uploads/2015/07/iconbox1.jpg'}
                      title={'Products'}
                      content={'Lorem ipsum dolor sit amet consectetuer aliquet.'}/>

                      <MainSliderCard
                        imgSrc={'http://z6z7q2p8.stackpathcdn.com/wp-content/uploads/2015/07/iconbox2.jpg'}
                        title={'Products'}
                        content={'Lorem ipsum dolor sit amet consectetuer aliquet.'}/>

                      <MainSliderCard
                        imgSrc={'http://z6z7q2p8.stackpathcdn.com/wp-content/uploads/2015/07/iconbox3.jpg'}
                        title={'Products'}
                        content={'Lorem ipsum dolor sit amet consectetuer aliquet.'}/>

                  </div>
              </div>
          </section>
        );
    }
}

export default MainSlider;