import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import More1 from "./mainpage";
import Books from "./books";
import image0 from "./img/pj1.webp"
import image1 from "./img/pj2.jpg"
import image2 from "./img/pj3.jpg"
import image3 from "./img/pj4.jpg"
import image4 from "./img/pj5.jpg"
import More from "./more.js";
import read0 from "./pdf/p1.pdf"
import read1 from "./pdf/p2.pdf"
import read2 from "./pdf/p3.pdf"
import read3 from "./pdf/p4.pdf"
import read4 from "./pdf/p5.pdf"
import Footer from "./footer.jsx";



function MainPageInfo(){


    return (
        <div>
            <NavBar/>
            <More1
            img = {image0}
            title = {Books[0].book}
            author = {Books[0].author}
            summary = {More[0].summary}
            read = {read0}
            bu_y = {More[0].bu_y}
            comreview = {More[0].com_rev[0]}
            />
            <Footer/>
        </div>
    )
}

export default MainPageInfo;