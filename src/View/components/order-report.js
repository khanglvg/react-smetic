import React from 'react';
import LoadingScreen from 'react-loading-screen';
import apiModel from '../../api/apiModel';

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
    }

    async componentDidMount() {
        this.getData();
        console.log(this.data);
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 500)

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

    render() {
        const {isLoading, orderStatus} = this.state;

        return (
            <div
                className="container p-0 pb-3 d-flex flex-wrap"
                style={{
                    minWidth: '1200px',
                    minHeight: '700px',
                    marginTop: '64px',
                }}>
                <LoadingScreen
                    loading={isLoading}
                    bgColor="#f1f1f1"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    logoSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'}
                    text="Loading..."
                />
                <select
                    className="dropdown-toggle form-control sort-button"
                    value={orderStatus}
                    onChange={(e) => {
                        this.setState({orderStatus: e.target.value});
                    }}>
                    {this.renderOptions()}
                </select>
            </div>
        );
    }
}

export default OrderReport;