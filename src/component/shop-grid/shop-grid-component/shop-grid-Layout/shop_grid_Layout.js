import React from "react";

import Shop_Grid_Title_Poster from "./shop-grid-title-poster/shop_grid_title_poster";
import Shop_Grid_BL_PD_Cat from "./shop-grid-BL-PD-Cat/shop_grid_BL_PD_Cat";
import Shop_Grid_PD_toolbar from "./shop-grid-PD-toolbar/shop_grid._PD_toolbar";
import Shop_Grid_Tab_content from "./shop-grid-tab-content/shop_grid_tab_content";
import Shop_Grid_Page_Navigation from "./shop-grid-page-nav/shop_grid_page_nav";
import Quickview_popup from "../../../Pop-ups/quickview-popup/quickview_popup";

const Shop_Grid_Layout = () => {
    return (
        <>
            <div id="site-main" className="site-main">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">

                        {/* <!-- #title-poster --> */}
                        <Shop_Grid_Title_Poster />

                        <div id="content" className="site-content" role="main">
                            <div className="section-padding">
                                <div className="section-container p-l-r">
                                    <div className="row">

                                        {/* <!-- #block product category --> */}
                                        <Shop_Grid_BL_PD_Cat />

                                        <div className="col-xl-9 col-lg-9 col-md-12 col-12">

                                            {/* <!-- #product toolbar --> */}
                                            <Shop_Grid_PD_toolbar />

                                            {/* <!-- #tab content --> */}
                                            <Shop_Grid_Tab_content/>

                                            {/* <!-- #page navigation --> */}
                                            <Shop_Grid_Page_Navigation/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- #content --> */}
                    </div>
                    {/* <!-- #primary --> */}
                </div>
                {/* <!-- #main-content --> */}
            </div>
            <Quickview_popup/>
        </>
    )
}
export default Shop_Grid_Layout