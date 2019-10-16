import React from 'react';
import apiModel from '../../api/apiModel';
import ProductCard from './fragments/product-card';
import NotFound from './not-found';
import { DEFAULT_IMAGE } from '../../const';
import { withRouter } from 'react-router-dom';

const NOT_FOUND = 'Không tìm thấy sản phẩm phù hợp';

class SearchResults extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            isLoadDone: false,
        };
        this.searchInfo = {
            isForMale: this.props.location.state.isForMale,
            isForFemale: this.props.location.state.isForFemale,
            skinType: this.props.location.state.skinType,
            minAge: this.props.location.state.minAge,
            maxAge: this.props.location.state.maxAge,
        }
    }

    async getData() {
        return await apiModel.getProductBySearch({
            isForMale: this.searchInfo.isForMale,
            isForFemale: this.searchInfo.isForFemale,
            skinType: this.searchInfo.skinType,
        });
    }

    async componentDidMount() {
        this.data = await this.getData();
        console.log(this.data);
        this.setState({isLoadDone: true});
    }

    getDisplayProducts() {
        let res = [];
        if (this.data) {
            if (this.data.length === 0) {
                res.push(<NotFound/>);
            }
            else {
                const splitAgeRange = function (ageRange) {
                    return ageRange.split('-');
                };
                const {minAge, maxAge} = this.searchInfo;
                // eslint-disable-next-line array-callback-return
                const filterAge = this.data.filter(function (element) {
                    const ageRange = element['DoTuoi'];
                    if (ageRange) {
                        const splited = splitAgeRange(ageRange);
                        if (splited) {
                            const min = splited[0];
                            const max = splited[1];
                            if(!(max < parseInt(minAge)) && !(min > parseInt(maxAge))) {
                                console.log(min, max, minAge, maxAge, !(max < parseInt(minAge)), !(min > parseInt(maxAge)));
                                return element;
                            }
                            // if (min >= parseInt(minAge) && max <= parseInt(maxAge)) {
                            //     return element;
                            // }
                        }
                    }
                });
                for (let i = 0; i < filterAge.length; i++) {
                    const productId = filterAge[i]['MaSP'];

                    const imgScr = filterAge[i]['HinhAnh'] ?
                      filterAge[i]['HinhAnh'] :
                      DEFAULT_IMAGE;

                    const productName = filterAge[i]['TenSP'] ?
                      filterAge[i]['TenSP'] :
                      null;

                    const price = filterAge[i]['GiaBan'] ?
                      filterAge[i]['GiaBan'] :
                      null;

                    res.push(
                      <ProductCard
                        productId={productId}
                        imgScr={imgScr}
                        productName={productName}
                        price={price}
                        style={{marginTop: '30px'}}
                      />,
                    );
                }
            }
        }
        else {
            res.push(<h1 style={{
                marginTop: '100px',
                color: 'black',
            }}>{NOT_FOUND}</h1>);
        }
        return res;
    }

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
                    this.getDisplayProducts() :
                    'Loading'
              }
          </div>
        );
    }
}

export default withRouter(SearchResults);