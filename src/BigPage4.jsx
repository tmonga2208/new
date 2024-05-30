import React from "react";
import NavBar from "./navbar"
import Browse4 from "./browse4";
import NextPrev from "./next-prev"
import Footer from "./footer"
import Books from "./books";

function BigPage4(){
    return(
        <div>
        <NavBar/>
        <Browse4/>
        <NextPrev
         next ={Books[3].next}
         prev={Books[3].prev}
        />
        <Footer/>
        </div>
    )
}
export default BigPage4;