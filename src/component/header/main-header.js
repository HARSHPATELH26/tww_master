import React from "react";
import './_main-header.scss'
import '../../App.css'
import Header_top from "./header-top/header-top";
import Header_middle from "./header-middle/header-middle";
import Header_bottom from "./header-bottom/header-bottom";

const Header = () => {
    return (
        <>
            
                <header id="site-header" className="site-header header-v3">
                   
                    <div className="header-desktop">
                        <Header_top />
                        <Header_middle/>
                        <Header_bottom/>
                        

                    </div>
                </header>

        </>
    )
}
export default Header