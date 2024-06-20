import React from "react";
import './_footer.scss'
import '../../App.css'

const Footer = () => {
    return (
        <>
            <footer id="site-footer" className="site-footer three-columns">
                <div className="footer">
                    <div className="section-padding">
                        <div className="section-container">
                            <div className="block-widget-wrap">
                                <div className="row">
                                    <div className="col-lg-4 column-left">
                                        <div className="column-wrap">
                                            <div className="block block-newsletter">
                                                <h2 className="block-title">Our Newsletter</h2>
                                                <div className="block-content">
                                                    <div className="newsletter-text">Sign up for the latest Ice offers and exclusives.</div>
                                                    <form action="" method="post" className="newsletter-form">
                                                        <input type="email" name="your-email" value="" size="40" placeholder="Email address" />
                                                        <span className="btn-submit">
                                                            <input type="submit" value="Subscribe" />
                                                        </span>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 column-center">
                                        <div className="column-wrap">
                                            <div className="block block-image m-b-20">
                                                <img width="100" src="media/tww/twwLogo.png" alt="" />
                                            </div>
                                            <div className="block block-social">
                                                <ul className="social-link">
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 column-right">
                                        <div className="column-wrap">
                                            <div className="row">
                                                <div className="col-lg-6 md-b-20">
                                                    <div className="block block-menu">
                                                        <h2 className="block-title">Customer Services</h2>
                                                        <div className="block-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">Contact Us</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Track Your Order</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Product Care & Repair</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Frequently Asked Questions</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Shipping & Returns</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="block block-menu">
                                                        <h2 className="block-title">About Us</h2>
                                                        <div className="block-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="#">About Us</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">FAQ</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Our Producers</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Terms & Conditions</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Privacy Policy</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="section-padding">
                        <div className="section-container">
                            <div className="block-widget-wrap">
                                <p className="copyright text-center">Copyright © 2023. All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;