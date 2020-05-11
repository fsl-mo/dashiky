import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useFirebaseAuth = () => {
  const [auth, setAuth] = useState({
    user: null,
    error: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    const unSubscribeFromFirebaseAuth = firebase
      .auth()
      .onAuthStateChanged(user =>
        setAuth({ ...auth, user, error: false, isAuthenticated: true })
      );

    return () => {
      unSubscribeFromFirebaseAuth();
    };
  }, []);

  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result =>
        setAuth({
          ...auth,
          user: result.user,
          error: false,
          isAuthenticated: true,
        })
      )
      .catch(err => {
        setAuth({ ...auth, user: null, error: true, isAuthenticated: false });
        console.error('Error while signin with Google.', err);
      });
  };

  const SignOut = () => {
    firebase.auth().signOut();
  };
  return {
    auth,
    SignInWithGoogle,
    SignOut,
  };
};

export default useFirebaseAuth;
