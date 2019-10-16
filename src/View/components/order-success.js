import React from 'react';
import '../css/order-success.css';

const ORDER_SUCCESS_MSG = 'Bạn đã đặt hàng thành công!';

class OrderSuccess extends React.Component {
    render() {
        return (
          <div className={'w-100 h-100 d-flex align-items-center order-success-cover'}>
              <div className="container p-0 pb-3 d-flex flex-wrap">
                  <div
                    className={'w-100 pt-3 d-flex justify-content-center align-items-center'}>
                      <h2>{ORDER_SUCCESS_MSG}</h2>
                  </div>

                  <div
                    className={'w-100 pt-3 d-flex justify-content-center align-items-center'}>
                      <a href={'/'} style={{fontSize: '1.25rem'}}>
                          ← Back
                      </a>
                  </div>

              </div>
          </div>
        );
    }
}

export default OrderSuccess;