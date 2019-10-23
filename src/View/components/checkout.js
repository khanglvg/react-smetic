import React from 'react';
import ProductCart from './fragments/product-cart';
import TotalCard from './fragments/total-card';
import { withRouter } from 'react-router-dom';
import '../css/checkout.css';
import zStorage from '../../storage/storage';
import NotFound from './not-found';
import userConfig from '../../storage/user-config';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.totalPrice = 0;
        this.data = this.getData();
        this.state = {
            currentProductId: '',
        };

        this.infoToPush = {};

        this.renderProducts = this.renderProducts.bind(this);
    }

    componentDidMount() {
        if (Array.isArray(this.data) && this.data.length >= 1) {
            this.infoToPush = {
                productId: this.data[0].productId,
                productQuantity: this.data[0].productQuantity,
                price: this.data[0].price,
            };
            this.setState({
                currentProductId: this.data[0].productId,
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

    handleChangeChooseItem = (id) => {
        let item = this.data.filter((item) => item.productId === id);
        if(item) {
            this.infoToPush = {
                productId: item[0].productId,
                productQuantity: item[0].productQuantity,
                price: item[0].price,
            };
            this.setState({
                currentProductId: id,
            });
        }
    };

    renderProducts() {
        let res = [];
        const {isEng} = this.props;
        let totalPrice = 0;
        const {currentProductId} = this.state;
        const handleChangeChooseItem = this.handleChangeChooseItem;
        if (Array.isArray(this.data)) {
            res = this.data.map(function (item, index) {
                const {imgSrc, productId, productName, vendorName, productQuantity, price} = item;
                let isChosen = false;

                if (price !== undefined && price !== null && productQuantity !== undefined && productQuantity !== null) {
                    if (productId === currentProductId) {
                        isChosen = true;
                        totalPrice += price * productQuantity;
                    }
                }

                let className = 'w-100';
                if (index !== 0) {
                    className += ' mt-3';
                }


                return (
                    <div className={className}>
                        <ProductCart
                            isChosen={isChosen}
                            onChooseItem={handleChangeChooseItem}
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
        if (this) {
            let path = `/checkout/confirmation`;
            const {productId, productQuantity, price} = this.infoToPush;
            let userId = userConfig.getUserId();
            if(!userId) userId = 'SM-133';
            const props = {
                productId: productId,
                productPrice: price,
                totalPrice: this.totalPrice,
                productCount: productQuantity,
                userId: userId,
            };
            this.props.history.push(path, props);
        }
    };

    render() {
        if(zStorage.getCartCount() === 0) {
            return <NotFound/>
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