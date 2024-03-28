import React from "react";
import './css/nextprev.css'

function NextPrev(props){
    return (
        <div className="btn-group-5">
            <a className="btn-8" href={props.prev}>Previous</a>
            <a className="btn-7" href={props.next}>Next</a>
        </div>
    );
}
export default NextPrev;