import React, { useEffect, useState } from "react";
import { filteByPrice, filterMatProducts, filterProducts, resetFilters, } from "../../../../../redux/shop-grid-layout-grid-slice/shop_grid_layout_grid_slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { processProductCategories } from "../../../../../redux/productCategorySlice/productCategorySlice";
import { processProductMatCategories } from "../../../../../redux/productCategorySlice/productCategoryMatSlice";



const Shop_Grid_BL_PD_Cat = () => {
    const prodCat = useSelector(state => state.pcs);
    const prodMatCat = useSelector(state => state.pcms);
    const products = useSelector(state => state.lg.renderProduct);
    const mainProducts = useSelector(state => state.lg.product);
    const [catProduct, setcatProduct] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setcatProduct(products)
        const payload = {prodCat,prodMatCat,mainProducts}
        dispatch(processProductCategories(payload))
        dispatch(processProductMatCategories(payload))
        // allProduct(mainProducts)
    }, [products.status])
    // console.log(products)



    const filterData = (selectedCategory, event) => {
        event.preventDefault();
        dispatch(resetFilters())
        const payload = { selectedCategory, mainProducts }
        // console.log('Filter Data Payload:', payload);
        dispatch(filterProducts(payload))
    }

    // const allProduct=(selectedCategory)=>{
    //     setcatProduct(mainProducts)
    // }
    
    
    const priceLimit = (event) => {
        console.log(event)
    }
    // const [minPriceLimit, setminPriceLimit] = useState(10);
    // const [maxPriceLimit, setmaxPriceLimit] = useState(10000);

    // const setPriceLimit = (e, stateFlag) => {
    //     if (stateFlag === "max") {
    //         setmaxPriceLimit(e.target.value);
    //     } else if (stateFlag === "min") {
    //         setminPriceLimit(e.target.value)
    //     }
    // }
    // const applyPriceFilter = () => {
    //     const payload = { mainProducts }
    //     dispatch(filteByPrice(payload))
    // }


    const filterMatData = (selectedMatCategory, event) => {
        event.preventDefault();
        const payload = { selectedMatCategory, mainProducts }
        dispatch(filterMatProducts(payload))
    }




  

    return (
        <>
            <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50 p-t-10">
                {/* <!-- Block Product Categories --> */}
                <div className="block block-product-cats">
                    <div className="block-title"><h2>Make</h2></div>
                    <div className="block-content">
                        <div className="product-cats-list">
                            <ul>
                                {/* <li className="current">
                                    <Link to="/shop-grid" onClick={allProduct}>All</Link>
                                </li> */}
                                {
                                    prodCat.map((category, key) => {
                                    //     if(category.category==="All"){
                                    //     return (
                                    //         <>
                                    //             <li className="current" key={key}>
                                    //                 <a href="#" onClick={()=>allProduct(category.category)}>All<span className="count">{category.prodCount}</span></a>
                                    //             </li>
                                    //         </>
                                    //     )

                                    // }else{

                                        return (
                                            <>
                                                <li className="current" key={key}>
                                                    <a href="#" onClick={(event) => filterData(category.category, event)} >{category.category}<span className="count">{category.prodCount}</span></a>
                                                </li>
                                            </>
                                        )
                                    // }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Block Product Filter --> */}
                <div className="block block-product-filter">
                    <div className="block-title"><h2>Price</h2></div>
                    <div className="block-content">
                        <div id="slider-range" className="price-filter-wrap">
                            <div className="filter-item price-filter">
                                <div className="layout-slider">
                                    <input id="price-filter" name="price" value="0;25000" onChange={(e) => priceLimit(e)} />
                                </div>
                                <div className="layout-slider-settings"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Block Product Material --> */}
                <div className="block block-product-cats">
                    <div className="block-title"><h2>Material</h2></div>
                    <div className="block-content">
                        <div className="product-cats-list">
                            <ul>
                                {
                                    prodMatCat.map((category, key) => {
                                        return (
                                            <>
                                                <li className="current">
                                                    <a href="shop-grid-left.html" onClick={(event) => filterMatData(category.mat, event)}>{category.mat}
                                                        <span className="count">{category.matProdCount}</span>
                                                    </a>
                                                </li>
                                                {/* <li>
                                                    <a href="shop-grid-left.html">Linen <span className="count">6</span></a>
                                                </li> */}
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop_Grid_BL_PD_Cat;