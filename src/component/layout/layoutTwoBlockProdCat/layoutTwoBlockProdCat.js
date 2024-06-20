import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, resetFilters } from "../../../redux/shop-grid-layout-grid-slice/shop_grid_layout_grid_slice";


const Layout_two = () => {
    const prodCat = useSelector(state => state.pcs);
    const products = useSelector(state => state.lg.renderProduct);
    const mainProducts = useSelector(state => state.lg.product);
    const [catProduct, setcatProduct] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setcatProduct(products)
    }, [products.status])

    const filterData = (selectedCategory) => {
        dispatch(resetFilters())
        const payload = { selectedCategory, mainProducts }
        dispatch(filterProducts(payload))
    }

    return (
        <>
            <section className="section section-padding m-b-70">
                <div className="section-container">
                    {/* <!-- Block Product Categories (Layout 2) --> */}
                    <div className="block block-product-cats layout-2">
                        <div className="block-widget-wrap">
                            <div className="row">
                                {
                                    prodCat.map((category, index) => {
                                        if(category.category==="All"){}else{
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="item item-product-cat">
                                                        <div className="item-product-cat-content">
                                                            <div className="item-image animation-horizontal">
                                                                
                                                                <Link to="/shop-grid" onClick={() => filterData(category.category)}  >if()
                                                                    <img width="330" height="330" src={require("../../../asset/media/tww/categoriesImg/" + category.img)} alt="Bracelets" />
                                                                </Link>
                                                            </div>
                                                            <div className="product-cat-content-info">
                                                                <a className="item-title" href="shop-grid-left.html">{category.category}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout_two