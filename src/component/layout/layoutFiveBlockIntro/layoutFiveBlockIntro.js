import React from "react";
import './_layoutFiveBlockIntro.scss'



const Layout_Five = () => {
    return (
        <>
            <section className="section section-padding m-b-70">
                <div className="section-container">
                    {/* <!-- Block Intro (Layout 3) --> */}
                    <div className="block block-intro layout-3">
                        <div className="block-widget-wrap">
                            <div className="row">
                                <div className="section-column left">
                                    <div className="intro-wrap">
                                        <h2 className="intro-title black">Authentic Handlooms <br /> at an Affordable Price</h2>
                                        <div className="intro-item">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit debitis, culpa consequatur reiciendis eligendi enim cupiditate.
                                        </div>
                                        <div className="intro-item">
                                            Visit our online catalogue and shop for the finest and the most authentic luxury handloooms and ssarees.
                                        </div>
                                        <div className="intro-btn">
                                            <a href="shop-grid-left.html" className="button button-outline border-black animation-horizontal">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-column right animation-horizontal hover-opacity">
                                    <img width="690" height="498" src={require("../../../asset/media/b1085aea7a884e726fcff63e3ddd6f44.jpg")} alt="intro" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout_Five