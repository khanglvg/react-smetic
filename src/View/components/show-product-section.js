import React from 'react';
import '../css/show-product-section.css';
import ProductCard from './fragments/product-card';

class ShowProduct extends React.Component {
    constructor(props) {
        super(props);
        this.fakeProducts = [
            {
                imgScr: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/61754582_1073602226172035_5151003893555003392_n.jpg?_nc_cat=104&_nc_oc=AQnRPTtYamxFwtVlSXgD-C9pz-AlwlSBuZJxeTZbrIRJIQwdxVuTZsU823ZygdA79_A&_nc_ht=scontent.fsgn5-4.fna&oh=66a4a1dc90f3cd84581457c3b20f56a8&oe=5DFCF337',
                productName: 'Phạm Vy',
                price: '10.000',
            },
            {
                imgScr: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/13528814_300228473642914_3949257582329049873_n.jpg?_nc_cat=110&_nc_oc=AQlGBYSgUrQPxlIFuzNkgZjxDQitOnMk3CkV5-yrhy9qbx8W9wlTi2FYwNE1TAOrW04&_nc_ht=scontent.fsgn5-3.fna&oh=87b436ba45e47fc6a1944a16847a633e&oe=5E38D76E',
                productName: 'Gia Khang',
                price: '∞ INFINITY',
            },
            {
                imgScr: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/51480990_799196850412738_5285558467250094080_n.jpg?_nc_cat=106&_nc_oc=AQnyq39I_XqrRJfH4qGoO-gF1VLTB31Qk7184FxcUmXIut-fvJgx5D4TTTlTnTNxHK4&_nc_ht=scontent.fsgn5-6.fna&oh=4f036ffba76b638df96d39c530f572ca&oe=5E32B393',
                productName: 'Đình Thông',
                price: '999.000',
            },
            {
                imgScr: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/42450690_722368594762231_3623809811969212416_n.jpg?_nc_cat=109&_nc_oc=AQkEckYICRA6kZWt63JZ1dvbD5q5vij1Hpg9Ruy3Q1mTQx2B_ibPITsFI238XzwNEmM&_nc_ht=scontent.fsgn5-6.fna&oh=58d292a69e5e0db57c3ab6043e8ee981&oe=5DFA694A',
                productName: 'Poodles',
                price: '100.000',
            },
        ];

        this.getDisplayProducts = this.getDisplayProducts.bind(this);
    }

    getDisplayProducts() {
        const outputArr = [];
        for (let i = 0; i < this.fakeProducts.length; i++) {
            outputArr.push(
              <ProductCard
                imgScr={this.fakeProducts[i].imgScr}
                productName={this.fakeProducts[i].productName}
                price={this.fakeProducts[i].price}/>,
            );
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