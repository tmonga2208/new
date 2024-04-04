import React from "react";
import "./css/bookcard.css";

function BookCard(props){
    return (
  < div className="card">
            <img  id="hello"  src={props.img}></img>
      <div className="card-content">
          <h2 className="card-title">{props.book}</h2>
            <h4 className="card-author">{props.author}</h4>
            <h3 className="card-titler">{props.title}</h3>
          <p className="card-body">{props.body}</p>
      </div>
      <div className="btn-group-1">
      <a href={props.buy} target="_blank"><button className="btn-1 btn-outline-success"disabled={false}>More</button></a>
        <div className="btn-group-2">
        <a href={props.read} target="_blank"><button className="btn-2 btn-outline-success" disabled={false}>Read</button></a>
        <a href={props.review} target="_blank"><button className="btn-3 btn-outline-success"disabled={false}>Review</button></a>
        </div>
      </div>
  </div>
    );
}

export default BookCard ;