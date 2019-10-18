import React from 'react';
import '../../css/order-status-card.css';
import { numberWithCommas } from '../../../utils/correct-money';
import Icon from './icon';
import { getDisplayTime } from '../../../utils/converter';

class OrderStatusCard extends React.Component {
    renderButtonConfirm = () => {
        const {orderStatus, isEng} = this.props;
        const confirmed = isEng ?
            'Confirmed' :
            'Đã xác nhận';
        const needConfirm = isEng ?
            'Confirm the order' :
            'Xác nhận đơn hàng';
        const cName = orderStatus === 2 ?
            'd-flex my-btn confirmed remove-outline justify-content-center align-items-center' :
            'my-btn need-confirm remove-outline';
        return (
            <button
                className={cName}
                disabled={orderStatus === 2}>
                {
                    orderStatus === 2 ?
                        <Icon
                            name={'checkIcon'}
                            width={18}
                            height={18}
                            color={'white'}/> :
                        null
                }
                <p className={'ml-2 mb-0'}>
                    {
                        orderStatus === 2 ?
                            confirmed :
                            needConfirm
                    }
                </p>
            </button>
        );
    };

    render() {
        const {
            orderId,
            imScr,
            productName,
            userName,
            deliveryAddress,
            userPhone,
            totalPrice,
            productCount,
            productPrice,
            isEng,
        } = this.props;

        return (
            <div className={'w-100 d-flex order-status-card-container'}>
                <div className={'d-flex m-0'} style={{
                    minWidth: '190px',
                    maxWidth: '190px',
                    minHeight: '190px',
                    maxHeight: '190px',
                    padding: '15px',
                }}>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '5px',
                        }}
                        src={imScr}
                        alt={'order status card'}/>
                </div>

                <div className={'w-100 pt-2'}>
                    <div
                        className={'w-100 d-flex justify-content-between align-items-center'}>
                        <a href={'##'} className={'m-0'}
                           style={{fontSize: '1.75rem'}}># {orderId}</a>
                        <div
                            className={'d-flex justify-content-end pr-4'}
                            style={{
                                minWidth: '230px',
                                fontSize: '1.15rem',
                            }}>
                            {/*<p className={'m-0'}>*/}
                            {/*    {*/}
                            {/*        isEng ?*/}
                            {/*            'Create date:':*/}
                            {/*            'Ngày tạo:'*/}
                            {/*    }*/}
                            {/*</p>*/}
                            <p className={'m-0 font-italic'}
                               style={{color: '#7a7a7a', letterSpacing: '0.08rem'}}>{getDisplayTime(1571421193000)}</p>
                        </div>
                    </div>

                    <div className={'w-100 d-flex'}>
                        <div className={'col-9 p-0'}>
                            <div className={'w-100 d-flex mt-2'}>
                                <div className={'col-3 p-0'}>
                                    <p className={'m-0 font-italic'}>
                                        {isEng ?
                                            'Product name:' :
                                            'Tên sản phẩm:'}
                                    </p>
                                </div>
                                <div className={'col-9 p-0'}>
                                    <h5 className={'m-0'}>{productName}</h5>
                                </div>
                            </div>

                            <div className={'w-100 d-flex mt-2'}>
                                <div className={'col-3 p-0'}>
                                    <div className={'w-100 d-flex'}>
                                        <p className={'m-0 font-italic'}>
                                            {isEng ?
                                                'User name:' :
                                                'Tên khách hàng:'}
                                        </p>
                                    </div>
                                </div>
                                <div className={'col-9 p-0'}>
                                    <div className={'w-100 d-flex justify-content-between'}>
                                        <div className={'col-7 p-0'}>
                                            <p className={'m-0'}>{userName}</p>
                                        </div>
                                        <div className={'col-1 p-0'}>
                                            <p className={'m-0 font-italic'}>
                                                {isEng ?
                                                    'Phone:' :
                                                    'Sđt:'}
                                            </p>
                                        </div>
                                        <div className={'col-3 p-0'}>
                                            <p className={'m-0'}>{userPhone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'w-100 d-flex mt-2'}>
                                <div className={'col-3 p-0'}>
                                    <p className={'m-0 font-italic'}>
                                        {isEng ?
                                            'Delivery address:' :
                                            'Địa chỉ giao hàng:'}
                                    </p>
                                </div>
                                <div className={'col-10 p-0'}>
                                    <p className={'m-0'}>{deliveryAddress}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={'col-3 p-0 d-flex justify-content-center align-items-center'}>
                            {this.renderButtonConfirm()}
                        </div>
                    </div>

                    <div className={'w-100 d-flex mt-2'}>
                        <div className={'col-4 p-0 d-flex'}>
                            <div className={'col-6 p-0'}>
                                <p className={'m-0 font-italic'}>
                                    {isEng ?
                                        'Product count:' :
                                        'Số lượng:'}
                                </p>
                            </div>
                            <div className={'col-6 p-0'}>
                                <p style={{
                                    fontSize: '1.1rem',
                                    marginLeft: '20px',
                                }}>{productCount}</p>
                            </div>
                        </div>

                        <div className={'col-4 p-0 d-flex'}>
                            <div className={'col-4 p-0'}>
                                <p className={'m-0 font-italic'}>
                                    {isEng ?
                                        'Product price:' :
                                        'Đơn giá:'}
                                </p>
                            </div>
                            <div className={'col-8 p-0'}>
                                <p className={'font-italic'}>{numberWithCommas(productPrice)} đ</p>
                            </div>
                        </div>

                        <div className={'col-4 p-0 d-flex'}>
                            <div className={'col-4 p-0'}>
                                <p className={'m-0 font-italic'}>
                                    {isEng ?
                                        'Total:' :
                                        'Tổng:'}
                                </p>
                            </div>
                            <div className={'col-8 p-0'}>
                                <p style={{
                                    color: 'red',
                                    fontSize: '1.25rem',
                                    marginTop: '-5px',
                                }}>{numberWithCommas(totalPrice)} đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderStatusCard;