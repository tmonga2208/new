import React from "react";
import HomeNew from "./home-new";
import home123 from "./home1";
import imageHome from "./img/other1.png"

function HomeBig(){
    return(
        <div>
            <HomeNew 
            tit2 = {home123[0].tit2}
            para = {home123[0].para}
            img={imageHome}/>
        </div>
    );
}

export default HomeBig;