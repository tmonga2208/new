import React , {useContext} from "react";
import BookCard from './bookcard';
import Books from "./books.js"
import image10 from "./img/t1.jpg"
import image11 from "./img/t2.jpg"
import image12 from "./img/t3.jpg"
import image13 from "./img/t4.jpg"
import image14 from "./img/t5.jpg"
import  stylesheet from './css/browse1.module.css'
import { UserContext } from "./usercontxt.jsx";

function Browse3(){
    const userId = useContext(UserContext);
    return (
        <div className={stylesheet.container}>
                <BookCard 
                id = {11}
                book = {Books[10].book}
                title = {Books[10].title}
                author = {Books[10].author}
                body = {Books[10].body}
                img = {image10}
                index ={Books[10].id}
                uId={userId}
                />
                <BookCard
                id = {12} 
                book = {Books[11].book}
                title = {Books[11].title}
                author = {Books[11].author}
                body = {Books[11].body}
                img = {image11}
                index ={Books[11].id}
                uId={userId}
                />
                <BookCard 
                id = {13}
                book = {Books[12].book}
                title = {Books[12].title}
                author = {Books[12].author}
                body = {Books[12].body}
                img = {image12}
                index ={Books[12].id}
                uId={userId}
                />
                <BookCard 
                id = {14}
                book = {Books[13].book}
                title = {Books[13].title}
                author = {Books[13].author}
                body = {Books[13].body}
                img = {image13}
                index ={Books[13].id}
                uId={userId}
                />
                <BookCard 
                id = {15}
                book = {Books[14].book}
                title = {Books[14].title}
                author = {Books[14].author}
                body = {Books[14].body}
                img = {image14}
                index ={Books[14].id}
                uId={userId}
                />
        </div>
    );
}

export default Browse3 ;