import React from "react";
import './_layoutOneSlider.scss';
import { useSelector } from "react-redux";
import sliderSlice from "../../../redux/layoutOneSlice/layoutOneSliderslice";


const Layout_One = () => {
    const slider_contents = useSelector(state => state.ss)
    return (
        <>
            <section className="section m-b-30">
                {/* <!-- Block Sliders (Layout 3) --> */}
                <div className="block block-sliders layout-3 auto-height nav-center">
                    {/* <div className="slick-sliders" data-autoplay="true" data-dots="true" data-nav="true" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns1440="1" data-columns="1"> */}
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {
                                slider_contents.map((content, key) => {
                                    return (
                                        <>
                                            <div className="carousel-item active">
                                                <div className="content-image">
                                                    <img style={{ padding: "1%", width: "1200px", height: "600px" }} src={require("../../../asset/media/" + content.img)} className="d-block w-100" alt="..." />
                                                </div >
                                                <div className="carousel-caption d-none d-md-block title-slider text-right">
                                                    <h2 style={{ fontWeight: "bold" }}>{content.title}</h2>
                                                    <div className="description-slider" style={{ color: "black", fontSize: "20px" }}>
                                                        <p>{content.description}</p>
                                                    </div>
                                                    <a className="button button-slider button-white" href="shop-grid-left.html">SHOP NOW</a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            {/* <div className="carousel-item">
                                <div classNameName="content-image">
                                    <img style={{ padding: "1%", width: "1200px", height: "600px" }} src={require("../../../asset/media/"+ content.img)} className="d-block w-100" alt="..." />
                                </div >
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div classNameName="content-image">
                                    <img style={{ padding: "1%", width: "1200px", height: "600px" }} src={require("../../../asset/media/Explore the Ethnic Facet of Fashion.png")} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* {
                            slider_contents.map((content, key) => {
                                return (
                                    <div classNameName="item slick-slide">
                                        <div classNameName="item-content">
                                            <div classNameName="content-image">
                                                <img width="1920" height="671" src={require("../../../asset/media/" + content.img)} alt="Image Slider" />
                                            </div>
                                            <div classNameName="item-info horizontal-end vertical-middle mr-3">
                                                <div classNameName="content">
                                                    <h2 classNameName="title-slider">{content.title}</h2>
                                                    <div classNameName="description-slider">{content.description}</div>
                                                    <a classNameName="button button-slider button-white" href="shop-grid-left.html">SHOP NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }                        */}
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default Layout_One