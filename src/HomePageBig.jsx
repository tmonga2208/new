import React from "react";
import HomePage from "./homepage";
import HomeBig from "./home-big";
import Footer from "./footer";

function HomePageBig(){
    return(
        <div>
            <HomePage/>
            <HomeBig/>
            <Footer/>
        </div>
    )
}
export default HomePageBig;