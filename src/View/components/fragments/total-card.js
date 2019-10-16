import React from 'react';
import { numberWithCommas } from '../../../utils/correct-money';

class TotalCard extends React.Component {
    render() {
        const {totalPrice} = this.props;
        return (
          <div className={'w-100 h-100'}
               style={{
                   minHeight: '140px',
                   backgroundColor: 'white',
                   borderRadius: '5px',
                   color: 'black',
               }}>

              <div className={'d-flex p-3'}>
                  <div className={'col-6 p-0 pt-1'}>
                      <p className={'m-0'}>
                          {this.props.isEng ?
                            'Subtotal:' :
                            'Tạm tính:'}
                      </p>
                  </div>

                  <div className={'col-6 p-0 pt-1 d-flex justify-content-end'}>
                      <p className={'m-0'}>
                          {numberWithCommas(totalPrice)} đ
                      </p>
                  </div>
              </div>

              <div className={'d-flex p-3'}
                   style={{borderTop: '1px solid #eee'}}>
                  <div className={'col-6 p-0 pt-1'}>
                      <p className={'m-0'}>
                          {this.props.isEng ?
                            'Total:' :
                            'Thành tiền:'}
                      </p>
                  </div>

                  <div className={'col-6 p-0 d-flex justify-content-end'}>
                      <p className={'m-0'} style={{
                          color: 'red',
                          fontSize: '1.25rem',
                      }}>
                          {numberWithCommas(totalPrice)} đ
                      </p>
                  </div>
              </div>

          </div>
        );
    }
}

export default TotalCard;