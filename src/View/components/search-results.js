import React from 'react';
import apiModel from '../../api/apiModel';
import ProductCard from './fragments/product-card';
import NotFound from './not-found';
import { DEFAULT_IMAGE } from '../../const';
import { withRouter } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';

const NOT_FOUND = 'Không tìm thấy sản phẩm phù hợp';

class SearchResults extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            isLoading: true,
        };

        this.oldKey = '';
        this.getSearchInfo();
    }

    getSearchInfo() {
        if (!this.props.location.state) {
            this.searchInfo = {};
        }
        else {
            this.searchInfo = {
                isForMale: this.props.location.state.isForMale,
                isForFemale: this.props.location.state.isForFemale,
                skinType: this.props.location.state.skinType,
                minAge: this.props.location.state.minAge,
                maxAge: this.props.location.state.maxAge,
            };
        }
    };

    async getData() {
        this.setState({
            isLoading: true,
        });

        if (this.props.location && this.props.location.state && this.props.location.state.isGetAll) {
            return await apiModel.getProducts();
        }

        return await apiModel.getProductBySearch({
            isForMale: this.searchInfo.isForMale,
            isForFemale: this.searchInfo.isForFemale,
            skinType: this.searchInfo.skinType,
        });
    }

    async componentDidMount() {
        this.data = await this.getData();
        this.loadingAnim();
    }

    loadingAnim = () => {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 500);
    };

    getDisplayProducts() {
        let res = [];
        if (this.data) {
            if (this.data.length === 0) {
                res.push(<NotFound/>);
            }
            else {
                const {isEng} = this.props;
                const splitAgeRange = function (ageRange) {
                    return ageRange.split('-');
                };
                let {minAge, maxAge} = this.searchInfo;
                if (minAge === undefined) {
                    minAge = 0;
                }
                if (maxAge === undefined) {
                    maxAge = 100;
                }
                // eslint-disable-next-line array-callback-return
                const filterAge = this.data.filter(function (element) {
                    const ageRange = element['DoTuoi'];
                    if (ageRange) {
                        const splited = splitAgeRange(ageRange);
                        if (splited) {
                            const min = splited[0];
                            const max = splited[1];
                            if (!(max < parseInt(minAge)) && !(min > parseInt(maxAge))) {
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

                    const imgSrc = filterAge[i]['HinhAnh'] ?
                        filterAge[i]['HinhAnh'] :
                        DEFAULT_IMAGE;

                    const productName = filterAge[i]['TenSP'] ?
                        filterAge[i]['TenSP'] :
                        null;

                    const price = filterAge[i]['GiaBan'] ?
                        filterAge[i]['GiaBan'] :
                        null;

                    const vendorName = filterAge[i]['NguoiCungCap'] ?
                        filterAge[i]['NguoiCungCap'] :
                        null;

                    res.push(
                        <ProductCard
                            productId={productId}
                            imgSrc={imgSrc}
                            productName={productName}
                            vendorName={vendorName}
                            price={price}
                            style={{marginTop: '30px'}}
                            isEng={isEng}
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

    async refresh() {
        this.data = await this.getData();
        this.loadingAnim();
    };

    render() {
        // For refresh page
        if (!this.state.isLoading && this.props.location.key !== this.oldKey) {
            this.oldKey = this.props.location.key;
            this.getSearchInfo();
            this.refresh();
        }

        if (!this.props.location.state) {
            return (<NotFound/>);
        }

        const {isLoading} = this.state;
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
                {this.getDisplayProducts()}
            </div>
        );
    }
}

export default withRouter(SearchResults);