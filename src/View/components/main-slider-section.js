import React from 'react';
import CarouselItem from './fragments/carousel-item';
import MainSliderCard from './fragments/main-slider-card';

class MainSlider extends React.Component {
    render() {
        return (
            <section className="main-slider-container">
                <div id="carouselExampleIndicators"
                     className="carousel slide" data-ride="carousel">
                    <div
                        className="carousel-inner main-slider-carousel-inner">
                        <div className="carousel-item active">
                            <CarouselItem
                                imgSrc={'http://product.hstatic.net/1000006063/product/14698_l_grande.png'}
                                title={'No Sebum Powder Cream'}
                                content={'Kem Lót Kiểm Soát Nhờn, Thương hiệu: Innisfree, Khối lượng: 25g'}/>
                        </div>
                        <div className="carousel-item">
                            <CarouselItem
                                imgSrc={'http://file.hstatic.net/1000006063/file/20170208083028_ee7af72638c709f0c192d280ff3d80b8.jpg'}
                                title={'Unpa Bubi Bubi Lip'}
                                content={'Gel Sủi Cực Lành Tính, Làm Bong Tróc Da Chết, Siêu Mềm Môi, Hãng sản xuất: Unpa, Dung tích: 12 ml'}/>
                        </div>
                        <div className="carousel-item">
                            <CarouselItem
                                imgSrc={'http://file.hstatic.net/1000006063/file/1_b588d61b7ae5435d84bf1618fdcd9fc5_1024x1024.jpg'}
                                title={'Glow Tint Lip Balm'}
                                content={'Son Dưỡng Môi Có Màu, Thương hiệu: Innisfree.'}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev"
                       href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                    <span className="carousel-control-prev-icon"
                          aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next"
                       href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                    <span className="carousel-control-next-icon"
                          aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container p-3 main-slider-info-card">
                    <div
                        className="d-flex align-items-center main-slider-info-card-container">
                        <MainSliderCard
                            imgSrc={'http://product.hstatic.net/1000006063/product/57_a6c3a79d32164285a24357fb67174497_grande.png'}
                            title={'Eye Brownie'}
                            content={'Chì Kẻ Mày Siêu Mảnh, Thương hiệu: Candy Lab.'}/>

                        <MainSliderCard
                            imgSrc={'http://product.hstatic.net/1000006063/product/20180410063208_2648b3c5859bd68a96d764d1a403f1d0_grande.jpg'}
                            title={'Concealer SPF28'}
                            content={'Kem Che Khuyết Điểm, Thương hiệu: The Saem.'}/>

                        <MainSliderCard
                            imgSrc={'http://product.hstatic.net/1000006063/product/61u1yketlll._sl1200__671de6a4e597479eb50c9381b8cb2488_grande.jpg'}
                            title={'Skinny Mes Brow'}
                            content={'Mascara Chân Mày Siêu Tự Nhiên, Thương hiệu: Lilybyred'}/>

                    </div>
                </div>
            </section>
        );
    }
}

export default MainSlider;