import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/checkout-confirmation.css';
import apiModel from '../../api/apiModel';
import { numberWithCommas } from '../../utils/correct-money';
import LoadingScreen from 'react-loading-screen';
import NotFound from './not-found';
import zStorage from '../../storage/storage';

const PATH = '/order-success';
const UNKNOWN = 'Unknown value';

class CheckoutConfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userPhone: 0,
            deliveryAddress: '',
        };
        this.userData = {};
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        this.setState({
            isLoading: true,
        });

        const addr = this.state.deliveryAddress;
        const {userId, productId, productCount, productPrice, totalPrice} = this.props.location.state;

        const e = document.getElementById('paymentSelect');
        const methodOfPayment = e.options[e.selectedIndex].text;

        if (
            userId !== undefined &&
            userId !== null &&
            productId !== undefined &&
            productId !== null
        ) {
            const res = await apiModel.postOrder({
                customerId: userId,
                productId: productId,
                promoDetailsId: null,
                deliveryAddress: addr,
                methodPayment: methodOfPayment,
                adminId: null,
                productPrice: productPrice,
                productCount: productCount,
                totalPrice: totalPrice,
            });

            if (res && res.orderId) {
                zStorage.clearCart();
                this.setState({
                    isLoading: false,
                });
                this.goToOrderSuccessPage(res.orderId);
            }
            else {
                this.handlePostFailed(300);
            }
        }
        else {
            this.handlePostFailed(3000);
        }
    }

    handlePostFailed = (timeout) => {
        setTimeout(() => {
            const msg = this.props.isEng ?
                'Place order has failed' :
                'Đặt hàng thất bại';
            if (window.confirm(msg)) {
                this.setState({
                    isLoading: false,
                });
            }
            else {
                this.setState({
                    isLoading: false,
                });
            }
        }, timeout);
    };

    goToOrderSuccessPage(orderId) {
        const {history} = this.props;
        if(history) {
            history.push(`/order-success/${orderId}`);
        }
    }

    handleUserPhoneChange = (e) => {
        this.setState({
            userPhone: e.target.value,
        });
    };

    handleDeliveryAddressChange = (e) => {
        this.setState({
            deliveryAddress: e.target.value,
        });
    };

    async getUserInfo(userId) {
        return await apiModel.getUser({userId: userId});
    };

    async componentDidMount() {
        let userId = 'SM-133';
        if (this.props.location.state) {
            userId = this.props.location.state.userId;
        }
        this.userData = await this.getUserInfo(userId);
        if (this.userData && this.userData[0]) {
            this.userData = this.userData[0];
            const deliveryAddress = this.userData['DiaChi'] ?
                this.userData['DiaChi'] :
                'Unknown User phone';

            this.setState({
                deliveryAddress: deliveryAddress,
            });
        }
        this.forceUpdate();
    }

    render() {
        if (!this.props.location.state) {
            return (<NotFound/>);
        }

        const {totalPrice} = this.props.location.state;
        const userName = this.userData['HovaTen'] ?
            this.userData['HovaTen'] :
            'Unknown User name';

        const userPhone = this.userData['Sdt'] ?
            this.userData['Sdt'] :
            'Unknown User phone';

        const {isEng} = this.props;

        const {deliveryAddress, isLoading} = this.state;

        return (
            <div
                className={'w-100 h-100 pt-5 checkout-confirmation-cover'}>
                <LoadingScreen
                    loading={isLoading}
                    bgColor="#f1f1f1"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    logoSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'}
                    text="Loading..."
                />
                <div
                    className="container p-0 pb-3 flex-wrap checkout-confirmation-container">
                    <div
                        className={'d-flex pt-3 justify-content-center align-items-center'}>
                        <h1>
                            {
                                isEng ?
                                    'Checkout Confirmation' :
                                    'Xác nhận thanh toán'
                            }
                        </h1>
                    </div>

                    <div className={'my-row'}>
                        <div className={'col-3'}>
                            <p style={{fontSize: '1.25rem'}}>
                                {isEng ?
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
                                {isEng ?
                                    'Phone number:' :
                                    'Số điện thoại:'}
                            </p>
                        </div>
                        <div className={'col-6'}>
                            <input className={'my-text-input'}
                                   value={userPhone}
                                   disabled/>
                        </div>
                    </div>

                    <div className={'my-row'}>
                        <div className={'col-3'}>
                            <p style={{fontSize: '1.25rem'}}>
                                {isEng ?
                                    'Delivery address:' :
                                    'Địa chỉ giao hàng:'}
                            </p>
                        </div>
                        <div className={'col-6'}>
                            <input className={'my-text-input'}
                                   value={deliveryAddress}
                                   onChange={this.handleDeliveryAddressChange}/>
                        </div>
                    </div>

                    <div className={'my-row'}>
                        <div className={'col-3'}>
                            <p style={{fontSize: '1.25rem'}}>
                                {isEng ?
                                    'Method of payment:' :
                                    'Hình thức thanh toán:'}
                            </p>
                        </div>
                        <div className={'col-6'}>
                            <select id={'paymentSelect'}
                                    className={'my-text-input'}>
                                <option selected value="cod">
                                    Giao hàng COD
                                </option>
                                <option value="momo">
                                    Thanh toán qua Momo
                                </option>
                                <option value="visa">
                                    Thẻ ghi nợ
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className={'my-row'}>
                        <div className={'col-3'}>
                            <p style={{fontSize: '1.25rem'}}>
                                {isEng ?
                                    'Total:' :
                                    'Giá trị đơn hàng:'}
                            </p>
                        </div>
                        <div className={'col-6'}>
                            <p className={'m-0'} style={{
                                color: 'red',
                                fontSize: '1.25rem',
                            }}>
                                {numberWithCommas(totalPrice)} đ
                            </p>
                        </div>
                    </div>

                    <div
                        className="d-flex w-100 justify-content-center align-items-center place-order">
                        <button
                            onClick={this.handleClick}
                            className="d-flex btn w-100 align-items-center justify-content-around">
                            {
                                isEng ?
                                    'PLACE ORDER' :
                                    'ĐẶT ĐƠN HÀNG'
                            }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CheckoutConfirmation);