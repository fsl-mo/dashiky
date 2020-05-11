/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import firebase from '../firebase';

import { linkProviderCredentialsWithSameAccount } from '../utils/helpers';

const useFirebaseAuth = () => {
  const [auth, setAuth] = useState({
    user: null,
    error: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    const unSubscribeFromFirebaseAuth = firebase
      .auth()
      .onAuthStateChanged(user => {
        setAuth(a => ({ ...a, user, isAuthenticated: !!user }));
      });

    return () => {
      unSubscribeFromFirebaseAuth();
    };
  }, []);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result =>
        setAuth(a => ({
          ...a,
          user: result.user,
          error: false,
          isAuthenticated: true,
        }))
      )
      .catch(async err => {
        console.error('Error while sign-in with Google.', err);

        if (
          err.email &&
          err.credential &&
          err.code === 'auth/account-exists-with-different-credential'
        ) {
          try {
            const user = await linkProviderCredentialsWithSameAccount(
              err.email,
              err.credential
            );
            setAuth(a => ({ ...a, user, error: false, isAuthenticated: true }));
          } catch (error) {
            console.error('Error while linking providercredentials.', error);
          }
        } else {
          setAuth(a => ({
            ...a,
            user: null,
            error: true,
            isAuthenticated: false,
          }));
        }
      });
  };

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result =>
        setAuth(a => ({
          ...a,
          user: result.user,
          error: false,
          isAuthenticated: true,
        }))
      )
      .catch(async err => {
        console.error('Error while sign-in with Facebook.', err);

        if (
          err.email &&
          err.credential &&
          err.code === 'auth/account-exists-with-different-credential'
        ) {
          try {
            const user = await linkProviderCredentialsWithSameAccount(
              err.email,
              err.credential
            );
            setAuth(a => ({
              ...a,
              user,
              error: false,
              isAuthenticated: true,
            }));
          } catch (error) {
            console.error('Error while linking providercredentials.', error);
          }
        } else {
          setAuth({ ...auth, user: null, error: true, isAuthenticated: false });
        }
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Signed out successfully ');
      });
  };

  return {
    signInWithGoogle,
    signInWithFacebook,
    auth,
    signOut,
  };
};

export default useFirebaseAuth;
