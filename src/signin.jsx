import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './sinup';
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/browse1');
    } catch (error) {
      console.error(error);
    }
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      navigate('/browse1');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="qontainer">
      <div className="big-box">
        <form className="frm" onSubmit={signIn}>
          <label htmlFor="em">Enter Email</label>
          <input className="my" id="em" type="text" required onChange={e => setEmail(e.target.value)}></input>
          <label htmlFor="pa">Enter Password</label>
          <input className="my" id="pa" type="password" required onChange={e => setPassword(e.target.value)}></input>
          <button className="mybtn" type="submit">Sign In</button>
          <button className="mybtn" type="button" onClick={signInWithGoogle}>Sign In with Google</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;