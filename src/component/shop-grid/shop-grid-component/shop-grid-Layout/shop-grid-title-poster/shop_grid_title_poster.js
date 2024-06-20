import React from "react";
import { Link } from "react-router-dom";

const Shop_Grid_Title_Poster = ()=>{
    return(
        <>
        <div id="title" className="page-title">
                            <div className="section-container">
                                <div className="content-title-heading">
                                    <h1 className="text-title-heading">
                                        Explore The Collection...
                                    </h1>
                                </div>
                                <div className="breadcrumbs">
                                    <Link to = "/">Home</Link><span className="delimiter"></span>Shop
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default Shop_Grid_Title_Poster;