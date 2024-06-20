import React from "react";
import './_layoutSixBlockNL.scss';



const Layout_Seven = () => {
    return (
        <>
            <section className="section section-padding m-b-70">
                <div className="section-container">
                    {/* <!-- Block Newsletter (Layout 2) --> */}
                    <div className="block block-newsletter layout-2 one-col">
                        <div className="block-widget-wrap">
                            <div className="newsletter-title-wrap">
                                <h2 className="newsletter-title">Latest From TWW!</h2>
                                <div className="newsletter-text">Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</div>
                            </div>
                            <form action="" method="post" className="newsletter-form">
                                <input type="email" name="your-email" value="" size="40" placeholder="Email address" />
                                <span className="btn-submit">
                                    <input type="submit" value="SUBSCRIBE" />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout_Seven;