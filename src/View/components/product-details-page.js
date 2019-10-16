import React from 'react';
import apiModel from '../../api/apiModel';
import { DEFAULT_IMAGE } from '../../const';
import '../css/product-details-page.css';
import QuantitySelector from './fragments/quantity-selector';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadDone: false,
            isEng: false,
        };
    }

    async componentDidMount() {
        const {match: {params}} = this.props;
        this.productInfo = await apiModel.getProduct({productId: params.productId});
        this.productInfo = this.productInfo[0];
        this.setState({isLoadDone: true});
    }

    getDisplayProduct() {
        console.log(this.productInfo);
        const imgScr = this.productInfo['HinhAnh'] ?
          this.productInfo['HinhAnh'] :
          DEFAULT_IMAGE;

        const productName = this.productInfo['TenSP'] ?
          this.productInfo['TenSP'] :
          'Product name';

        const productType = this.productInfo['TenLoaiSP'] ?
          this.productInfo['TenLoaiSP'] :
          'Product type';

        const description = this.productInfo['MoTa'] ?
          this.productInfo['MoTa'] :
          'Description';

        const vendorName = this.productInfo['NguoiCungCap'] ?
          this.productInfo['NguoiCungCap'] :
          'Vendor name';

        const ageRange = this.productInfo['DoTuoi'] ?
          this.productInfo['DoTuoi'] :
          'Age Range';

        const skinType = this.productInfo['LoaiDa'] ?
          this.productInfo['LoaiDa'] :
          'Skin Type';

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
                       src={imgScr}
                       alt={'Product'}
                       style={{borderRadius: '5px'}}/>
              </div>

              <div className={'w-100 mt-3 pl-4'}>
                  <div>
                      <h2>{productName}</h2>
                  </div>

                  <div className={'d-flex mt-4'}>
                      <div className={'col-3 p-0'}>
                          <p
                            className={'font-italic'}>{this.state.isEng ?
                            'Product type:' :
                            'Loại sản phẩm:'}</p>
                      </div>
                      <div className={'col-9'}>
                          <p>
                              {productType}
                          </p>
                      </div>
                  </div>

                  <div className={'d-flex'}>
                      <div className={'col-3 p-0'}>
                          <p
                            className={'font-italic'}>{this.state.isEng ?
                            'Description:' :
                            'Mô tả:'}</p>
                      </div>
                      <div className={'col-9'}>
                          <p>
                              {description}
                          </p>
                      </div>
                  </div>

                  <div className={'d-flex'}>
                      <div className={'col-3 p-0'}>
                          <p
                            className={'font-italic'}>{this.state.isEng ?
                            'Vendor Name:' :
                            'Nhà cung cấp:'}</p>
                      </div>
                      <div className={'col-9'}>
                          <p>
                              {vendorName}
                          </p>
                      </div>
                  </div>

                  <div className={'d-flex'}>
                      <div className={'col-3 p-0'}>
                          <p
                            className={'font-italic'}>{this.state.isEng ?
                            'Age Range:' :
                            'Độ tuổi:'}</p>
                      </div>
                      <div className={'col-9'}>
                          <p>
                              {ageRange}
                          </p>
                      </div>
                  </div>

                  <div className={'d-flex'}>
                      <div className={'col-3 p-0'}>
                          <p
                            className={'font-italic'}>{this.state.isEng ?
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
                            className={'font-italic'}>{this.state.isEng ?
                            'Skin Type:' :
                            'Loại da:'}</p>
                      </div>
                      <div className={'col-9'}>
                          <p>
                              {skinType}
                          </p>
                      </div>
                  </div>

                  <div
                    className={'d-flex pt-3 pl-3 pr-3 to-buy'}
                    style={{
                        minHeight: '60px',
                        borderTop: '1px solid #eee',
                    }}>
                      <div className={'mr-5'}>
                          <QuantitySelector/>
                      </div>
                      <button
                        className="ml-4 d-flex btn w-100 align-items-center justify-content-around">
                          ADD TO CART
                      </button>
                  </div>

              </div>
          </div>
        );
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