import React from "react";
import './_search_overlay.scss';
import '../../../App.css';

const Search_overlay =()=>{
    return(
        <>
        {/* <!-- Search --> */}
      <div className="search-overlay">
        <div className="close-search"></div>
        <div className="wrapper-search">
          <form role="search" method="get" className="search-from ajax-search" action="">
            <a href="#" className="search-close"></a>
            <div className="search-box">
              <button id="searchsubmit" className="btn" type="submit">
                <i className="icon-search"></i>
              </button>
              <input type="text" autocomplete="off" value="" name="s" className="input-search s" placeholder="Search..." />
              <div className="content-menu_search">
                <label>Suggested</label>
                <ul id="menu_search" className="menu">
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Necklaces</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Jewelry Box</a></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}
export default Search_overlay