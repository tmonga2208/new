import React from "react";
import BookCard from './bookcard';
import Books from "./books.js"
import image5 from "./img/h1.jpg"
import image6 from "./img/h2.jpg"
import image7 from "./img/h3.jpg"
import image8 from "./img/h4.jpg"
import image9 from "./img/h5.jpg"
import './css/browse1.css'
import read5 from "./pdf/h1.pdf"
import read6 from "./pdf/h2.pdf"
import read7 from "./pdf/h3.pdf"
import read8 from "./pdf/h4.pdf"
import read9 from "./pdf/h5.pdf"

function Browse2(){
    return (
        <div className="container">
                <BookCard 
                book = {Books[5].book}
                title = {Books[5].title}
                author = {Books[5].author}
                body = {Books[5].body}
                img = {image5}
                read ={read5}
                index ={Books[5].id}
                />
                <BookCard 
                book = {Books[6].book}
                title = {Books[6].title}
                author = {Books[6].author}
                body = {Books[6].body}
                img = {image6}
                read ={read6}
                index ={Books[6].id}
                />
                <BookCard 
                book = {Books[7].book}
                title = {Books[7].title}
                author = {Books[7].author}
                body = {Books[7].body}
                img = {image7}
                read ={read7}
                index ={Books[7].id}
                />
                <BookCard 
                book = {Books[8].book}
                title = {Books[8].title}
                author = {Books[8].author}
                body = {Books[8].body}
                img = {image8}
                read ={read8}
                index ={Books[8].id}
                />
                <BookCard 
                book = {Books[9].book}
                title = {Books[9].title}
                author = {Books[9].author}
                body = {Books[9].body}
                img = {image9}
                read ={read9}
                index ={Books[9].id}
                />
        </div>
    );
}

export default Browse2 ;