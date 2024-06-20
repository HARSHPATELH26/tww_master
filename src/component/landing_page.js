import React from "react";
import Layout from "./layout/layout";
import { Route, Routes } from "react-router-dom";
import Newsletter_popup from "./Pop-ups/newslatter-popup/newsletter_popup";
import Quickview_popup from "./Pop-ups/quickview-popup/quickview_popup";



const Landing_Page = () => {
    return (
        <>
        <Routes>
            <Route path = "/" element = {<Layout/>} />
            <Route path = "/" element = {<Newsletter_popup/>} />
            
            
        </Routes>
        </>
    )
}
export default Landing_Page;