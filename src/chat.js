import React, { useState , useRef ,useEffect } from 'react';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { getApps } from 'firebase/app';
import css from './css/community.module.css';
import { initializeApp } from 'firebase/app';


import { serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjDlYRAORXoGOVG5BGcn7rzWxHbIHrz5Y",
  authDomain: "story-time-3127b.firebaseapp.com",
  databaseURL: "https://story-time-3127b-default-rtdb.firebaseio.com",
  projectId: "story-time-3127b",
  storageBucket: "story-time-3127b.appspot.com",
  messagingSenderId: "172026169157",
  appId: "1:172026169157:web:78e810a6e6cdb8acc3202c",
  measurementId: "G-J9R6PBKP9L"
};



if (!getApps().length) {
  initializeApp(firebaseConfig);
}



const auth = getAuth();
const firestore = getFirestore();
const analytics = getAnalytics();
const messagesRef = collection(firestore, 'messages');
const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));

// Rest of your code...

function Community1() {

  const [user] = useAuthState(auth);

  return (
    <div className={css.App}>
      <header className={css.head}>
        <h1 className={css.mymy}>Community</h1>
        <SignOut />
      </header>

      <section className={css.sec}>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth , provider);
  }

  return (
    <>
      <button className={css.sign_in} onClick={signInWithGoogle}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>Sign in with Google</button>
      <p className={css.x2p}>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className={css.sign_out} onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    if (formValue === '') {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [formValue]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })


  console.log('Before clearing:', formValue); // Log the form's state before it's cleared
  setFormValue('');
  console.log('After clearing:', formValue);
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className={css.mau}>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>
    <form className={css.fumb} onSubmit={sendMessage}>

      <input className={css.x12} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Community..." />

      <button className={css.hn} type="submit" disabled={!formValue}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg></button>
    </form>

  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const auth = getAuth();
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  const imageUrl = photoURL || 'https://www.vecteezy.com/vector-art/20765399-default-profile-account-unknown-icon-black-silhouette';

  return (<>
    <div className={`message ${css[messageClass]}`}>
      <img className={css.oum} src={imageUrl} alt='profile_img' />
      <p className={css.pou}>{text}</p>
    </div>
  </>)
}


export default Community1;