import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectedProdDetails } from "../../../../../redux/shop-grid-layout-grid-slice/shop_grid_layout_grid_slice";

const Shop_Grid_Tab_content = () => {
    const mainProducts = useSelector(state => state.lg.product);
    const product_layout_grid = useSelector(state => state.lg.renderProduct);
    const dispatch = useDispatch();

    // const data = useLocation();
        // const product_layout_list = useSelector(state => state.ll);
    
    const selectedProduct = (selectedItem,event) => {
        const payload ={selectedItem,mainProducts}
        dispatch(selectedProdDetails(payload))
    }

    return (
        <>
            <div className="tab-content">
                {/* <!-- #Layout Grid --> */}
                <div className="tab-pane fade show active" id="layout-grid" role="tabpanel">
                    <div className="products-list grid">
                        <div className="row">
                            {
                                product_layout_grid.map((pdata, key) => {

                                    return (
                                        <>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                <div className="products-entry clearfix product-wapper">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="hot">{pdata.productLableH}</div>
                                                            <div className="onsale">{pdata.productLableO}</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            {/* <Link to="/product-details" onClick={()=>selectedProduct(pdata.pcode)}> */}
                                                            <Link to="/product-details" state={pdata}>
                                                                <img width="600" height="600" src={require("../../../../../asset/media/tww/products/" + pdata.pImg)} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../../../asset/media/tww/products/" + pdata.hImg)} className="hover-image back" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            {/* <div className="btn-compare" data-title="Compare">
                                                                <button className="product-btn">Compare</button>
                                                            </div> */}
                                                            <span className="product-quickview" data-title="Quick View">
                                                                <Link to="/quick-view" className="quickview quickview-button" state={pdata}>Quick View <i className="icon-search"></i></Link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="products-content">
                                                        <div className="contents text-center">
                                                            {/* <div className="rating">
                                                                <div className="star star-0"></div><span className="count">({pdata.review})</span>
                                                            </div> */}
                                                            <h3 className="product-title"><a href="shop-details.html"> {pdata.displayName} </a></h3>
                                                            <h3 className="product-title"><a href="shop-details.html"> {pdata.productCat} </a></h3>
                                                            <del aria-hidden="true"><span>${pdata.delPrice}</span></del>
                                                            <span className="price">${pdata.price}</span>
                                                            {/* <div className="product-description">{pdata.pdescription}</div> */}
                                                            <div className="product-description">Mat : {pdata.pmaterial}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                {/* <!-- #Layout List --> */}
                <div className="tab-pane fade" id="layout-list" role="tabpanel">
                    <div className="products-list list">
                        {
                            product_layout_grid.map((pldata, key) => {
                                return (
                                    <>
                                        <div className="products-entry clearfix product-wapper">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="products-thumb">
                                                        <div className="product-lable">
                                                            <div className="hot">{pldata.productLableH}</div>
                                                        </div>
                                                        <div className="product-thumb-hover">
                                                            <Link to="product-details">
                                                                <img width="600" height="600" src={require("../../../../../asset/media/tww/products/" + pldata.pImg)} className="post-image" alt="" />
                                                                <img width="600" height="600" src={require("../../../../../asset/media/tww/products/" + pldata.hImg)} className="hover-image back" alt="" />
                                                            </Link>
                                                        </div>
                                                        <span className="product-quickview" data-title="Quick View">
                                                            <a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="products-content">
                                                        <h3 className="product-title"><a href="shop-details.html">{pldata.displayName}</a></h3>
                                                        <h4 ><a href="shop-details.html">{pldata.productCat}</a></h4>
                                                        <span className="price">
                                                            <del aria-hidden="true"><span>{pldata.delPrice}</span></del>
                                                            <ins><span>{pldata.price}</span></ins>
                                                        </span>

                                                        {/* <div className="rating">
                                                            <div className="star star-5"></div>
                                                            <div className="review-count">
                                                                (<span> {pldata.review}</span>)
                                                            </div>
                                                        </div> */}
                                                        <div className="product-button">
                                                            <div className="btn-add-to-cart" data-title="Add to cart">
                                                                <a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
                                                            </div>
                                                            <div className="btn-wishlist" data-title="Wishlist">
                                                                <button className="product-btn">Add to wishlist</button>
                                                            </div>
                                                            {/* <div className="btn-compare" data-title="Compare">
                                                                <button className="product-btn">Compare</button>
                                                            </div> */}
                                                        </div>
                                                        <div className="product-description">{pldata.pdescription}</div>
                                                        <div className="product-description">Mat : {pldata.pmaterial}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop_Grid_Tab_content;