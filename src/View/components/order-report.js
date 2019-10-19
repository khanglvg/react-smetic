import React from 'react';
import LoadingScreen from 'react-loading-screen';
import apiModel from '../../api/apiModel';
import '../css/order-report.css';
import OrderStatusCard from './fragments/order-status-card';
import { DEFAULT_IMAGE } from '../../const';

const UNKNOWN = 'Unknown Value';
const CODE_GET_ALL = 4101997;
const ORDER_STATUS = Object.freeze({
    all: {
        code: CODE_GET_ALL,
        statusEng: 'All',
        statusVi: 'Tất cả đơn hàng',
    },
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
        let inputStatus = this.props.match.params.filter;
        if (inputStatus === undefined || inputStatus === null || inputStatus === '') {
            inputStatus = CODE_GET_ALL;
        }
        this.state = {
            isLoading: true,
            currentOrderId: '',
            orderStatus: inputStatus, // get status of order: 0 -> chưa giao, 1 -> đã giao, 2 -> đã xác nhận
        };
        this.handleClick = this.handleClick.bind(this);
        this.onClickConfirm = this.onClickConfirm.bind(this);
    }

    handleChangeStatus = (e) => {
        this.props.match.params.filter = parseInt(e.target.value);
        this.setState({
            orderStatus: e.target.value,
            isLoading: true,
        }, () => {
            this.getData();
        });
    };

    async handleClick() {
        const id = this.state.currentOrderId;
        const res = await apiModel.updateOrder({
            orderId: id,
            orderStatus: 2,
        }).then(() => true);

        if(res === true) {
            const a = document.createElement('a');
            a.href = `/order-report/${this.state.orderStatus}`;
            a.click();
        }
    };

    getModelContent = () => {
        const {isEng} = this.props;
        const orderId = this.state.currentOrderId;
        if (isEng) {
            return (
                <div className={'w-100 d-flex align-items-center'}>
                    <h5 className={'mb-0 mr-1'}>
                        Confirm order
                    </h5>
                    <a href={`/order-success/${orderId}`} target={'_blank'} className={'remove-underline'}
                       style={{fontSize: '1.25rem'}}>
                        {orderId}
                    </a>
                    <h5 className={'mb-0 ml-1'}>
                        has done!
                    </h5>
                </div>
            );
        }
        else {
            return (
                <div className={'w-100 d-flex align-items-center'}>
                    <h5 className={'mb-0 mr-1'}>
                        Xác nhận đơn hàng
                    </h5>
                    <a href={'##'} className={'remove-underline'}
                       style={{fontSize: '1.25rem'}}>
                        {orderId}
                    </a>
                    <h5 className={'mb-0 ml-1'}>
                        hoàn thành!
                    </h5>
                </div>
            );
        }
    };

    async getData() {
        const {orderStatus} = this.state;
        if (parseInt(orderStatus) === CODE_GET_ALL) {
            this.data = await apiModel.getOrders();
        }
        else {
            this.data = await apiModel.getOrdersByStatus(orderStatus);
        }
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
                            value={ORDER_STATUS[prop].code}
                            key={prop}>
                        {ORDER_STATUS[prop].statusEng}
                    </option>
                );
            }
            else {
                return (
                    <option className="dropdown-item"
                            value={ORDER_STATUS[prop].code}
                            key={prop}>
                        {ORDER_STATUS[prop].statusVi}
                    </option>
                );
            }
        });
    }

    onClickConfirm(id) {
        this.setState({
            currentOrderId: id,
        });
    }

    renderOrders() {
        let res = [];
        const {onClickConfirm} = this;
        if (this.data) {
            const {isEng} = this.props;
            const {orderStatus} = this.state;
            res = this.data.map(function (order) {
                const orderId = order['MaDH'] ?
                    order['MaDH'] :
                    UNKNOWN;
                const imScr = order['orderId'] ?
                    order['orderId'] :
                    DEFAULT_IMAGE;
                const productName = order['TenSP'] ?
                    order['TenSP'] :
                    UNKNOWN;
                const productId = order['MaSP'] ?
                    order['MaSP'] :
                    UNKNOWN;
                const userName = order['HovaTen'] ?
                    order['HovaTen'] :
                    UNKNOWN;
                const deliveryAddress = order['DiaChiGiaoHang'] ?
                    order['DiaChiGiaoHang'] :
                    UNKNOWN;
                const userPhone = order['Sdt'] ?
                    order['Sdt'] :
                    UNKNOWN;
                const totalPrice = order['TongGiaTriDH'] ?
                    order['TongGiaTriDH'] :
                    UNKNOWN;
                const productPrice = order['DonGia'] ?
                    order['DonGia'] :
                    UNKNOWN;
                const productCount = order['SoLuong'] ?
                    order['SoLuong'] :
                    UNKNOWN;
                const orderStatus = order['TinhTrangDonHang'] ?
                    order['TinhTrangDonHang'] :
                    UNKNOWN;
                const creatingDate = order['NgayTaoDH'] ?
                    order['NgayTaoDH'] :
                    UNKNOWN;

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
                            onClickConfirm={onClickConfirm}
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
        const {isEng} = this.props;

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
                                onChange={this.handleChangeStatus}>
                                {this.renderOptions()}
                            </select>
                        </div>
                    </div>

                    <div className={'w-100 pt-3'}>
                        {this.renderOrders()}
                    </div>

                    <div className="modal fade"
                         id="modalCenter"
                         tabIndex="-1" role="dialog"
                         aria-labelledby="modalCenterTitle"
                         aria-hidden="true">
                        <div
                            className="modal-dialog modal-dialog-centered"
                            role="document">
                            <div className="modal-content">
                                <div
                                    className="modal-header">
                                    <h5 className="modal-title"
                                        id="ModalLongTitle">
                                        {
                                            isEng ?
                                                `Confirm Order's Status` :
                                                'Xác nhận trạng thái của đơn hàng'
                                        }
                                    </h5>
                                    <button type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                                    <span
                                                        className={'remove-outline'}
                                                        aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div
                                    className="modal-body d-flex align-items-center pl-4"
                                    style={{
                                        minHeight: '100px',
                                    }}>
                                    {this.getModelContent()}
                                </div>
                                <div
                                    className="modal-footer">
                                    <button type="button"
                                            className="btn cancel remove-outline"
                                            data-dismiss="modal">
                                        {
                                            isEng ?
                                                'Cancel' :
                                                'Hủy'
                                        }
                                    </button>
                                    <button type="button"
                                            onClick={this.handleClick}
                                            className="btn confirm remove-outline">
                                        {
                                            isEng ?
                                                'Confirm' :
                                                'Xác nhận đơn hàng'
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderReport;