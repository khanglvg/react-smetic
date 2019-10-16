import React from 'react';
import ProductCart from './fragments/product-cart';
import TotalCard from './fragments/total-card';
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {
    render() {
        const {productName, vendorName, productQuantity, price, isEng} = this.props.location.state;
        const totalPrice = parseInt(price) * parseInt(productQuantity);
        return (
          <div className={'w-100 h-100'}
               style={{
                   backgroundColor: '#eee',
                   marginTop: '64px',
                   minHeight: '700px',
               }}>
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
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default withRouter(Checkout);