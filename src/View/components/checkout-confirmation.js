import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/checkout-confirmation.css';
import apiModel from '../../api/apiModel';
import { numberWithCommas } from '../../utils/correct-money';

const PATH = '/success';

class CheckoutConfirmation extends React.Component {
    constructor(props) {
        super(props) ;
        this.userData = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(PATH);
    }

    async getUserInfo(userId) {
        return await apiModel.getUser({userId: userId});
    };

    async componentDidMount() {
        let userId = 'SM-133';
        if (this.props.location.state) {
            userId = this.props.location.state.userId;
        }
        this.userData = await this.getUserInfo(userId);
        if(this.userData && this.userData[0]) {
            this.userData = this.userData[0];
        }
        this.forceUpdate();
    }

    render() {
        // if (!this.props.location.state) {
        //     return (<NotFound/>);
        // }

        const {price} = this.props.location.state;
        const userName = this.userData['HovaTen'] ? this.userData['HovaTen'] : 'Unknown User name';
        const userPhone = this.userData['Sdt'] ? this.userData['Sdt'] : 'Unknown User phone';
        const deliveryAddress = this.userData['DiaChi'] ? this.userData['DiaChi'] : 'Unknown User phone';


        return (
          <div
            className={'w-100 h-100 pt-5 checkout-confirmation-cover'}>
              <div
                className="container p-0 pb-3 flex-wrap checkout-confirmation-container">
                  <div
                    className={'d-flex pt-3 justify-content-center align-items-center'}>
                      <h1>Checkout Confirmation</h1>
                  </div>

                  <div className={'my-row'}>
                      <div className={'col-3'}>
                          <p style={{fontSize: '1.25rem'}}>
                              {this.props.isEng ?
                                'User name:' :
                                'Tên Khách Hàng:'}
                          </p>
                      </div>
                      <div className={'col-6'}>
                          <input className={'my-text-input'} disabled
                                 value={userName}/>
                      </div>
                  </div>

                  <div className={'my-row'}>
                      <div className={'col-3'}>
                          <p style={{fontSize: '1.25rem'}}>
                              {this.props.isEng ?
                                'Phone number:' :
                                'Số điện thoại:'}
                          </p>
                      </div>
                      <div className={'col-6'}>
                          <input className={'my-text-input'}
                                 value={userPhone}
                          onChange={() => {}}/>
                      </div>
                  </div>

                  <div className={'my-row'}>
                      <div className={'col-3'}>
                          <p style={{fontSize: '1.25rem'}}>
                              {this.props.isEng ?
                                'Delivery address:' :
                                'Địa chỉ giao hàng:'}
                          </p>
                      </div>
                      <div className={'col-6'}>
                          <input className={'my-text-input'}
                                 value={deliveryAddress}
                                 onChange={() => {}}/>
                      </div>
                  </div>

                  <div className={'my-row'}>
                      <div className={'col-3'}>
                          <p style={{fontSize: '1.25rem'}}>
                              {this.props.isEng ?
                                'Method of payment:' :
                                'Hình thức thanh toán:'}
                          </p>
                      </div>
                      <div className={'col-6'}>
                          <select className={'my-text-input'}>
                              <option selected value="cod">
                                  Giao hàng COD
                              </option>
                              <option value="momo">
                                  Thanh toán qua Momo
                              </option>
                              <option value="coconut">
                                  Thẻ ghi nợ
                              </option>
                          </select>
                      </div>
                  </div>

                  <div className={'my-row'}>
                      <div className={'col-3'}>
                          <p style={{fontSize: '1.25rem'}}>
                              {this.props.isEng ?
                                'Total:' :
                                'Giá trị đơn hàng:'}
                          </p>
                      </div>
                      <div className={'col-6'}>
                          <p className={'m-0'} style={{
                              color: 'red',
                              fontSize: '1.25rem',
                          }}>
                              {numberWithCommas(price)} đ
                          </p>
                      </div>
                  </div>

                  <div
                    className="d-flex w-100 justify-content-center align-items-center place-order">
                      <button
                        onClick={this.handleClick}
                        className="d-flex btn w-100 align-items-center justify-content-around">
                          PLACE ORDER
                      </button>
                  </div>
              </div>
          </div>
        );
    }
}

export default withRouter(CheckoutConfirmation);