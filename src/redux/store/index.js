import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../layoutOneSlice/layoutOneSliderslice";
// import shopGridLayoutGridProductSlice from "../shop-grid-tab-content-slice/shop_grid_tab_content_slice";
import shopGridLayoutGridProductSlice from "../shop-grid-layout-grid-slice/shop_grid_layout_grid_slice";                    
import productCategorySlice from "../productCategorySlice/productCategorySlice";
import productCategoryMatSlice from "../productCategorySlice/productCategoryMatSlice";



export const store = configureStore({
    reducer :{
        ss : sliderSlice,
        lg : shopGridLayoutGridProductSlice,
        pcs : productCategorySlice,
        pcms : productCategoryMatSlice
    }
})