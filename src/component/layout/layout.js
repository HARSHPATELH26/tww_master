import React from "react";
import './_layout.scss'
import '../../App.css'
import Layout_One from "./layoutOneSlider/layoutOneSlider";
import Layout_two from "./layoutTwoBlockProdCat/layoutTwoBlockProdCat";
import Layout_Three from "./layoutThreeBlockLKBK/layoutThreeBlockLKBK";
import Layout_Four from "./layoutFourBlockProd/layoutFourBlockProd";
import Layout_Five from "./layoutFiveBlockIntro/layoutFiveBlockIntro";
import Layout_Seven from "./layoutSevenBlockNL/layoutSevenBlockNL";
import Layout_Six from "./layoutSixBlockPost/layoutSixBlockP";

const Layout = () => {
    return (
        <>
            <div id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <div id="content" className="site-content" role="main">
                            
                            <Layout_One/>
                            <Layout_two/>
                            <Layout_Three/>
                            <Layout_Four/>
                            <Layout_Five/>
                            <Layout_Six/>
                            <Layout_Seven/>                        
                            
                            <section className="section section-padding p-t-10 p-b-10 m-b-0">
                            </section>
                        </div>
                        {/* <!-- #content --> */}
                    </div >
                    {/* <!-- #primary --> */}
                </div >
                {/* <!-- #main-content --> */}
            </div >
        </>
    )
}

export default Layout