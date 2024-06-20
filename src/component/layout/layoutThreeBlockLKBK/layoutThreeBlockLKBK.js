import React from "react";
import './_layoutThreeBlockLKBK.scss';



const Layout_Three = () => {
    return (
        <>
            <section className="section section-padding m-b-80">
                <div className="section-container">
                    {/* <!-- Block Lookbook --> */}
                    <div className="block block-lookbook">
                        <div className="block-widget-wrap">
                            <div className="lookbook-item">
                                <div className="row">
                                    <div className="col-md-6 col-image">
                                        <div className="lookbook-container">
                                            <div className="lookbook-content">
                                                <div className="item">
                                                    <img width="690" height="473" src={require("../../../asset/media/tww/THE WOVEN WONDERS 2023_part_CS-1.jpg")} alt="Look Book 1" />
                                                    <div className="item-lookbook" style={{ left: '43%', top: '77%' }}>
                                                        <span className="number-lookbook">1</span>
                                                        <div className="content-lookbook" style={{ left: '35px', bottom: '10px' }}>
                                                            <div className="item-thumb">
                                                                <a href="shop-details.html">
                                                                    <img width="1000" height="1000" src={require("../../../asset/media/tww/THE WOVEN WONDERS 2023_part_CS-1.jpg")} alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="content-lookbook-bottom">
                                                                <div className="item-title">
                                                                    <a href="shop-details.html">Warmth Collection</a>
                                                                </div>
                                                                <span className="price">
                                                                    <del aria-hidden="true"><span>INR 15000</span></del>
                                                                    <ins><span>INR 10000</span></ins>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-text">
                                        <div className="lookbook-intro-wrap position-center text-center">
                                            <div className="lookbook-intro">
                                                <h2 className="title">Curated by color</h2>
                                                <div className="description">Brighten up your look with vibrant saree.</div>
                                                <a href="shop-grid-left.html" className="button button-primary animation-horizontal">SHOP NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lookbook-item">
                                <div className="row">
                                    <div className="col-md-6 col-text">
                                        <div className="lookbook-intro-wrap position-center text-center">
                                            <div className="lookbook-intro">
                                                <h2 className="title">Make the connection</h2>
                                                <div className="description">Introducing your luxury link.</div>
                                                <a href="shop-grid-left.html" className="button button-primary animation-horizontal">SHOP NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-image">
                                        <div className="lookbook-container">
                                            <div className="lookbook-content">
                                                <div className="item">
                                                    <img width="690" height="473" src={require("../../../asset/media/tww/THE WOVEN WONDERS 2023_part_CS-8.jpg")} alt="Look Book 1" />
                                                    <div className="item-lookbook" style={{ right: '25%', top: '50%' }}>
                                                        <span className="number-lookbook">1</span>
                                                        <div className="content-lookbook" style={{ right: '35px', bottom: '10px' }}>
                                                            <div className="item-thumb">
                                                                <a href="shop-details.html">
                                                                    <img width="1000" height="1000" src={require("../../../asset/media/tww/THE WOVEN WONDERS 2023_part_CS-8.jpg")} alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="content-lookbook-bottom">
                                                                <div className="item-title">
                                                                    <a href="shop-details.html">classNameic Luxe</a>
                                                                </div>
                                                                <span className="price">
                                                                    <del aria-hidden="true"><span>INR 15000</span></del>
                                                                    <ins><span>INR 10000</span></ins>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Layout_Three