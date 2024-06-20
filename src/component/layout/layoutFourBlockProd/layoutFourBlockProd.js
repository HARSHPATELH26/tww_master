import React from "react";
import './_layoutFourBlockProd.scss';



const Layout_Four = () => {
    return (
        <>
            <section className="section section-padding background-img bg-img-2 p-t-60 p-b-70 m-b-70">
                <div className="section-container">
                    {/* <!-- Block Products (Layout 2) --> */}
                    <div className="block block-products layout-2 slider">
                        <div className="block-widget-wrap">
                            <div className="block-title"><h2 className="block-title">Trending Products</h2></div>
                            <div className="block-content">
                                <div className="content-product-list slick-wrap">
                                    <div className="slick-sliders products-list grid" data-slidestoscroll="true" data-dots="false" data-nav="1" data-columns4="1" data-columns3="2" data-columns2="2" data-columns1="3" data-columns1440="4" data-columns="4">
                                        <div className="item-product slick-slide">
                                            <div className="items">
                                                <div className="products-entry clearfix product-wapper">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="hot">Hot</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            <a href="shop-details.html">
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 44/Saree 44 (1).jpg")} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 44/Saree 44 (2).jpg")} className="hover-image back" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            <span className="product-quickview" data-title="Quick View">
                                                                <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="products-content">
                                                        <div className="contents">
                                                            <div className="rating">
                                                                <div className="star star-0"></div><span className="count">(0 review)</span>
                                                            </div>
                                                            <h3 className="product-title"><a href="shop-details.html">Saree 44</a></h3>
                                                            <span className="price">INR 10000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-product slick-slide">
                                            <div className="items">
                                                <div className="products-entry clearfix product-wapper">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="onsale">-10%</div>
                                                            <div className="hot">Hot</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            <a href="shop-details.html">
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 04/Saree 04 (1).jpg")} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 04/Saree 04 (2).jpg")} className="hover-image back" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            <div className="btn-compare" data-title="Compare">
                                                                <button className="product-btn">Compare</button>
                                                            </div>
                                                            <span className="product-quickview" data-title="Quick View">
                                                                <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="products-content">
                                                        <div className="contents">
                                                            <div className="rating">
                                                                <div className="star star-5"></div><span className="count">(1 review)</span>
                                                            </div>
                                                            <h3 className="product-title"><a href="shop-details.html">Saree 04</a></h3>
                                                            <span className="price">
                                                                <del aria-hidden="true"><span>INR 20000</span></del>
                                                                <ins><span>INR 18000</span></ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-product slick-slide">
                                            <div className="items">
                                                <div className="products-entry clearfix product-wapper">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="hot">Hot</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            <a href="shop-details.html">
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 21/Saree 21 (1).jpg")} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 21/Saree 21 (2).jpg")} className="hover-image back" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            <span className="product-quickview" data-title="Quick View">
                                                                <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="products-content">
                                                        <div className="contents">
                                                            <div className="rating">
                                                                <div className="star star-0"></div><span className="count">(0 review)</span>
                                                            </div>
                                                            <h3 className="product-title"><a href="shop-details.html">Saree 21</a></h3>
                                                            <span className="price">INR 15000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-product slick-slide">
                                            <div className="items">
                                                <div className="products-entry clearfix product-wapper">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="onsale">-33%</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            <a href="shop-details.html">
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 34/Saree 34 (1).jpg")} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 34/Saree 34 (2).jpg")} className="hover-image back" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            <span className="product-quickview" data-title="Quick View">
                                                                <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="products-content">
                                                        <div className="contents">
                                                            <div className="rating">
                                                                <div className="star star-4"></div><span className="count">(2 reviews)</span>
                                                            </div>
                                                            <h3 className="product-title"><a href="shop-details.html">Saree 34</a></h3>
                                                            <span className="price">
                                                                <del aria-hidden="true"><span>INR 15000</span></del>
                                                                <ins><span>INR 10000</span></ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-product slick-slide">
                                            <div className="items">
                                                <div className="products-entry clearfix product-wapper">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="onsale">-7%</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            <a href="shop-details.html">
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 36/Saree 36 (1).jpg")} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../asset/media/tww/products/Saree 36/Saree 36 (2).jpg")} className="hover-image back" alt="" />
                                                            </a>
                                                        </div>
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            <span className="product-quickview" data-title="Quick View">
                                                                <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                            </span>
                                                        </div>
                                                        <div className="product-stock">
                                                            <span className="stock">Out Of Stock</span>
                                                        </div>
                                                    </div>
                                                    <div className="products-content">
                                                        <div className="contents">
                                                            <div className="rating">
                                                                <div className="star star-5"></div><span className="count">(1 review)</span>
                                                            </div>
                                                            <h3 className="product-title"><a href="shop-details.html">Saree 36</a></h3>
                                                            <span className="price">
                                                                <del aria-hidden="true"><span>INR 15000</span></del>
                                                                <ins><span>INR 12000</span></ins>
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
            </section>
        </>
    )
}

export default Layout_Four