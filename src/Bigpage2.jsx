import React from "react";
import NavBar from "./navbar"
import Browse2 from "./browse2";
import NextPrev from "./next-prev"
import Footer from "./footer"
import Books from "./books";

function BigPage2(){
    return(
        <div>
        <NavBar/>
        <Browse2/>
        <NextPrev
         next ={Books[1].next}
         prev={Books[1].prev}
        />
        <Footer/>
        </div>
    )
}
export default BigPage2;