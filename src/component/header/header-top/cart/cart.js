import React from "react";
import './_cart.scss'

const Cart = () => {
    return (
        <>
            {/* <!-- Cart --> */}
            <div className="mojuri-topcart dropdown light">
                <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow"></div>
                    <a className="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="icons-cart"><i className="icon-large-paper-bag"></i><span className="cart-count">2</span></div>
                    </a>
                    <div className="dropdown-menu cart-popup">
                        <div className="cart-empty-wrap">
                            <ul className="cart-list">
                                <li className="empty">
                                    <span>No products in the cart.</span>
                                    <a className="go-shop" href="shop-grid-left.html">GO TO SHOP<i aria-hidden="true" className="arrow_right"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="cart-list-wrap">
                            <ul className="cart-list ">
                                <li className="mini-cart-item">
                                    <a href="#" className="remove" title="Remove this item"><i className="icon_close"></i></a>
                                    <a href="shop-details.html" className="product-image"><img width="600" height="600" src={require = ("../../../../asset/media/product/3.jpg")} alt="" /></a>
                                    <a href="shop-details.html" className="product-name">Twin Hoops</a>
                                    <div className="quantity">Qty: 1</div>
                                    <div className="price">$150.00</div>
                                </li>
                                <li className="mini-cart-item">
                                    <a href="#" className="remove" title="Remove this item"><i className="icon_close"></i></a>
                                    <a href="shop-details.html" className="product-image"><img width="600" height="600" src={require = ("../../../../asset/media/product/1.jpg")} alt="" /></a>
                                    <a href="shop-details.html" className="product-name">Medium Flat Hoops</a>
                                    <div className="quantity">Qty: 1</div>
                                    <div className="price">$100.00</div>
                                </li>
                            </ul>
                            <div className="total-cart">
                                <div className="title-total">Total: </div>
                                <div className="total-price"><span>$250.00</span></div>
                            </div>
                            <div className="free-ship">
                                <div className="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
                                <div className="total-percent"><div className="percent" style={{width:'20%'}}></div></div>
                            </div>
                            <div className="buttons">
                                <a href="shop-cart.html" className="button btn view-cart btn-primary">View cart</a>
                                <a href="shop-checkout.html" className="button btn checkout btn-default">Check out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Cart