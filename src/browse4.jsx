import React , {useContext} from "react";
import BookCard2 from './bookcard2.jsx';
import Books from "./books.js"
import image10 from "./img/t1.jpg"
import image11 from "./img/t2.jpg"
import image12 from "./img/t3.jpg"
import image13 from "./img/t4.jpg"
import image14 from "./img/t5.jpg"
import  stylesheet from './css/browse1.module.css'
import { UserContext } from "./usercontxt.jsx";

function Browse4(){
    const userId = useContext(UserContext);
    return (
        <div>
            <BookCard2
            uId={userId}
            />
        </div>
    );
}

export default Browse4 ;