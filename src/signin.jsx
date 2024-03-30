import React, {useState} from "react";
import './css/signup.css'
import {auth} from "./sinup"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignIn(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (event) => {
      event.preventDefault();
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          // Redirect to home page or show a success message
          navigate('/home');
      } catch (error) {
          console.error(error);
          // Show an error message
      }
  }

    return (
      <div className="qontainer">
      {/* ... */}
        <div className="big-box">
          <form className="frm" onSubmit={signIn}>
            <label htmlFor="em">Enter Email</label>
            <input className="my" id="em" type="text" required onChange={e => setEmail(e.target.value)}></input>
            <label htmlFor="pa">Enter Password</label>
            <input className="my" id="pa" type="password" required onChange={e => setPassword(e.target.value)}></input>
            <button className="mybtn" type="submit">Sign In</button>
          </form>
          {/* ... */}
        </div>
      </div>
    );
}

export default SignIn;