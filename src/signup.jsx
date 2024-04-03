import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './css/signup.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const storage = getStorage();

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Upload the profile image to Firebase Storage
      const profilePicRef = ref(storage, `profileImages/${user.uid}.png`);

      const uploadTask = uploadBytesResumable(profilePicRef, profileImage);
      // Get the URL of the uploaded image
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Handle the upload progress
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.error(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(user, { displayName: username, photoURL: downloadURL })
              .catch(error => console.error(error));
          });
          navigate('/browse1');
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
      return (
      <div className="qontainer">
        <a href="home"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-book-half" viewBox="0 0 16 16">
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
            <label htmlFor="img">Profile Image</label>
            <input className="my" id="img" type="file" onChange={e => {
            setProfileImage(e.target.files[0]);
            console.log(profileImage);
            }}></input>
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