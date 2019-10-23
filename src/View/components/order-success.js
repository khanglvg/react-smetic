import React from 'react';
import '../css/order-success.css';
import { numberWithCommas } from '../../utils/correct-money';
import LoadingScreen from 'react-loading-screen';
import apiModel from '../../api/apiModel';
import { Link } from 'react-router-dom';

const UNKNOWN = 'Unknown value';

class OrderSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
        this.data = {};
    }

    async componentDidMount() {
        this.getData();
    }

    async getData() {
        const {match: {params}} = this.props;
        this.data = await apiModel.getOrdersById(params.orderId);
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
            this.forceUpdate();
        }, 500);
    }

    getInfo() {
        let orderId = UNKNOWN,
            userName = UNKNOWN,
            userPhone = UNKNOWN,
            deliveryAddress = UNKNOWN,
            productName = UNKNOWN,
            vendorName = UNKNOWN,
            productCount = UNKNOWN,
            productPrice = UNKNOWN,
            totalPrice = UNKNOWN;

        const props = this.data[0];
        if (props) {
            if (props['MaDH']) {
                orderId = props['MaDH'];
            }
            if (props['HovaTen']) {
                userName = props['HovaTen'];
            }
            if (props['Sdt']) {
                userPhone = props['Sdt'];
            }
            if (props['DiaChiGiaoHang']) {
                deliveryAddress = props['DiaChiGiaoHang'];
            }
            if (props['TenSP']) {
                productName = props['TenSP'];
            }
            if (props['TenVendor']) {
                vendorName = props['TenVendor'];
            }
            if (props['SoLuong']) {
                productCount = props['SoLuong'];
            }
            if (props['GiaBan']) {
                productPrice = props['GiaBan'];
            }
            if (props['TongGiaTriDH']) {
                totalPrice = props['TongGiaTriDH'];
            }
        }

        return {
            orderId,
            userName,
            userPhone,
            deliveryAddress,
            productName,
            vendorName,
            productCount,
            productPrice,
            totalPrice,
        };
    }

    render() {
        const {isEng} = this.props;
        const {isLoading} = this.state;
        const {
            orderId,
            userName,
            userPhone,
            deliveryAddress,
            productName,
            vendorName,
            productCount,
            productPrice,
            totalPrice,
        } = this.getInfo();
        return (
            <div className={'w-100 h-100 d-flex order-success-cover'}>
                <LoadingScreen
                    loading={isLoading}
                    bgColor="#f1f1f1"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    logoSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'}
                    text="Loading..."
                />
                <div className="container p-0 pb-3 d-flex flex-wrap">
                    {/*<div*/}
                    {/*  className={'w-100 flex-1 pt-3 d-flex justify-content-center align-items-center'}>*/}
                    {/*    <h2>{ORDER_SUCCESS_MSG}</h2>*/}
                    {/*</div>*/}

                    <div className={'w-100'}>
                        <div
                            className={'w-100 flex-1 pt-5 mb-4 d-flex justify-content-center align-items-center'}>
                            <h1>
                                {
                                    isEng ?
                                        `Order's Information` :
                                        'Thông tin đơn hàng'
                                }
                            </h1>
                        </div>

                        <div style={{
                            borderTop: '1px dashed #a1a1a1',
                        }}>
                            <div className={'w-100 d-flex mt-4'}>
                                <div
                                    className={'w-100 d-flex col-8 p-0'}>
                                    <div
                                        className={'col-4 p-0 d-flex align-items-center'}>
                                        <h4 className={'font-italic'}>
                                            {
                                                isEng ?
                                                    'Order Id:' :
                                                    'Mã đơn hàng:'
                                            }
                                        </h4>
                                    </div>
                                    <div className={'col-12 p-0'}>
                                        <h3>
                                            {orderId}
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    className={'w-100 d-flex col-4 p-0'}/>
                            </div>

                            <div className={'w-100 mt-4'}>
                                <div className={'w-100 d-flex'}>
                                    <div
                                        className={'w-100 d-flex col-8 p-0'}>
                                        <div
                                            className={'col-4 p-0 d-flex align-items-center'}>
                                            <h4 className={'font-italic'}>
                                                {
                                                    isEng ?
                                                        'User name:' :
                                                        'Tên khách hàng:'
                                                }
                                            </h4>
                                        </div>
                                        <div className={'col-9 p-0'}>
                                            <h3>
                                                {userName}
                                            </h3>
                                        </div>
                                    </div>

                                    <div
                                        className={'w-100 d-flex col-4 p-0'}>
                                        <div
                                            className={'col-5 p-0 d-flex align-items-center'}>
                                            <h4 className={'font-italic'}>
                                                {
                                                    isEng ?
                                                        'User phone:' :
                                                        'Số điện thoại:'
                                                }
                                            </h4>
                                        </div>
                                        <div
                                            className={'col-7 p-0 ml-2'}>
                                            <h3>
                                                {userPhone}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className={'w-100 d-flex mt-2'}>
                                    <div
                                        className={'w-100 d-flex col-8 p-0'}>
                                        <div
                                            className={'col-4 p-0 d-flex align-items-center'}>
                                            <h4 className={'font-italic'}>
                                                {
                                                    isEng ?
                                                        'Delivery Address:' :
                                                        'Địa chỉ đặt hàng:'
                                                }
                                            </h4>
                                        </div>
                                        <div className={'col-12 p-0'}>
                                            <h3>
                                                {deliveryAddress}
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className={'w-100 d-flex col-4 p-0'}/>
                                </div>
                            </div>

                            <div className={'w-100 mt-4'}>
                                <div className={'w-100 d-flex'}>
                                    <div
                                        className={'w-100 d-flex col-8 p-0'}>
                                        <div
                                            className={'col-4 p-0 d-flex align-items-center'}>
                                            <h4 className={'font-italic'}>
                                                {
                                                    isEng ?
                                                        'Product name:' :
                                                        'Tên sản phẩm:'
                                                }
                                            </h4>
                                        </div>
                                        <div className={'col-12 p-0'}>
                                            <h3>
                                                {productName}
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className={'w-100 d-flex col-4 p-0'}/>
                                </div>

                                <div className={'w-100 d-flex mt-2'}>
                                    <div
                                        className={'w-100 d-flex col-8 p-0'}>
                                        <div
                                            className={'col-4 p-0 d-flex align-items-center'}>
                                            <h4 className={'font-italic'}>
                                                {
                                                    isEng ?
                                                        'Vendor name:' :
                                                        'Nhà cung cấp:'
                                                }
                                            </h4>
                                        </div>
                                        <div className={'col-12 p-0'}>
                                            <h3>
                                                {vendorName}
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className={'w-100 d-flex col-4 p-0'}/>
                                </div>
                            </div>

                            <div className={'w-100 d-flex mt-5'}>
                                <div className={'col-4 p-0 d-flex'}>
                                    <div
                                        className={'col-6 p-0 d-flex align-items-center'}>
                                        <h4 className={'font-italic'}>
                                            {
                                                isEng ?
                                                    'Product count:' :
                                                    'Số lượng:'
                                            }
                                        </h4>
                                    </div>
                                    <div
                                        className={'col-6 p-0 d-flex align-items-center'}>
                                        <h3>
                                            {productCount}
                                        </h3>
                                    </div>
                                </div>

                                <div className={'col-4 p-0 d-flex'}>
                                    <div
                                        className={'col-6 p-0 d-flex align-items-center'}>
                                        <h4 className={'font-italic'}>
                                            {
                                                isEng ?
                                                    'Product price:' :
                                                    'Đơn giá:'
                                            }
                                        </h4>
                                    </div>
                                    <div
                                        className={'col-6 p-0 d-flex align-items-center'}>
                                        <h3>
                                            {numberWithCommas(productPrice)} đ
                                        </h3>
                                    </div>
                                </div>

                                <div className={'col-4 p-0 d-flex'}>
                                    <div
                                        className={'col-4 p-0 d-flex align-items-center'}>
                                        <h4 className={'font-italic'}>
                                            {
                                                isEng ?
                                                    'Total:' :
                                                    'Tổng:'
                                            }
                                        </h4>
                                    </div>
                                    <div
                                        className={'col-8 p-0 d-flex align-items-center'}>
                                        <h3 style={{color: 'red'}}>
                                            {numberWithCommas(totalPrice)} đ
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={'w-100 d-flex justify-content-center align-items-center'}>
                        <Link to={'/home'} style={{fontSize: '1.5rem'}}>
                            ← {
                            isEng ?
                                'Back' :
                                'Về trang chủ'
                        }
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default OrderSuccess;