import React from 'react';
import '../css/footer.css';

class Footer extends React.Component {
    render() {
        return (
          <footer className="footer">
              <div className="footer-wrap-content">
                  <div className="container p-0 d-flex">
                      <div className="col-4 p-0 m-0">
                          <div>
                              <div
                                className="footer-title footer-customer-sp-title">
                                  <span>Customer Supports</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-3 p-0 m-0">
                          <div>
                              <div
                                className="footer-title footer-about-us-title">
                                  <span></span>About Us
                              </div>
                          </div>
                      </div>
                      <div className="col-3 p-0 m-0">
                          <div>
                              <div
                                className="footer-title footer-policy-title">
                                  <span>Policy</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-3 p-0 m-0">
                          <div>
                              <div
                                className="footer-title footer-connection-title">
                                  <span>Connections</span>
                                  <h4 className="mt-4">+84 (094) 529
                                      9117</h4>
                                  <div
                                    className="mt-4 mb-2 footer-connection-content footer-connection-name">Phạm
                                      Vy
                                  </div>
                                  <div
                                    className="mb-2 footer-connection-content footer-connection-address">182,
                                      Le Dai Hanh St. HoChiMinh city,
                                      Viet Nam.
                                  </div>
                                  <div
                                    className="footer-connection-content">abc@gmail.com
                                  </div>
                                  <ul
                                    className="nav mt-3 footer-connection-social-media">
                                      <li className="mr-2"><a
                                        href="#"><i
                                        className="fa fa-facebook"/></a>
                                      </li>
                                      <li className="mr-2"><a
                                        href="#"><i
                                        className="fa fa-linkedin"/></a>
                                      </li>
                                      <li className="mr-2"><a
                                        href="#"><i
                                        className="fa fa-twitter"/></a>
                                      </li>
                                      <li className="mr-2"><a
                                        href="#"><i
                                        className="fa fa-google-plus"/></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
        );
    }
}

export default Footer;