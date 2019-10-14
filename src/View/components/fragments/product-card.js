import React from 'react';
import '../../css/product-card.css';

class ProductCard extends React.Component {

    render() {
        const {imgScr, productName, price} = this.props;
        return (
          <div className="col-3 p-3">
              <div className="show-products-card">
                  <div
                    className="show-products-card-img-container">
                      <figure className="w-100">
                          <img
                            src={imgScr}
                            alt="Products img"/>
                      </figure>
                  </div>
                  <div
                    className="w-100 show-products-card-info-container">
                      <div
                        className="mt-3 mb-3 d-flex justify-content-center align-items-center show-products-card-info-title">
                          <a
                            href="https://www.facebook.com/pham.vy.3950"
                            target="_blank">
                              {productName}
                          </a>
                      </div>
                      <div
                        className="mb-3 d-flex w-100 justify-content-center align-items-center show-products-card-info-price">
                          <span className="price">
                              {price}
                          </span>
                          <span
                            className="ml-1 currency">VND</span>
                      </div>
                      <div
                        className="d-flex w-100 justify-content-center align-items-center show-products-card-info-add-to-cart">
                          <button
                            className="d-flex btn w-100 align-items-center justify-content-around">
                              ADD TO CART
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default ProductCard;