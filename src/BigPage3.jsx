import React from "react";
import NavBar from "./navbar"
import Browse3 from "./browse3";
import NextPrev from "./next-prev"
import Footer from "./footer"
import Books from "./books";

function BigPage2(){
    return(
        <div>
        <NavBar/>
        <Browse3/>
        <NextPrev
         next ={Books[2].next}
         prev={Books[2].prev}
        />
        <Footer/>
        </div>
    )
}
export default BigPage2;