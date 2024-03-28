import React from "react";
import NavBar from "./navbar"
import Browse1 from "./browse1";
import NextPrev from "./next-prev"
import Footer from "./footer"
import Books from "./books";

function BigPage(){
    return(
        <div>
        <NavBar/>
        <Browse1/>
        <NextPrev
         next ={Books[0].next}
         prev={Books[0].prev}
        />
        <Footer/>
        </div>
    )
}
export default BigPage;