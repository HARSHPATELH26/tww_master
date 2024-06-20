import React from "react";
import './_header-middle.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../../redux/shop-grid-layout-grid-slice/shop_grid_layout_grid_slice";

const Header_middle = () => {
    const mainProducts = useSelector(state => state.lg.product);
    const prodCat = useSelector(state => state.pcs)
    const dispatch = useDispatch();

    const filterData = (selectedCategory, event) => {
        event.preventDefault();
        const payload = { selectedCategory, mainProducts }
        dispatch(filterProducts(payload))
    }

    return (
        <>
            <div className="header-middle text-center color-white">
                <div className="site-navigation">
                    <nav id="main-navigation">
                        <ul id="menu-main-menu" className="menu">
                            <li className="level-0 menu-item current-menu-item">
                                <Link to="/">
                                    <span className="menu-item-text">Home</span>
                                </Link>
                                {/* <ul className="sub-menu">
                                    <li>
                                        <a href="index.html"><span className="menu-item-text">Home Clean</span></a>
                                    </li>
                                    <li>
                                        <a href="index2.html"><span className="menu-item-text">Home Collection</span></a>
                                    </li>
                                    <li>
                                        <a href="index3.html"><span className="menu-item-text">Home Minimal</span></a>
                                    </li>
                                    <li>
                                        <a href="index4.html"><span className="menu-item-text">Home Modern</span></a>
                                    </li>
                                    <li>
                                        <a href="index5.html"><span className="menu-item-text">Home Parallax</span></a>
                                    </li>
                                    <li>
                                        <a href="index6.html"><span className="menu-item-text">Home Strong</span></a>
                                    </li>
                                    <li>
                                        <a href="index7.html"><span className="menu-item-text">Home Style</span></a>
                                    </li>
                                    <li>
                                        <a href="index8.html"><span className="menu-item-text">Home Unique</span></a>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="level-0 menu-item menu-item-has-children">
                                <Link to="/shop-grid"><span className="menu-item-text">Shop</span></Link>
                                <ul className="sub-menu">
                                    {/* <ul className="sub-menu">
                                            <li>
                                                <a ><span className="menu-item-text">Shop Grid - Left Sidebar</span></a>
                                            </li>
                                            <li>
                                                <a href="shop-list-left.html"><span className="menu-item-text">Shop List - Left Sidebar</span></a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"><span className="menu-item-text">Shop Grid - Right Sidebar</span></a>
                                            </li>
                                            <li>
                                                <a href="shop-list-right.html"><span className="menu-item-text">Shop List - Right Sidebar</span></a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-fullwidth.html"><span className="menu-item-text">Shop Grid - No Sidebar</span></a>
                                            </li>
                                        </ul> */}
                                    <li>
                                        {
                                            prodCat.map((Category, key) => {
                                                return (
                                                    <>
                                                        <Link to="/shop-grid" onClick={(event) => filterData(Category.category, event)}><span className="menu-item-text">{Category.category}</span></Link>
                                                    </>
                                                )
                                            })
                                        }
                                    </li>
                                    {/* <li>
                                        <a href="shop-cart.html"><span className="menu-item-text">Assam</span></a>
                                    </li>
                                    <li>
                                        <a href="shop-checkout.html"><span className="menu-item-text">Tussar</span></a>
                                    </li>
                                    <li>
                                        <a href="shop-wishlist.html"><span className="menu-item-text">Kosa</span></a>
                                    </li> */}
                                </ul>
                            </li>
                            <li className="level-0 menu-item mega-menu mega-menu-fullwidth align-center">
                                <a href="blog-grid-left.html"><span className="menu-item-text">Blog</span></a>
                                {/* <div className="sub-menu">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-section">
                                                <h2 className="sub-menu-title">Blog Category</h2>
                                                <ul className="menu-list">
                                                    <li>
                                                        <a href="blog-grid-left.html"><span className="menu-item-text">Blog Grid - Left Sidebar</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-right.html"><span className="menu-item-text">Blog Grid - Right Sidebar</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-left.html"><span className="menu-item-text">Blog List - Left Sidebar</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-right.html"><span className="menu-item-text">Blog List - Right Sidebar</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-fullwidth.html"><span className="menu-item-text">Blog Grid - No Sidebar</span></a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="menu-section">
                                                <h2 className="sub-menu-title">Blog Details</h2>
                                                <ul className="menu-list">
                                                    <li>
                                                        <a href="blog-details-left.html"><span className="menu-item-text">Blog Details - Left Sidebar</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details-right.html"><span className="menu-item-text">Blog Details - Right Sidebar</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details-fullwidth.html"><span className="menu-item-text">Blog Details - No Sidebar</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="menu-section">
                                                <h2 className="sub-menu-title">Recent Posts</h2>
                                                <div className="block block-posts recent-posts p-t-5">
                                                    <ul className="posts-list">
                                                        <li className="post-item">
                                                            <a href="blog-details-right.html" className="post-image">
                                                                <img src={require=("../../../asset/media/blog/1.jpg")} />
                                                            </a>
                                                            <div className="post-content">
                                                                <h2 className="post-title">
                                                                    <a href="blog-details-right.html">
                                                                        Bridial Fair Collections 2023
                                                                    </a>
                                                                </h2>
                                                                <div className="post-time">
                                                                    <span className="post-date">May 30, 2022</span>
                                                                    <span className="post-comment">4 Comments</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="post-item">
                                                            <a href="blog-details-right.html" className="post-image">
                                                                <img src={require=("../../../asset/media/blog/2.jpg")} />
                                                            </a>
                                                            <div className="post-content">
                                                                <h2 className="post-title">
                                                                    <a href="blog-details-right.html">
                                                                        Our Sterling Silver
                                                                    </a>
                                                                </h2>
                                                                <div className="post-time">
                                                                    <span className="post-date">Aug 24, 2022</span>
                                                                    <span className="post-comment">2 Comments</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="post-item">
                                                            <a href="blog-details-right.html" className="post-image">
                                                                <img src={require=("../../../asset/media/blog/3.jpg")} />
                                                            </a>
                                                            <div className="post-content">
                                                                <h2 className="post-title">
                                                                    <a href="blog-details-right.html">
                                                                        Kitchen Inspired On Japanese
                                                                    </a>
                                                                </h2>
                                                                <div className="post-time">
                                                                    <span className="post-date">Dec 06, 2022</span>
                                                                    <span className="post-comment">1 Comment</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </li>
                            {/* <li className="level-0 menu-item menu-item-has-children">
                                <a href="#"><span className="menu-item-text">Pages</span></a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="page-login.html"><span className="menu-item-text">Login / Register</span></a>
                                    </li>
                                    <li>
                                        <a href="page-forgot-password.html"><span className="menu-item-text">Forgot Password</span></a>
                                    </li>
                                    <li>
                                        <a href="page-my-account.html"><span className="menu-item-text">My Account</span></a>
                                    </li>
                                    <li>
                                        <a href="page-about.html"><span className="menu-item-text">About Us</span></a>
                                    </li>
                                    <li>
                                        <a href="page-contact.html"><span className="menu-item-text">Contact</span></a>
                                    </li>
                                    <li>
                                        <a href="page-faq.html"><span className="menu-item-text">FAQ</span></a>
                                    </li>
                                    <li>
                                        <a href="page-404.html"><span className="menu-item-text">Page 404</span></a>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="level-0 menu-item">
                                <a href="page-contact.html"><span className="menu-item-text">Contact</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header_middle