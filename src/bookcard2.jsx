import React, { useEffect, useState } from "react";
import "./css/bookcard.css";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from './sinup';
import URLS from './pdfs';
import axios from 'axios';

function BookCard({ book, tier, handleReadClick}) {
  return (
    <div className="card">
      <img id="hello" src={book.coverImage} alt="img"></img>
      <div className="card-content">
        <h2 className="card-title">{book.title}</h2>
        <h4 className="card-author">{book.author}</h4>
        <h3 className="card-titler">{book.series ? `${book.series} #${book.seriesNumber}` : 'Standalone'}</h3>
        <p className="card-body">{book.description}</p>
      </div>
      <div className="btn-group-1">
        <Link to={`/more/${book.id}`}>
          <button className="btn-1 btn-outline-success">More</button>
        </Link>
        <div className="btn-group-2">
          <button className="btn-2 btn-outline-success" onClick={() => handleReadClick(book)}>Read</button>
          <a href={book.reviewLink} target="_blank" rel="noreferrer">
            <button className="btn-3 btn-outline-success">Review</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function BookSearch(uId) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [tier, setTier] = useState(null);
  const navigate = useNavigate();

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);

    if (event.target.value) {
      try {
        const response = await axios.get(`https://api.freebooks.com/books?query=${event.target.value}`, {
          headers: { 'Authorization': `Bearer YOUR_API_KEY` }
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleReadClick = (book) => {
    if (tier === 'Free') {
      navigate('/subscription'); // Replace '/subscription' with your correct route name
    } else {
      navigate(`/read/${book.id}`);
    }
  };

  useEffect(() => {
const fetchSubscription = async () => {
  console.log('uId:', uId);
  if (!uId || !uId.user) {
    console.log('User is not logged in');
    setTier('Free');
    return;
  } else {
    console.log('User is logged in');
    const userDoc = doc(db, 'subscriptions', String(uId.user.uid)); // 'subscriptions' is your collection name
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      setTier(docSnap.data().tier); // 'tier' is your field name
    } else {
      console.log('No such document!');
    }
  }
};
    fetchSubscription();
  }, [uId]);

  return (
    <div className="nav-item" style={{color: 'white'}}>
      <button className="nav-link" onClick={toggleSearch}>
        {isSearchVisible ? 'Hide Search' : 'Search'}
      </button>
      {isSearchVisible && (
        <div>
          <input 
            type="search" 
            className="search-input" 
            value={searchQuery} 
            onChange={handleSearch} 
            placeholder="Search books..." 
          />
          {searchQuery && (
            <div className="search-results">
              {searchResults.map(book => (
                <BookCard key={book.id} book={book} tier={tier} handleReadClick={handleReadClick} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BookSearch;
