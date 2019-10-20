import React from 'react';
import { numberWithCommas } from '../../../utils/correct-money';
import { Link } from 'react-router-dom';
import '../../css/product-cart.css';

class ProductCart extends React.Component {
    handleImgClick = () => {
        const a = document.getElementById(`/product/${this.props.productId}`);
        a.click();
    };

    chooseItem = () => {
        const {productId, onChooseItem} = this.props;
        if (onChooseItem) {
            onChooseItem(productId);
        }
    };

    render() {
        const {productId, productName, imgSrc, vendorName, price, productQuantity, isChosen} = this.props;
        let className = 'd-flex p-0 m-0 product-cart-container ';
        if (isChosen) {
            className += 'chosen';
        }
        return (
            <div className={className}>
                <div className={'d-flex m-0'} style={{
                    minWidth: '150px',
                    maxWidth: '150px',
                    minHeight: '150px',
                    maxHeight: '150px',
                    padding: '15px',
                }}>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                        src={imgSrc}
                        onClick={this.handleImgClick}
                        alt={'Checkout cart img'}/>
                </div>

                <div className={'w-100 pt-3 pl-2 m-0'}>
                    <div>
                        <Link to={`/product/${productId}`}
                              id={`/product/${productId}`}
                              className={'remove-outline'}
                              style={{
                                  fontSize: '1.5rem',
                                  textDecoration: 'none',
                              }}>
                            {productName}
                        </Link>
                    </div>

                    <div className={'d-flex mt-3 mb-2'} onClick={this.chooseItem}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'m-0 font-italic'}>
                                {
                                    this.props.isEng ?
                                        'Vendor Name:' :
                                        'Nhà cung cấp:'
                                }
                            </p>
                        </div>
                        <div className={'col-9'}>
                            <p className={'m-0'}>
                                {vendorName}
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex'} onClick={this.chooseItem}>
                        <div className={'d-flex col-5 p-0'}>
                            <div className={'col-4 p-0 pt-1'}>
                                <p
                                    className={'font-italic'}>{this.props.isEng ?
                                    'Quantity:' :
                                    'Số Lượng:'}</p>
                            </div>
                            <div className={'col-8'}>
                                <p style={{fontSize: '1.25rem'}}>
                                    {productQuantity}
                                </p>
                            </div>
                        </div>

                        <div className={'d-flex col-5 p-0'}>
                            <div className={'col-4 p-0 pt-1'}>
                                <p
                                    className={'font-italic'}>{this.props.isEng ?
                                    'Price:' :
                                    'Đơn Giá:'}</p>
                            </div>
                            <div className={'col-8'}>
                                <p style={{fontSize: '1.25rem'}}>
                                    {numberWithCommas(price)} đ
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductCart;