import React from 'react';
import ProductCart from './fragments/product-cart';
import TotalCard from './fragments/total-card';
import { withRouter } from 'react-router-dom';
import '../css/checkout.css';
import NotFound from './not-found';
import zStorage from '../../storage/storage';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.totalPrice = 0;
        this.data = this.getData();
        this.state = {
            currentProductId: '',
        };

        this.renderProducts = this.renderProducts.bind(this);
    }

    componentDidMount() {
        if (Array.isArray(this.data) && this.data.length >= 1) {
            this.setState({
                currentProductId: this.data[0],
            });
        }
    }

    getData() {
        let res = [];
        const products = zStorage.getProductsInCart();
        const keys = Object.keys(products);
        console.log(keys);
        for (let i = 0; i < keys.length; i++) {
            res.push(products[keys[i]]);
        }
        return res;
    };

    renderProducts() {
        let res = [];
        const {isEng} = this.props;
        let totalPrice = 0;
        if (Array.isArray(this.data)) {
            res = this.data.map(function (item, index) {
                const {imgSrc, productId, productName, vendorName, productQuantity, price} = item;

                if (price !== undefined && price !== null && productQuantity !== undefined && productQuantity !== null) {
                    totalPrice += price * productQuantity;
                }

                let className = 'w-100';
                if (index !== 0) {
                    className += ' mt-3';
                }
                return (
                    <div className={className}>
                        <ProductCart
                            isEng={isEng}
                            productId={productId}
                            imgSrc={imgSrc}
                            productName={productName}
                            vendorName={vendorName}
                            productQuantity={productQuantity}
                            price={price}/>
                    </div>
                );
            });
        }
        this.totalPrice = totalPrice;
        return res;
    }

    handleClickBuy = () => {
        if (this.props.location.state) {
            let path = `/checkout/confirmation`;
            const {productId, productQuantity, price} = this.props.location.state;
            const props = {
                productId: productId,
                productPrice: price,
                totalPrice: this.totalPrice,
                productCount: productQuantity,
                userId: 'SM-133',
            };
            this.props.history.push(path, props);
        }
    };

    render() {
        if (!this.props.location.state) {
            return (<NotFound/>);
        }

        const {isEng} = this.props;
        return (
            <div className={'w-100 h-100 checkout-cover'}>
                <div className="container p-0 pb-3 d-flex flex-wrap">
                    <div className={'d-flex flex-wrap p-0 m-0 w-100'}>
                        <div className={'col-9 p-3'}>
                            {this.renderProducts()}
                        </div>

                        <div className={'col-3 p-3'}>
                            <TotalCard totalPrice={this.totalPrice}
                                       isEng={isEng}/>
                            <div
                                className="d-flex mt-3 w-100 justify-content-center align-items-center btn-buy">
                                <button
                                    onClick={this.handleClickBuy}
                                    className="d-flex btn w-100 align-items-center justify-content-around">
                                    {isEng ?
                                        'BUY' :
                                        'THANH TOÁN'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Checkout);