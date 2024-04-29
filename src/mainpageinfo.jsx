import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import More1 from "./mainpage";
import Books from "./books";
import More from "./more.js";
import image0 from "./img/pj1.webp"
import image1 from "./img/pj2.jpg"
import image2 from "./img/pj3.jpg"
import image3 from "./img/pj4.jpg"
import image4 from "./img/pj5.jpg"
import image5 from "./img/h1.jpg"
import image6 from "./img/h2.jpg"
import image7 from "./img/h3.jpg"
import image8 from "./img/h4.jpg"
import image9 from "./img/h5.jpg"
import image10 from "./img/t1.jpg"
import image11 from "./img/t2.jpg"
import image12 from "./img/t3.jpg"
import image13 from "./img/t4.jpg"
import image14 from "./img/t5.jpg"
import read0 from "./pdf/p1.pdf"
import read1 from "./pdf/p2.pdf"
import read2 from "./pdf/p3.pdf"
import read3 from "./pdf/p4.pdf"
import read4 from "./pdf/p5.pdf"
import read5 from "./pdf/h1.pdf"
import read6 from "./pdf/h2.pdf"
import read7 from "./pdf/h3.pdf"
import read8 from "./pdf/h4.pdf"
import read9 from "./pdf/h5.pdf"
import read10 from "./pdf/t1.pdf"
import read11 from "./pdf/t2.pdf"
import read12 from "./pdf/t3.pdf"
import read13 from "./pdf/t4.pdf"
import read14 from "./pdf/t5.pdf"
import Footer from "./footer.jsx";

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];
const reads = [read0, read1, read2, read3, read4, read5, read6, read7, read8, read9, read10, read11, read12, read13, read14];


function MainPageInfo({book ,more}){
    const index = Books.indexOf(book);
    return (
        <div>
            <NavBar/>
            <More1
            id ={book.id.toString() + 1}
            key = {index}
            img = {images[index]}
            title = {book.book}
            author = {book.author}
            summary = {more.summary}
            read = {reads[index]}
            bu_y = {more.bu_y}
            />
            <Footer/>
        </div>
    )
}

export default MainPageInfo;