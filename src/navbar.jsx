import React ,{ useState , useEffect} from "react";
import './css/navbar.css';
import {auth} from "./sinup"
import { Link } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getAuth , onAuthStateChanged} from 'firebase/auth';


const defaultPicUrl = 'img/x2345.svg'
const storage = getStorage();

function NavBar(){
  const auth = getAuth();
  const user = auth.currentUser;
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') === 'true');
  useEffect(() => {
    if (auth.currentUser) {
      const profilePicRef = ref(storage, `profileImages/${auth.currentUser.uid}.png`); // replace with the actual path to the image
      getDownloadURL(profilePicRef)
        .then((url) => {
          setProfilePicUrl(url);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [auth.currentUser]);
const toggleDarkMode = () => {
  const newDarkMode = !darkmode;
  setDarkmode(newDarkMode);
  localStorage.setItem('darkmode', newDarkMode.toString());
}

 useEffect(() => {
  if (darkmode) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}, [darkmode]);

    return (
       <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-black" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Authors</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/browse1">Rick Riordan</a></li>
              <li><a className="dropdown-item" href="/browse4">Jk Rowling</a></li>
              <li><a className="dropdown-item" href="/browse5">Rick Riordan Presents </a></li>
            </ul>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/chat">Community</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/subscription">Subscription</Link>
          </li>
         {!user && (
          <li className="nav-item">
          <Link className="nav-link bg-dark" to="/signup">Sign In</Link>
          </li>
         )}
        <li className="nav-item">
          <button className="nav-link" onClick={toggleDarkMode}>D</button>
        </li>
        </ul>
<div className="profile">
<div className="dropdown">
  <a className="profilepage " href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
  {
  auth.currentUser 
  ? auth.currentUser.providerData[0].providerId === 'google.com'
  ? <img className="profileimg" src={auth.currentUser.photoURL ? auth.currentUser.photoURL : defaultPicUrl} alt="User profile"/> 
  : <img className="profileimg" src={profilePicUrl} alt="User profile"/> 
    : <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 29 29" id="user" width="32" fill="white">
        <path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"></path>
      </svg>
}
  </a>
  {
  auth.currentUser 
    ? <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" to="/userinfo">User Info</Link></li>
      <li><Link className="dropdown-item"  to="/browse1" 
    onClick={() => {
      auth.signOut().then(() => {
        // Sign-out successful.
        window.location.reload();
      }).catch((error) => {
        // An error happened.
      });
    }}>Log Out</Link></li>
      </ul>
    : <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" to="/signin">Log In</Link></li>
    </ul>
}
</div>
</div>
      </div>
    </div>
  </nav>
    </div> 
    );
}

export default NavBar;