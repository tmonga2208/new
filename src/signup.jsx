import React, {useState} from "react";
import './css/signup.css'
import {auth} from "./sinup"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignUp(){
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
          console.error("Passwords do not match");
          return;
      }
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          await user.updateProfile({ displayName: username });
          history.push('/home');
      } catch (error) {
          console.error(error);
          const errorMessage = error.message;
      }
      }
      return (
      <div className="qontainer">
        <a href="home"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" class="bi bi-book-half" viewBox="0 0 16 16">
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg></a>
        <h1 className="mytag">Story Time</h1>
        <div className="big-box">
        <form className="frm" onSubmit={signUp}>
            <label htmlFor="em">Enter Email</label>
            <input className="my" id="em" type="text" required onChange={e => setEmail(e.target.value)}></input>
            <label htmlFor="us">Enter Username</label>
            <input className="my" id="us" type="text" required onChange={e => setUsername(e.target.value)}></input>
            <label htmlFor="pa">Enter Password</label>
            <input className="my" id="pa" type="password" required onChange={e => setPassword(e.target.value)}></input>
            <label htmlFor="cpa">Confirm Password</label>
            <input className="my" id="cpa" type="password" required onChange={e => setConfirmPassword(e.target.value)}></input>
            <input type="submit" className="mybtn" value="Signup"/>
          </form>
            <div className="mygrp2">
            <p className="mytxt">Already have an account? <a href="signin">Login</a></p>
            </div>
        </div>
      </div>
    );
}

export default SignUp;