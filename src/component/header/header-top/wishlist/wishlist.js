import React from "react";
import './_wishlist.scss'

const Wishlist = () => {
    return (
        <>
            {/* <!-- Wishlist --> */}
            <div className="wishlist-box">
                <a href="shop-wishlist.html"><i className="icon-heart"></i></a>
                <span className="count-wishlist">1</span>
            </div>
        </>
    )
}
export default Wishlist