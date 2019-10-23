import React from 'react';
import apiModel from '../../api/apiModel';
import { DEFAULT_IMAGE } from '../../utils/const';
import '../css/product-details-page.css';
import QuantitySelector from './fragments/quantity-selector';
import { numberWithCommas } from '../../utils/correct-money';
import zStorage from '../../storage/storage';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadDone: false,
        };
    }

    async componentDidMount() {
        const {match: {params}} = this.props;
        this.productInfo = await apiModel.getProduct({productId: params.productId});
        if (this.productInfo && this.productInfo[0]) {
            this.productInfo = this.productInfo[0];
        }
        else {
            this.productInfo = {};
        }
        this.setState({isLoadDone: true});
    }

    getDisplayProduct() {
        console.log(this.productInfo);
        this.imgSrc = this.productInfo['HinhAnh'] ?
            this.productInfo['HinhAnh'] :
            DEFAULT_IMAGE;

        this.productId = this.productInfo['MaSP'] ?
            this.productInfo['MaSP'] :
            'Product Id';

        this.productName = this.productInfo['TenSP'] ?
            this.productInfo['TenSP'] :
            'Product name';

        this.productType = this.productInfo['TenLoaiSP'] ?
            this.productInfo['TenLoaiSP'] :
            'Product type';

        this.description = this.productInfo['MoTa'] ?
            this.productInfo['MoTa'] :
            'Description';

        this.vendorName = this.productInfo['TenVendor'] ?
            this.productInfo['TenVendor'] :
            'Vendor name';

        this.ageRange = this.productInfo['DoTuoi'] ?
            this.productInfo['DoTuoi'] :
            'Age Range';

        this.skinType = this.productInfo['LoaiDa'] ?
            this.productInfo['LoaiDa'] :
            'Skin Type';

        this.price = this.productInfo['GiaBan'] ?
            this.productInfo['GiaBan'] :
            'Unknown';

        const forMale = parseInt(this.productInfo['DanhChoNam']);
        const forFemale = parseInt(this.productInfo['DanhChoNu']);
        let genderDisplay;

        if (forMale && forFemale) {
            genderDisplay = 'Nam và Nữ';
        }
        else if (forMale) {
            genderDisplay = 'Nam';
        }
        else if (forFemale) {
            genderDisplay = 'Nữ';
        }
        else {
            genderDisplay = 'Không xác định';
        }

        const {isEng} = this.props;
        return (
            <div className={'d-flex p-0 m-0 mt-5 w-100'} style={{
                color: 'black',
                fontSize: '1.25rem',
            }}>
                <div className={'d-flex'}
                     style={{
                         maxWidth: '390px',
                         minWidth: '390px',
                         minHeight: '390px',
                         maxHeight: '390px',
                         borderRadius: '5px',
                     }}>
                    <img className={'w-100 h-100'}
                         src={this.imgSrc}
                         alt={'Product'}
                         style={{borderRadius: '5px'}}/>
                </div>

                <div className={'w-100 mt-3 pl-4'}>
                    <div>
                        <h2>{this.productName}</h2>
                    </div>

                    <div className={'d-flex mt-4'}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'font-italic'}>{isEng ?
                                'Product type:' :
                                'Loại sản phẩm:'}</p>
                        </div>
                        <div className={'col-9'}>
                            <p>
                                {this.productType}
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex'}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'font-italic'}>{isEng ?
                                'Description:' :
                                'Mô tả:'}</p>
                        </div>
                        <div className={'col-9'}>
                            <p>
                                {this.description}
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex'}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'font-italic'}>{isEng ?
                                'Vendor Name:' :
                                'Nhà cung cấp:'}</p>
                        </div>
                        <div className={'col-9'}>
                            <p>
                                {this.vendorName}
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex'}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'font-italic'}>{isEng ?
                                'Age Range:' :
                                'Độ tuổi:'}</p>
                        </div>
                        <div className={'col-9'}>
                            <p>
                                {this.ageRange}
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex'}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'font-italic'}>{isEng ?
                                'Gender:' :
                                'Dành cho:'}</p>
                        </div>
                        <div className={'col-9'}>
                            <p>
                                {genderDisplay}
                            </p>
                        </div>
                    </div>

                    <div className={'d-flex'}>
                        <div className={'col-3 p-0'}>
                            <p
                                className={'font-italic'}>{isEng ?
                                'Skin Type:' :
                                'Loại da:'}</p>
                        </div>
                        <div className={'col-9'}>
                            <p>
                                {this.skinType}
                            </p>
                        </div>
                    </div>

                    <div style={{
                        borderTop: '1px solid #eee',
                    }}>
                        <div className={'d-flex pl-0 pt-3'}
                             style={{borderTop: '1px solid #eee'}}>
                            <div className={'col-3 p-0 pt-1'}>
                                <p className={'m-0'}>
                                    {this.props.isEng ?
                                        'Price:' :
                                        'Giá bán:'}
                                </p>
                            </div>

                            <div
                                className={'col-9 pl-3 d-flex justify-content-start'}>
                                <p className={'m-0'} style={{
                                    color: 'red',
                                    fontSize: '1.25rem',
                                }}>
                                    {numberWithCommas(this.price)} đ
                                </p>
                            </div>
                        </div>
                        <div
                            className={'d-flex pt-3 pl-3 pr-3 to-buy'}
                            style={{
                                minHeight: '60px',
                            }}>
                            <div className={'mr-5'}>
                                <QuantitySelector
                                    ref={c => this.selector = c}/>
                            </div>
                            <button
                                onClick={this.handleAddToCart}
                                className="ml-4 d-flex btn w-100 align-items-center justify-content-around">
                                {
                                    isEng ?
                                        'ADD TO CART' :
                                        'THÊM VÀO GIỎ HÀNG'
                                }
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    handleAddToCart = () => {
        let path = `/checkout`;
        const props = {
            imgSrc: this.imgSrc,
            productId: this.productId,
            productName: this.productName,
            vendorName: this.vendorName,
            productQuantity: this.selector.getValue(),
            price: this.price,
            isEng: true,
        };
        zStorage.addProductToCart(props);
        this.props.history.push(path, props);
    };

    render() {
        return (
            <div
                className="container p-0 pb-3 d-flex flex-wrap"
                style={{
                    minWidth: '1200px',
                    minHeight: '700px',
                    marginTop: '64px',
                }}>
                {
                    this.state.isLoadDone ?
                        this.getDisplayProduct() :
                        'Loading'
                }
            </div>
        );
    }
}

export default ProductDetails;