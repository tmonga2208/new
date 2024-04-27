import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { doc, getDoc ,updateDoc } from 'firebase/firestore';
import { db } from './sinup'; 
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import css from './css/userinfo.module.css';
const storage = getStorage();

function UserInfo() {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [username, setUsername] = useState(''); 
  const [editableUsername, setEditableUsername] = useState('');

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const profilePicRef = ref(storage, `profileImages/${currentUser.uid}.png`); // replace with the actual path to the image
        getDownloadURL(profilePicRef)
          .then((url) => {
            setProfilePicUrl(url);
          })
          .catch((error) => {
            console.error(error);
          });
        // Fetch the username from Firestore
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
          setEditableUsername(docSnap.data().username);
        } else {
          console.log('No such document!');
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const updateUsername = () => {
    if (user) {
      const userDoc = doc(db, 'users', user.uid); // 'users' is your collection name
      updateDoc(userDoc, {
        username: editableUsername, // 'username' is your field name
      }).then(() => {
        console.log('Username updated successfully');
      }).catch((error) => {
        console.error('Error updating username:', error);
      });
    } else {
      console.log('No user is currently logged in.');
    }
  };

  if (!user) {
    return <div>No user is currently logged in.</div>;
  }

  return (
    <div>
      <header className={css.head}>
      <Link to ='/browse1'><button className={css.back}>Back</button></Link>
      <h1 className={css.title}>User Info</h1>
      </header>
      <div className={css.container}>
      <div className={css.profilePicWrapper}>
      <img className={css.profilePic} src={profilePicUrl} alt="Profile" /> {/* Use profilePicUrl directly */}
      </div>
      <p className={css.email}>Email: {user.email}</p>
     <input className={css.username} value={editableUsername} onChange={(e) => setEditableUsername(e.target.value)}/>
     <button onClick={updateUsername}>Save Changes</button>
      <p className={css.password}>
      <Link to='/home'><button className={css.password}>Change Password</button></Link>

      </p>
      </div>
    </div>
  );
}

export default UserInfo;