import React from 'react';
import '../../css/main-slider-section.css'

class MainSliderCard extends React.Component{
    render() {
        const {imgSrc, title, content} = this.props;
        return (
          <div
            className="col-4 d-flex align-items-center main-slider-info-card-content-container">
              <div
                className="d-flex w-100 justify-content-center align-items-center">
                  <div className="col-4 p-0" style={{
                      maxHeight: '150px',
                      maxWidth: '150px',
                      overflow: 'hidden'
                  }}>
                      <img
                          style={{
                              width: '100%',
                              height: '100%'
                          }}
                        src={imgSrc}
                        alt="abc"/>
                  </div>
                  <div className="col-8 w-100">
                      <div
                        className="main-slider-info-card-content-title">
                          {title}
                      </div>
                      <div
                        className="mt-2 main-slider-info-card-content-description">
                          {content}
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default MainSliderCard;