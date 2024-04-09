import React from "react";
import BookCard from './bookcard';
import Books from "./books.js"
import image0 from "./img/pj1.webp"
import image1 from "./img/pj2.jpg"
import image2 from "./img/pj3.jpg"
import image3 from "./img/pj4.jpg"
import image4 from "./img/pj5.jpg"
import read0 from "./pdf/p1.pdf"
import read1 from "./pdf/p2.pdf"
import read2 from "./pdf/p3.pdf"
import read3 from "./pdf/p4.pdf"
import read4 from "./pdf/p5.pdf"
import './css/browse1.css'


function Browse1(){
    return (
        <div className="container">
                <BookCard 
                book = {Books[0].book}
                title = {Books[0].title}
                author = {Books[0].author}
                body = {Books[0].body}
                img = {image0}
                read ={read0}
                buy = {Books[0].buy}
                index ={Books[0].id}
                />
                <BookCard 
                book = {Books[1].book}
                title = {Books[1].title}
                author = {Books[1].author}
                body = {Books[1].body}
                img = {image1}
                read ={read1}
                index ={Books[1].id}
                />
                <BookCard 
                book = {Books[2].book}
                title = {Books[2].title}
                author = {Books[2].author}
                body = {Books[2].body}
                img = {image2}
                read ={read2}
                index ={Books[2].id}
                />
                <BookCard 
                book = {Books[3].book}
                title = {Books[3].title}
                author = {Books[3].author}
                body = {Books[3].body}
                img = {image3}
                read ={read3}
                index ={Books[3].id}
                />
                <BookCard 
                book = {Books[4].book}
                title = {Books[4].title}
                author = {Books[4].author}
                body = {Books[4].body}
                img = {image4}
                read ={read4}
                index ={Books[4].id}
                />
        </div>
    );
}

export default Browse1 ;