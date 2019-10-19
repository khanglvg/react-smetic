import React from 'react';
import '../../css/product-card.css';
import { numberWithCommas } from '../../../utils/correct-money';
import { withRouter } from 'react-router-dom';

class ProductCard extends React.Component {
    handleAddToCart = () => {
        const {productId, imgSrc, productName, vendorName, price} = this.props;
        let path = `/checkout`;
        const props = {
            imgSrc: imgSrc,
            productId: productId,
            productName: productName,
            vendorName: vendorName,
            productQuantity: 1,
            price: price,
        };
        this.props.history.push(path, props);
    };

    handleImgClick = () => {
        const a = document.createElement('a');
        a.href = `/product/${this.props.productId}`;
        a.click();
    };

    render() {
        const {imgSrc, productId, productName, price, style, isEng} = this.props;
        return (
            <div className="col-3 p-3" style={{...style}}>
                <div className="show-products-card">
                    <div
                        className="show-products-card-img-container">
                        <figure className="w-100">
                            <img
                                style={{
                                    cursor: 'pointer',
                                }}
                                src={imgSrc}
                                onClick={this.handleImgClick}
                                alt="Products img"/>
                        </figure>
                    </div>
                    <div
                        className="w-100 show-products-card-info-container">
                        <div
                            className="mt-3 mb-3 pl-1 pr-1 text-center d-flex justify-content-center align-items-center show-products-card-info-title"
                            style={{minHeight: '52px'}}>
                            <a
                                href={`/product/${productId}`}
                                target="_blank">
                                {productName}
                            </a>
                        </div>
                        <div
                            className="mb-3 d-flex w-100 justify-content-center align-items-center show-products-card-info-price">
                          <span className="price">
                              {numberWithCommas(price)}
                          </span>
                            <span
                                className="ml-1 currency">VND</span>
                        </div>
                        <div
                            className="d-flex w-100 justify-content-center align-items-center show-products-card-info-add-to-cart">
                            <button
                                onClick={this.handleAddToCart}
                                className="d-flex btn w-100 align-items-center justify-content-around">
                                {
                                    isEng? 'ADD TO CART' : 'THÊM VÀO GIỎ'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductCard);