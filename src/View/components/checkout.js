import React from 'react';
import ProductCart from './fragments/product-cart';
import TotalCard from './fragments/total-card';
import { withRouter } from 'react-router-dom';
import '../css/checkout.css';
import NotFound from './not-found';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.totalPrice = 0;
    }

    handleClickBuy = () => {
        let path = `/checkout/confirmation`;
        const props = {
            price: this.totalPrice,
            userId: 'SM-133',
        };
        this.props.history.push(path, props);
    };

    render() {
        if (!this.props.location.state) {
            return (<NotFound/>);
        }

        const {productName, vendorName, productQuantity, price, isEng} = this.props.location.state;
        this.totalPrice = parseInt(price) * parseInt(productQuantity);
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
                          <TotalCard totalPrice={this.totalPrice}
                                     isEng={isEng}/>
                          <div
                            className="d-flex mt-3 w-100 justify-content-center align-items-center btn-buy">
                              <button
                                onClick={this.handleClickBuy}
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