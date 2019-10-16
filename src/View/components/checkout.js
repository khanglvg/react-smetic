import React from 'react';
import ProductCart from './fragments/product-cart';
import TotalCard from './fragments/total-card';
import { withRouter } from 'react-router-dom';
import '../css/checkout.css';

class Checkout extends React.Component {
    render() {
        const {productName, vendorName, productQuantity, price, isEng} = this.props.location.state;
        const totalPrice = parseInt(price) * parseInt(productQuantity);
        return (
          <div className={'w-100 h-100 checkout-cover'}>
              <div className="container p-0 pb-3 d-flex flex-wrap">
                  <div className={'d-flex flex-wrap p-0 m-0 w-100'}>
                      <div className={'col-9 p-3'}>
                          <ProductCart
                            isEng={isEng}
                            productName={productName}
                            vendorName={vendorName}
                            productQuantity={productQuantity}
                            price={price}/>
                      </div>

                      <div className={'col-3 p-3'}>
                          <TotalCard totalPrice={totalPrice}
                                     isEng={isEng}/>
                          <div
                            className="d-flex mt-3 w-100 justify-content-center align-items-center btn-buy">
                              <button
                                className="d-flex btn w-100 align-items-center justify-content-around">
                                  BUY
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default withRouter(Checkout);