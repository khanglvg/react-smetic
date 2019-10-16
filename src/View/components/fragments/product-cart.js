import React from 'react';
import { DEFAULT_IMAGE } from '../../../const';
import { numberWithCommas } from '../../../utils/correct-money';

class ProductCart extends React.Component {
    render() {
        const {productName, vendorName, price, productQuantity} = this.props;

        return (
          <div className={'d-flex p-0 m-0'}
               style={{
                   borderRadius: '5px',
                   backgroundColor: 'white',
                   color: 'black',
               }}>
              <div className={'d-flex m-0'} style={{
                  minWidth: '150px',
                  maxWidth: '150px',
                  minHeight: '150px',
                  maxHeight: '150px',
                  padding: '15px',
              }}>
                  <img
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '5px',
                    }}
                    src={DEFAULT_IMAGE}
                    alt={'Checkout cart img'}/>
              </div>

              <div className={'w-100 pt-3 pl-2 m-0'}>
                  <div>
                      <h3>{productName}</h3>
                  </div>

                  <div className={'d-flex'}>
                      <div className={'col-3 p-0'}>
                          <p
                            className={'font-italic'}>{this.props.isEng ?
                            'Vendor Name:' :
                            'Nhà cung cấp:'}</p>
                      </div>
                      <div className={'col-9'}>
                          <p>
                              {vendorName}
                          </p>
                      </div>
                  </div>

                  <div className={'d-flex'}>
                      <div className={'d-flex col-5 p-0'}>
                          <div className={'col-4 p-0 pt-1'}>
                              <p
                                className={'font-italic'}>{this.props.isEng ?
                                'Quantity:' :
                                'Số Lượng:'}</p>
                          </div>
                          <div className={'col-8'}>
                              <p style={{fontSize: '1.25rem'}}>
                                  {productQuantity}
                              </p>
                          </div>
                      </div>

                      <div className={'d-flex col-5 p-0'}>
                          <div className={'col-4 p-0 pt-1'}>
                              <p
                                className={'font-italic'}>{this.props.isEng ?
                                'Price:' :
                                'Đơn Giá:'}</p>
                          </div>
                          <div className={'col-8'}>
                              <p style={{fontSize: '1.25rem'}}>
                                  {numberWithCommas(price)} đ
                              </p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        );
    }
}

export default ProductCart;