import React from 'react';
import './css/browsepage.css';
import Route1 from './Routes';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { UserContext } from "./usercontxt.jsx";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={user}>
    <Route1 />
  </UserContext.Provider>
);
}

export default App;
