import React from "react";
import NavBar from "./navbar";
import More1 from "./mainpage";
import Books from "./books";
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
import Footer from "./footer.jsx";

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];
const nos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function MainPageInfo({book ,more}){
    const index = Books.indexOf(book);
    if (index === -1) {
        // handle error, e.g., return null, throw an error, or render an error message
        return null;
      }
      console.log(nos[index])
    return (
        <div>
            <NavBar/>
            <More1
            id = {nos[index].toString()}
            key = {index}
            img = {images[index]}
            title = {book.book}
            author = {book.author}
            summary = {more.summary}
            bu_y = {more.bu_y}
            />
            <Footer/>
        </div>
    )
}

export default MainPageInfo;