import React from "react";
import '../../App.css'

import Shop_Grid_Header from "./shop-grid-component/shop_grid_Header";
import Shop_Grid_Footer from "./shop-grid-component/shop_grid_Footer";
import Shop_Grid_Layout from "./shop-grid-component/shop-grid-Layout/shop_grid_Layout";

const Shop_Grid = () => {
    return (
        <>
            <div id="page" className="hfeed page-wrapper">
                {/* <Shop_Grid_Header /> */}
                <Shop_Grid_Layout />
                {/* <Shop_Grid_Footer /> */}
            </div>
        </>
    )
}
export default Shop_Grid;