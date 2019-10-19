import React from 'react';
import LoadingScreen from 'react-loading-screen';
import apiModel from '../../api/apiModel';
import '../css/order-report.css';
import OrderStatusCard from './fragments/order-status-card';
import { DEFAULT_IMAGE } from '../../const';

const UNKNOWN = 'Unknown Value';

const ORDER_STATUS = Object.freeze({
    pending: {
        code: 0,
        statusEng: 'Pending',
        statusVi: 'Chưa giao',
    },
    done: {
        code: 1,
        statusEng: 'Done Delivery',
        statusVi: 'Đã giao hàng',
    },
    confirmed: {
        code: 2,
        statusEng: 'Confirmed by Admin',
        statusVi: 'Admin đã xác nhận',
    },
});

class OrderReport extends React.Component {
    constructor(props) {
        super(props);
        this.currentOrdersStatus = {};
        this.state = {
            isLoading: true,
            orderStatus: 0, // get status of order: 0 -> chưa giao, 1 -> đã giao, 2 -> đã xác nhận
        };
    }

    async getData() {
        this.data = await apiModel.getOrdersByStatus(this.state.orderStatus);
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 500);
    }

    async componentDidMount() {
        this.getData();
    }

    renderOptions() {
        return Object.keys(ORDER_STATUS).map((prop) => {
            if (this.props.isEng) {
                return (
                    <option className="dropdown-item"
                            value={prop.code}
                            key={prop}>
                        {ORDER_STATUS[prop].statusEng}
                    </option>
                );
            }
            else {
                return (
                    <option className="dropdown-item"
                            value={prop.code}
                            key={prop}>
                        {ORDER_STATUS[prop].statusVi}
                    </option>
                );
            }
        });
    }

    renderOrders() {
        let res = [];
        if (this.data) {
            const {isEng} = this.props;
            res = this.data.map(function (order) {
                const orderId = order['MaDH'] ? order['MaDH'] : UNKNOWN;
                const imScr = order['orderId'] ? order['orderId'] : DEFAULT_IMAGE;
                const productName = order['TenSP'] ? order['TenSP'] : UNKNOWN;
                const productId = order['MaSP'] ? order['MaSP'] : UNKNOWN;
                const userName = order['HovaTen'] ? order['HovaTen'] : UNKNOWN;
                const deliveryAddress = order['DiaChiGiaoHang'] ? order['DiaChiGiaoHang'] : UNKNOWN;
                const userPhone = order['Sdt'] ? order['Sdt'] : UNKNOWN;
                const totalPrice = order['TongGiaTriDH'] ? order['TongGiaTriDH'] : UNKNOWN;
                const productPrice = order['DonGia'] ? order['DonGia'] : UNKNOWN;
                const productCount = order['SoLuong'] ? order['SoLuong'] : UNKNOWN;
                const orderStatus = order['TinhTrangDonHang'] ? order['TinhTrangDonHang'] : UNKNOWN;
                const creatingDate = order['NgayTaoDH'] ? order['NgayTaoDH'] : UNKNOWN;
                return (
                    <div className={'w-100 mt-3'}>
                        <OrderStatusCard
                            key={orderId}
                            orderId={orderId}
                            imScr={imScr}
                            productName={productName}
                            productId={productId}
                            userName={userName}
                            deliveryAddress={deliveryAddress}
                            userPhone={userPhone}
                            totalPrice={totalPrice}
                            productPrice={productPrice}
                            productCount={productCount}
                            orderStatus={orderStatus}
                            creatingDate={creatingDate}
                            isEng={isEng}
                        />
                    </div>
                );
            });
        }
        return res;
    }

    render() {
        const {isLoading, orderStatus} = this.state;

        return (
            <div className={'w-100 h-100 order-report-cover'}>
                <div className="container p-0 pb-3 d-flex flex-wrap">
                    <LoadingScreen
                        loading={isLoading}
                        bgColor="#f1f1f1"
                        spinnerColor="#9ee5f8"
                        textColor="#676767"
                        logoSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'}
                        text="Loading..."
                    />

                    <div
                        className={'w-100 d-flex pt-3 justify-content-center align-items-center'}>
                        <h1>{this.props.isEng ?
                            'Orders Delivery Management' :
                            'Quản lý đơn hàng'}</h1>
                    </div>

                    <div
                        className={'w-100 d-flex pt-3 pb-2 justify-content-end align-items-center select-status-view'}>
                        <div className={'col-3'}>
                            <p className={'m-0 text-right'}
                               style={{fontSize: '1.3rem'}}>
                                {this.props.isEng ?
                                    'Order delivery status:' :
                                    'Tình trạng đơn hàng:'}
                            </p>
                        </div>

                        <div className={'col-3 pr-0'}>
                            <select
                                className="dropdown-toggle form-control sort-button"
                                value={orderStatus}
                                onChange={(e) => {
                                    this.setState({orderStatus: e.target.value});
                                }}>
                                {this.renderOptions()}
                            </select>
                        </div>
                    </div>

                    <div className={'w-100 pt-3'}>
                        {this.renderOrders()}
                    </div>

                </div>
            </div>
        );
    }
}

export default OrderReport;