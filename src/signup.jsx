import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './css/signup.css';
import { setDoc ,doc ,getFirestore} from 'firebase/firestore';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const db = getFirestore();
  const [loading, setLoading] = useState(false);

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const auth = getAuth();
      await setPersistence(auth, browserLocalPersistence);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', user);
      const storage = getStorage();
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
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            await updateProfile(user, { displayName: username, photoURL: downloadURL })
            console.log('Profile updated:', user);
            await user.reload();
                await setDoc(doc(db, 'subscriptions', user.uid), {
                  userId: user.uid,
                  bookId: 0, // ID of the free book
                });
                await setDoc(doc(db, 'users', user.uid), {
                  username: username,
                });
                await setDoc(doc(db, 'subscriptions', user.uid), {
                  userId: user.uid,
                  bookId: 0, // ID of the free book
                  tier: 'Free', // Set the tier to 'Free'
                });
                navigate('/browse1');
        }
      );
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false); // Add this line
    }
  };
      return (
      <div className="qontainer">
        {loading ? <div className="loading-screen">
      <div class="spinner"></div></div> : null} {/* Add this line */}
        <a href="home"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-book-half" viewBox="0 0 16 16">
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg></a>
        <h1 className="mytag">Story Time</h1>
        <div className="big-box">
        <form className="from" onSubmit={signUp}>
            <label htmlFor="em">Enter Email</label>
            <input className="my1" id="em" type="text" required onChange={e => setEmail(e.target.value)}></input>
            <label htmlFor="us">Enter Name</label>
            <input className="my1" id="us" type="text" required onChange={e => setUsername(e.target.value)}></input>
            <label htmlFor="pa">Enter Password</label>
            <input className="my1" id="pa" type="password" required onChange={e => setPassword(e.target.value)}></input>
            <label htmlFor="cpa">Confirm Password</label>
            <input className="my1" id="cpa" type="password" required onChange={e => setConfirmPassword(e.target.value)}></input>
            <label htmlFor="img">Profile Image</label>
            <input className="my1" id="img" type="file" onChange={e => {
            const file = e.target.files[0];
            setProfileImage(file);
            console.log(file);
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