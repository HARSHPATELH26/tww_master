import React from "react";
import './_header-top.scss'
import '../../../App.css'
import Wishlist from "./wishlist/wishlist";
import Search from "./search/search";
import Cart from "./cart/cart";
import Login from "./login/login";
import { Link } from "react-router-dom";

const Header_top = () =>{
    return(
        <>
        <div className="header-top">
                <div className="section-padding">
                    <div className="section-container large p-l-r">
                        <div className="row">                            
                            <Search/>
                            <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
                                <div className="site-logo">
                                    <Link to="/">
                                        <img width="400" height="80" src={require("../../../asset/media/tww/twwLogo.png")} alt="The Woven Wonders." />
                                    </Link>
                                </div>
                            </div>                          
                            <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                                <div className="header-page-link">
                                    
                                    <Login/>
                                    <Wishlist/>
                                    <Cart/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header_top