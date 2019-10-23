import React from 'react';
import '../../css/product-report-card.css';
import { Link } from 'react-router-dom';

class ProductReportCard extends React.Component {
    handleImgClick = () => {
        const a = document.getElementById(`/product/${this.props.productId}`);
        a.click();
    };

    render() {
        const {
            imgSrc,
            productId,
            productName,
            description,
            productType,
            skinType,
            gender,
            ageRange,
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
                            cursor: 'pointer',
                        }}
                        src={imgSrc}
                        onClick={this.handleImgClick}
                        alt={'order status card'}/>
                </div>

                <div className={'w-100 pt-2'}>
                    <div
                        className={'w-100 d-flex justify-content-start align-items-center'}>
                        <Link to={`/product/${productId}`}
                              id={`/product/${productId}`}
                              className={'m-0'}
                              style={{fontSize: '1.75rem'}}>#
                            {
                                productName
                            }
                        </Link>
                    </div>

                    <div className={'w-100'}>
                        <div className={'w-100 d-flex mt-2'}>
                            <div
                                className={'col-2 p-0 d-flex align-items-center'}>
                                <p className={'m-0 font-italic'}>
                                    {isEng ?
                                        'Description:' :
                                        'Mô tả sản phẩm:'}
                                </p>
                            </div>
                            <div
                                className={'col-9 p-0 d-flex align-items-center'}>
                                <p className={'m-0'}>
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className={'w-100 d-flex mt-3'}>
                            <div
                                className={'col-2 p-0 d-flex align-items-center'}>
                                <div className={'w-100 d-flex'}>
                                    <p className={'m-0 font-italic'}>
                                        {isEng ?
                                            'Product type:' :
                                            'Loại sản phẩm:'}
                                    </p>
                                </div>
                            </div>
                            <div className={'col-9 p-0'}>
                                <div
                                    className={'w-100 d-flex justify-content-between'}>
                                    <div
                                        className={'col-5 p-0 d-flex align-items-center'}>
                                        <p className={'m-0'}>
                                            {
                                                productType
                                            }
                                        </p>
                                    </div>
                                    <div
                                        className={'col-2 p-0 d-flex align-items-center'}>
                                        <p className={'m-0 font-italic'}>
                                            {isEng ?
                                                'Skin type:' :
                                                'Loại da:'}
                                        </p>
                                    </div>
                                    <div
                                        className={'col-5 p-0 d-flex align-items-center'}>
                                        <p className={'m-0'}>
                                            {
                                                skinType
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'w-100 d-flex mt-3'}>
                        <div
                            className={'col-2 p-0 d-flex align-items-center'}>
                            <div className={'w-100 d-flex'}>
                                <p className={'m-0 font-italic'}>
                                    {isEng ?
                                        'Gender:' :
                                        'Dành cho:'}
                                </p>
                            </div>
                        </div>
                        <div className={'col-9 p-0'}>
                            <div
                                className={'w-100 d-flex justify-content-between'}>
                                <div
                                    className={'col-5 p-0 d-flex align-items-center'}>
                                    <p className={'m-0'}>
                                        {
                                            gender
                                        }
                                    </p>
                                </div>
                                <div
                                    className={'col-2 p-0 d-flex align-items-center'}>
                                    <p className={'m-0 font-italic'}>
                                        {isEng ?
                                            'Age range:' :
                                            'Độ tuổi:'}
                                    </p>
                                </div>
                                <div
                                    className={'col-5 p-0 d-flex align-items-center'}>
                                    <p className={'m-0'}>
                                        {
                                            ageRange
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductReportCard;