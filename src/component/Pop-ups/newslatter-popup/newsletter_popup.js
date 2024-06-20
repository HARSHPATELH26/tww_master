import React from "react";
import './_newsletter_popup.scss';
import '../../../App.css';

const Newsletter_popup = () => {
    return (
        <>
            {/* <!-- Newsletter Popup --> */}
            <div className="popup-shadow"></div>
            <div className="newsletter-popup">
                <a href="#" className="newsletter-close"></a>
                <div className="newsletter-container">
                    <div className="newsletter-img">
                        <img src={require("../../../asset/media/tww/Saree 12 (2).jpg")} alt="" />
                    </div>
                    <div className="newsletter-form">
                        <form action="" method="post">
                            <div className="newsletter-title">
                                <div className="title">Get<br /> free shipping</div>
                                <div className="sub-title">on your first order. Offer ends soon.</div>
                            </div>
                            <div className="newsletter-input clearfix">
                                <input type="email" name="your-email" size="40" className="form-control" placeholder="Enter Your Email ..." />
                                <input type="submit" value="Subscribe" className="form-control" />
                            </div>
                            <div className="newsletter-no">no thanks !</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Newsletter_popup;

