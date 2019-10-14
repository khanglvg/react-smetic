import React from 'react';
import '../css/header.css';
import Icon from './fragments/icon';

class Header extends React.Component {
    render() {
        return (
          <header className="App-header">
              <div
                className="container-fluid d-flex header-container my-navbar">
                  <div className="header-logo-container">
                      <a href="https://google.com.vn"
                         aria-label="Smetic">
                          <img
                            src="https://www.pngarts.com/files/2/Iron-Man-PNG-High-Quality-Image.png"
                            alt="Logo"/>
                      </a>
                  </div>
                  <div className="row w-100 p-0 m-0">

                      <div
                        className="col-3 p-0 pl-2 d-flex justify-content-center align-items-center header-content-container">
                          <div className="navbar-nav-scroll w-100">
                              <ul
                                className="navbar-nav bd-navbar-nav flex-row justify-content-around align-items-center">
                                  <li className="nav-item">
                                      <a className="nav-link active"
                                         href="Smetic.html"
                                         onClick="">Home</a>
                                  </li>
                                  <li
                                    className="nav-item dropdown header-content-menu">
                                      <a className="nav-link "
                                         href="/docs/4.3/getting-started/introduction/"
                                         id="dropdownMenu"
                                         data-toggle="dropdown"
                                         aria-haspopup="true"
                                         aria-expanded="false">Menu</a>
                                      <div
                                        className="dropdown-menu header-content-menu-dropdown"
                                        aria-labelledby="dropdownMenu">
                                          <div className="d-flex">
                                              <div
                                                className="col-4 p-0">
                                                  <div>
                                                      <a className=""
                                                         href="#">ABC</a>
                                                  </div>
                                                  <div>
                                                      <a className=""
                                                         href="#">XYZ</a>
                                                  </div>
                                              </div>
                                              <div
                                                className="col-4 p-0">
                                                  <div>
                                                      <a className=""
                                                         href="#">ABC</a>
                                                  </div>
                                                  <div>
                                                      <a className=""
                                                         href="#">XYZ</a>
                                                  </div>
                                              </div>
                                              <div
                                                className="col-4 p-0">
                                                  <div>
                                                      <a className=""
                                                         href="#">ABC</a>
                                                  </div>
                                                  <div>
                                                      <a className=""
                                                         href="#">XYZ</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link "
                                         href="/docs/4.3/examples/"
                                         onClick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">About
                                          Us</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link"
                                         href="https://themes.getbootstrap.com/"
                                         onClick="ga('send', 'event', 'Navbar', 'Community links', 'Themes');"
                                         target="_blank" rel="noopener">Contact
                                          Us</a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div
                        className="col-9 p-0 d-flex justify-content-end align-items-center">

                          <div
                            className="col-9 m-0 p-0 d-flex align-items-center">
                              <div className="input-group">
                                  <input type="text"
                                         className="form-control remove-outline"
                                         placeholder="What are you looking for?"
                                         aria-label="Recipient's username"
                                         aria-describedby="basic-addon2"/>
                                  <div className="input-group-append">
                                      <button
                                        className="btn header-search-box-button remove-outline"
                                        type="button">
                                          <Icon
                                            name={'searchIcon'}
                                            width={20}
                                            height={20}
                                            color={'white'}/>
                                          <span
                                            className="ml-2">Search</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-3 row p-0 m-0 ml-2">
                              <div
                                className="col-5 p-2 d-flex align-items-center header-shopping-cart">
                                  <button
                                    className="btn w-100 d-flex justify-content-around align-items-center remove-outline">
                                      <Icon
                                      name={'shoppingCart'}
                                      width={20}
                                      height={20}
                                      color={'white'}/>
                                      <span
                                        className="header-shopping-cart-title">
                                        Cart
                                    </span>
                                      <span
                                        className="header-shopping-cart-count">
                                        0
                                    </span>
                                  </button>
                              </div>
                              <div
                                className="col-7 p-2 d-flex align-items-center header-user-account dropdown">
                                  <button
                                    className="btn w-100 d-flex justify-content-around align-items-center dropdown-toggle remove-outline"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                      <Icon
                                        name={'userShape'}
                                        width={20}
                                        height={20}
                                        color={'white'}/>
                                      <span>
                                        My account
                                    </span>
                                      <Icon
                                        name={'downArrow'}
                                        width={17}
                                        height={17}
                                        color={'white'}/>
                                  </button>
                                  <div className="dropdown-menu"
                                       aria-labelledby="dropdownMenuButton">
                                      <a className="dropdown-item"
                                         href="#">My account</a>
                                      <a className="dropdown-item"
                                         href="#">My orders</a>
                                      <div
                                        className="dropdown-divider"></div>
                                      <a
                                        className="color-red dropdown-item"
                                        href="#">Log
                                          out</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
        );
    }
}

export default Header;