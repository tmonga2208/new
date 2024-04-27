import { getAuth, GoogleAuthProvider ,setPersistence, browserLocalPersistence, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useEffect
import { auth } from './sinup';
import { signInWithEmailAndPassword } from "firebase/auth";
import './css/signin.css'

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse1');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('Sign in successful!')
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    try {
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      var user = result.user;
      alert('Sign in with Google successful!');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="qontainer_2">
      {loading ? <div className="loading-screen">
      <div class="spinner"></div></div> : null}
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