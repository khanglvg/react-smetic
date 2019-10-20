import React from 'react';
import '../css/product-report.css';
import LoadingScreen from 'react-loading-screen';
import apiModel from '../../api/apiModel';
import ProductReportCard from './fragments/product-report-card';
import { DEFAULT_IMAGE } from '../../const';

const UNKNOWN = 'Unknown Value';

class ProductReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVendorId: '',
            isLoading: true,
        };
        this.listVendors = [];
    }

    async componentDidMount() {
        try {
            this.listVendors = await apiModel.getVendorsName();
        }
        catch (e) {
            console.log(e);
        }

        if (this.listVendors.length >= 1) {
            this.getData();
            this.setState({
                currentVendorId: this.listVendors[0]['MaVendor'],
                isLoading: false,
            });
        }
        else {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                });
            }, 3000);
        }
    }

    handleChangeVendor = (e) => {
        this.setState({
            currentVendorId: e.target.value,
            isLoading: true,
        }, () => {
            this.getData();
        });
    };

    async getData() {
        const {currentVendorId} = this.state;
        if (currentVendorId !== undefined || currentVendorId !== '') {
            console.log('a');
            this.data = await apiModel.getProductsByVendor(currentVendorId);
        }
        else if (currentVendorId === '') {
            console.log('b');
            if (this.listVendors[0]) {
                console.log('c');
                this.data = await apiModel.getProductsByVendor(this.listVendors[0]['MaVendor']);
            }
        }

        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 500);
    }

    renderOptions() {
        return this.listVendors.map((el) => {
            return (
                <option className="dropdown-item"
                        value={el['MaVendor']}
                        key={el['MaVendor']}>
                    {el['TenVendor']}
                </option>
            );
        });
    }

    renderProducts() {
        let res = [];
        if (Array.isArray(this.data)) {
            const {isEng} = this.props;
            res = this.data.map(function (vendor) {
                const imgScr = vendor['HinhAnh'] ?
                    vendor['HinhAnh'] :
                    DEFAULT_IMAGE;

                const productId = vendor['MaSP'] ?
                    vendor['MaSP'] :
                    UNKNOWN;

                const productName = vendor['TenSP'] ?
                    vendor['TenSP'] :
                    UNKNOWN;

                const description = vendor['MoTa'] ?
                    vendor['MoTa'] :
                    UNKNOWN;

                const productType = vendor['TenLoaiSP'] ?
                    vendor['TenLoaiSP'] :
                    UNKNOWN;

                const skinType = vendor['LoaiDa'] ?
                    vendor['LoaiDa'] :
                    UNKNOWN;

                const forMale = parseInt(vendor['DanhChoNam']);
                const forFemale = parseInt(vendor['DanhChoNu']);
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

                const ageRange = vendor['DoTuoi'] ?
                    vendor['DoTuoi'] :
                    UNKNOWN;

                return (
                    <div className={'w-100 mt-3'}>
                        <ProductReportCard
                            imgScr={imgScr}
                            productId={productId}
                            productName={productName}
                            description={description}
                            productType={productType}
                            skinType={skinType}
                            gender={genderDisplay}
                            ageRange={ageRange}
                            isEng={isEng}
                        />
                    </div>
                );
            });
        }

        return res;
    }

    render() {
        const {isLoading, currentVendorId} = this.state;
        const {isEng} = this.props;

        return (
            <div className={'w-100 h-100 product-report-cover'}>
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
                            'Products of specialized vendor Management' :
                            'Quản lý sản phẩm theo nhà cung cấp'}</h1>
                    </div>

                    <div
                        className={'w-100 d-flex pt-3 pb-2 justify-content-end align-items-center select-status-view'}>
                        <div className={'col-3'}>
                            <p className={'m-0 text-right'}
                               style={{fontSize: '1.3rem'}}>
                                {this.props.isEng ?
                                    'Choose vendor:' :
                                    'Chọn nhà cung cấp:'}
                            </p>
                        </div>

                        <div className={'col-3 pr-0'}>
                            <select
                                className="dropdown-toggle form-control sort-button"
                                value={currentVendorId}
                                onChange={this.handleChangeVendor}>
                                {
                                    this.renderOptions()
                                }
                            </select>
                        </div>
                    </div>

                    <div className={'w-100 pt-3'}>
                        {
                            this.renderProducts()
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductReport;