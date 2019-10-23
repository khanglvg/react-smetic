import React from 'react';
import '../css/show-product-section.css';
import ProductCard from './fragments/product-card';
import apiModel from '../../api/apiModel';
import { DEFAULT_IMAGE } from '../../utils/const';

class ShowProduct extends React.Component {
    constructor(props) {
        super(props);
        this.products = [];
        this.state = {
            isLoading: true,
        };
        this.getDisplayProducts = this.getDisplayProducts.bind(this);
    }

    async getData() {
        this.setState({
            isLoading: true,
        });

        return await apiModel.getProducts();
    }

    async componentDidMount() {
        this.products = await this.getData();
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 100);
    }

    getDisplayProducts() {
        const outputArr = [];
        if (this.products && this.products.length > 0) {
            for (let i = 0; i < 4; i++) {
                const productId = this.products[i]['MaSP'];

                const imgSrc = this.products[i]['HinhAnh'] ?
                    this.products[i]['HinhAnh'] :
                    DEFAULT_IMAGE;
                console.log(this.products[i]['HinhAnh']);

                const productName = this.products[i]['TenSP'] ?
                    this.products[i]['TenSP'] :
                    null;

                const price = this.products[i]['GiaBan'] ?
                    this.products[i]['GiaBan'] :
                    null;

                const vendorName = this.products[i]['TenVendor'] ?
                    this.products[i]['TenVendor'] :
                    null;

                outputArr.push(
                    <ProductCard
                        productId={productId}
                        isEng={true}
                        imgSrc={imgSrc}
                        vendorName={vendorName}
                        productName={productName}
                        price={price}/>,
                );
            }
        }
        return outputArr;
    }

    render() {
        return (
            <section className="section-show-products">
                <div
                    className="p-5 d-flex justify-content-center align-items-center show-products-header">
                    <div>
                        <div
                            className="d-flex justify-content-center align-items-center">
                            <h3 className="m-0"> SHOW PRODUCTS </h3>
                        </div>
                        <div
                            className="d-flex p-0 m-0 mt-3 justify-content-center align-items-center show-products-header-break">
                            <div
                                className="mr-2 show-products-header-line"/>
                            <img
                                className="show-products-header-table-cell"
                                src="http://z6z7q2p8.stackpathcdn.com/wp-content/themes/cakeart//images/cupcake.png"
                                alt="cupcake" title="Heading image"/>
                            <div
                                className="ml-2 show-products-header-line "/>
                        </div>
                    </div>
                </div>
                <div
                    className="container p-0 pt-3 pb-3 d-flex show-products-card-container">
                    {this.getDisplayProducts()}
                </div>
                <div
                    className="mt-5 pt-5 d-flex w-100 justify-content-center align-items-center show-products-card-view-more">
                    <button
                        className="d-flex btn align-items-center justify-content-around"
                        onClick="location.href='view/search-products.html'">
                        View More
                    </button>
                </div>
            </section>
        );
    }
}

export default ShowProduct;