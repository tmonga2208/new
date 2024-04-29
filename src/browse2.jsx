import React ,{useContext} from "react";
import BookCard from './bookcard';
import Books from "./books.js"
import image5 from "./img/h1.jpg"
import image6 from "./img/h2.jpg"
import image7 from "./img/h3.jpg"
import image8 from "./img/h4.jpg"
import image9 from "./img/h5.jpg"
import  stylesheet from './css/browse1.module.css'
import { UserContext } from "./usercontxt.jsx";

function Browse2(){
    const userId = useContext(UserContext);
    return (
        <div className={stylesheet.container}>
                <BookCard 
                id = {6}
                book = {Books[5].book}
                title = {Books[5].title}
                author = {Books[5].author}
                body = {Books[5].body}
                img = {image5}
                index ={Books[5].id}
                uId={userId}
                />
                <BookCard 
                id = {7}
                book = {Books[6].book}
                title = {Books[6].title}
                author = {Books[6].author}
                body = {Books[6].body}
                img = {image6}
                index ={Books[6].id}
                uId={userId}
                />
                <BookCard 
                id = {8}
                book = {Books[7].book}
                title = {Books[7].title}
                author = {Books[7].author}
                body = {Books[7].body}
                img = {image7}
                index ={Books[7].id}
                uId={userId}
                />
                <BookCard 
                id = {9}
                book = {Books[8].book}
                title = {Books[8].title}
                author = {Books[8].author}
                body = {Books[8].body}
                img = {image8}
                index ={Books[8].id}
                uId={userId}
                />
                <BookCard 
                id = {10}
                book = {Books[9].book}
                title = {Books[9].title}
                author = {Books[9].author}
                body = {Books[9].body}
                img = {image9}
                index ={Books[9].id}
                uId={userId}
                />
        </div>
    );
}

export default Browse2 ;