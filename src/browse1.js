import React ,{useContext} from "react";
import BookCard from './bookcard';
import Books from "./books.js"
import image0 from "./img/pj1.webp"
import image1 from "./img/pj2.jpg"
import image2 from "./img/pj3.jpg"
import image3 from "./img/pj4.jpg"
import image4 from "./img/pj5.jpg"
import  stylesheet from './css/browse1.module.css'
import { UserContext } from "./usercontxt.jsx";


function Browse1(){
    const userId = useContext(UserContext);
    return (
        <div className={stylesheet.container}>
                <BookCard className={stylesheet.card}
                id = {1}
                book = {Books[0].book}
                title = {Books[0].title}
                author = {Books[0].author}
                body = {Books[0].body}
                img = {image0}
                buy = {Books[0].buy}
                index ={Books[0].id}
                uId={userId}
                />
                <BookCard 
                id = {2}
                book = {Books[1].book}
                title = {Books[1].title}
                author = {Books[1].author}
                body = {Books[1].body}
                img = {image1}
                index ={Books[1].id}
                uId={userId}
                />
                <BookCard 
                id = {3}
                book = {Books[2].book}
                title = {Books[2].title}
                author = {Books[2].author}
                body = {Books[2].body}
                img = {image2}
                index ={Books[2].id}
                uId={userId}
                />
                <BookCard 
                id = {4}
                book = {Books[3].book}
                title = {Books[3].title}
                author = {Books[3].author}
                body = {Books[3].body}
                img = {image3}
                index ={Books[3].id}
                uId={userId}
                />
                <BookCard 
                id = {5}
                book = {Books[4].book}
                title = {Books[4].title}
                author = {Books[4].author}
                body = {Books[4].body}
                img = {image4}
                index ={Books[4].id}
                uId={userId}
                />
        </div>
    );
}

export default Browse1 ;