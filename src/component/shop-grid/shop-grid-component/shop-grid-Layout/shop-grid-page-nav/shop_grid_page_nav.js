import React from "react";

const Shop_Grid_Page_Navigation = () => {
    return (
        <>
            <nav className="pagination">
                <ul className="page-numbers">
                    <li><a className="prev page-numbers" href="#">Previous</a></li>
                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                    <li><a className="page-numbers" href="#">2</a></li>
                    <li><a className="page-numbers" href="#">3</a></li>
                    <li><a className="next page-numbers" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Shop_Grid_Page_Navigation;