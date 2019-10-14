import React from 'react';
import '../../css/we-services-section.css';
import Icon from './icon';

class WeServicesItem extends React.Component {
    render() {
        const {iconName, title, content} = this.props;
        return (
          <div className="col-4">
              <div className="we-services-item">
                  <div className="d-flex">
                      <div
                        className="mr-3 we-services-item-icon">
                              <Icon name={iconName} width={30} height={30} color="white" />
                      </div>
                      <div
                        className="we-services-item-content">
                          <a href="#">
                              <h4 className="mb-3">
                                  {title}
                              </h4>
                          </a>
                          <p className="m-0">
                              {content}
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default WeServicesItem;