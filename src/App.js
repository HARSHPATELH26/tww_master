
import './App.css';
import Header from './component/header/main-header';
import './responsive.css';
import Layout from './component/layout/layout';
import Footer from './component/footer/footer';
import Back_top_button from './component/Pop-ups/back_top_button';
import Search_overlay from './component/Pop-ups/search-overlay/search_overlay';
import Wsihlist_popup from './component/Pop-ups/wishlist-popup/wishlist_popup';
import Compare_popup from './component/Pop-ups/compare-popup/compare_popup';
import Quickview_popup from './component/Pop-ups/quickview-popup/quickview_popup';
import Newsletter_popup from './component/Pop-ups/newslatter-popup/newsletter_popup';
import './other/js/app.js'
import { Route, Routes } from 'react-router-dom';
import Landing_Page from './component/landing_page.js';
import Shop_Grid from './component/shop-grid/shop_grid.js';
import Product_Details from './component/shop-grid/product_shop_detials/product_shop_detials.js';


function App() {
  return (
    <div className="App">
      <div id="page" className="hfeed page-wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/shop-grid" element={<Shop_Grid />} />
          <Route path="/product-details" element={<Product_Details />} />
          <Route path="/quick-view" element={<Quickview_popup />} />
          
        </Routes>

        <Footer />
      </div>
      <Newsletter_popup />
      <Back_top_button />
      <Search_overlay />
      <Wsihlist_popup />
      {/* <Compare_popup/> */}





      {/* <!-- Page Loader --> */}
      <div className="page-preloader">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
