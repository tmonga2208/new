import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './sinup'; 
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import css from './css/userinfo.module.css';

const storage = getStorage();



function UserInfo() {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [username, setUsername] = useState(''); 
  const [editableDisplayName, setEditableDisplayName] = useState('');

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setEditableDisplayName(currentUser.displayName);
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
        } else {
          console.log('No such document!');
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);
  const updateDisplayName = () => {
    if (user){
    user.updateProfile({
      displayName: editableDisplayName,
    }).then(() => {
      // Update successful
      console.log('Display name updated successfully');
    }).catch((error) => {
      // An error occurred
      console.error('Error updating display name:', error);
    });
  } else{
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
      <img className={css.profilePic} src={profilePicUrl} alt="Profile" /> {/* Use profilePicUrl directly */}
      <p className={css.email}>Email: {user.email}</p>
      <input className={css.username} value={editableDisplayName} onChange={(e) => setEditableDisplayName(e.target.value)}/>
      <button onClick={updateDisplayName}>Save Changes</button>
      <p className={css.password}>Change Password
      <Link to='/home'><button className={css.password}>Change Password</button></Link>

      </p>
      </div>
    </div>
  );
}

export default UserInfo;