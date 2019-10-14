import React from 'react';
import '../css/we-services-section.css';
import WeServicesItem from './fragments/we-servieces-item';

class WeServices extends React.Component {
    render() {
        return (
          <section className="section-we-services p-100">
              <div className="container we-services-container">
                  <div
                    className="d-flex justify-content-center align-items-center we-services-title">
                      <h2>Services We offer</h2>
                  </div>
                  <div className="row we-services-inner">
                      <WeServicesItem
                        iconName={'deliveryIcon'}
                        title={'Home Delivery'}
                        content={'Lorem Ipsum is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.'}
                      />
                      <WeServicesItem
                        iconName={'deliveryIcon'}
                        title={'Home Delivery'}
                        content={'Lorem Ipsum is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.'}
                      />
                      <WeServicesItem
                        iconName={'deliveryIcon'}
                        title={'Home Delivery'}
                        content={'Lorem Ipsum is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.'}
                      />
                      <WeServicesItem
                        iconName={'deliveryIcon'}
                        title={'Home Delivery'}
                        content={'Lorem Ipsum is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.'}
                      />
                      <WeServicesItem
                        iconName={'deliveryIcon'}
                        title={'Home Delivery'}
                        content={'Lorem Ipsum is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.'}
                      />
                      <WeServicesItem
                        iconName={'deliveryIcon'}
                        title={'Home Delivery'}
                        content={'Lorem Ipsum is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.'}
                      />
                  </div>
              </div>
          </section>
        );
    }
}

export default WeServices;