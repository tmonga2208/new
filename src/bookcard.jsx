import React, { useEffect, useState } from "react";
import "./css/bookcard.css";
import { Link, useNavigate } from "react-router-dom";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './sinup';

function BookCard({ uId, ...props }) {
  const [tier, setTier] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!uId) {
      console.log('User is not logged in');
      setTier('Free');
      return;
    }
    const userDoc = doc(db, 'subscriptions', String(uId)); // 'subscriptions' is your collection name

    const unsubscribe = onSnapshot(userDoc, (doc) => {
      const data = doc.data();
      setTier(data.tier); // 'tier' is your field name
      console.log(data.tier); 
    });

    return unsubscribe; // Clean up function
  }, [uId]);

  const isReadDisabled = tier === 'Free';

  const handleReadClick = () => {
    if (isReadDisabled) {
      navigate('/subscription'); // Replace '/subscription' with your correct route name
    } else {
      window.open(props.read, '_blank', 'noreferrer');
    }
  };

  return (
    <div className="card">
      <img id="hello" src={props.img} alt="img"></img>
      <div className="card-content">
        <h2 className="card-title">{props.book}</h2>
        <h4 className="card-author">{props.author}</h4>
        <h3 className="card-titler">{props.title}</h3>
        <p className="card-body">{props.body}</p>
      </div>
      <div className="btn-group-1">
        <Link to={`/more/${props.index}`}>
          <button className="btn-1 btn-outline-success">More</button>
        </Link>
        <div className="btn-group-2">
          <button className="btn-2 btn-outline-success" onClick={handleReadClick}>Read</button>
          <a href={props.review} target="_blank" rel="noreferrer">
            <button className="btn-3 btn-outline-success">Review</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookCard;