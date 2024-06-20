import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByOption } from "../../../../../redux/shop-grid-layout-grid-slice/shop_grid_layout_grid_slice";

const Shop_Grid_PD_toolbar = () => {
    const product_layout_grid = useSelector(state => state.lg.renderProduct)
    const dispatch = useDispatch();

    const sortingList = (selectedSortingOption) =>{
        const payload={selectedSortingOption,product_layout_grid}
        console.log(selectedSortingOption)
        console.log(payload)
        dispatch(sortByOption(payload))
    }
    
    

    return (
        <>
            <div className="products-topbar clearfix">
                <div className="products-topbar-left">
                    <div className="products-count">
                        Showing all {product_layout_grid.length} results
                    </div>
                </div>
                <div className="products-topbar-right">
                    <div className="products-sort dropdown">
                        <span className="sort-toggle dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Default sorting</span>
                        <ul className="sort-list dropdown-menu" x-placement="bottom-start">
                            <li className="active"><a href="#" onClick={()=>sortingList("Default")}>Default sorting</a></li>
                            {/* <li><a href="#">Sort by popularity</a></li> */}
                            {/* <li><a href="#">Sort by average rating</a></li> */}
                            <li><a href="#" onClick={()=>sortingList("Latest")}>Sort by latest</a></li>
                            <li><a href="#" onClick={()=>sortingList("Lower")}>Sort by price: low to high</a></li>
                            <li><a href="#" onClick={()=>sortingList("Higher")}>Sort by price: high to low</a></li>
                        </ul>
                    </div>
                    <ul className="layout-toggle nav nav-tabs">
                        <li className="nav-item">
                            <a className="layout-grid nav-link active" data-toggle="tab" href="#layout-grid" role="tab"><span className="icon-column"><span className="layer first"><span></span><span></span><span></span></span><span className="layer middle"><span></span><span></span><span></span></span><span className="layer last"><span></span><span></span><span></span></span></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="layout-list nav-link" data-toggle="tab" href="#layout-list" role="tab"><span className="icon-column"><span className="layer first"><span></span><span></span></span><span className="layer middle"><span></span><span></span></span><span className="layer last"><span></span><span></span></span></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Shop_Grid_PD_toolbar