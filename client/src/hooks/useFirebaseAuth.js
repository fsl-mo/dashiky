/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import firebase from '../firebase';

import { linkProviderCredentialsWithSameAccount } from '../utils/helpers';

const INITIAL_STATE = {
  user: null,
  error: null,
  isAuthenticated: false,
};
const useFirebaseAuth = () => {
  const [auth, setAuth] = useState(INITIAL_STATE);

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

  const signInWithEmailAndPassword = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data =>
        setAuth({ user: data.user, error: null, isAuthenticated: true })
      )
      .catch(async err => {
        console.error('Error while sign-in with email and password.', err);
        if (
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/wrong-password' ||
          err.code === 'auth/user-disabled'
        ) {
          return setAuth(a => ({
            ...a,
            user: null,
            error: { ...a.error, signIn: 'Invalid email or password' },
            isAuthenticated: false,
          }));
        }
        setAuth(a => ({
          ...a,
          user: null,
          error: {
            ...a.error,
            signIn: 'Oops! something went wrong, Please try again',
          },
          isAuthenticated: false,
        }));
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result =>
        setAuth({ user: result.user, error: null, isAuthenticated: true })
      )
      .catch(async err => {
        console.error('Error while sign-in with Google.', err);

        if (
          err.emails &&
          err.credentials &&
          err.codes === 'auth/account-exists-with-different-credential'
        ) {
          try {
            const user = await linkProviderCredentialsWithSameAccount(
              err.email,
              err.credential
            );
            setAuth(a => ({ ...a, user, error: null, isAuthenticated: true }));
          } catch (error) {
            console.error('Error while linking providercredentials.', error);
            setAuth({ ...INITIAL_STATE, error: err });
          }
        } else {
          setAuth({ ...INITIAL_STATE, error: err });
        }
      });
  };

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result =>
        setAuth({ user: result.user, error: null, isAuthenticated: true })
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
              error: null,
              isAuthenticated: true,
            }));
          } catch (error) {
            console.error('Error while linking providercredentials.', error);
            setAuth({ ...INITIAL_STATE, error: err });
          }
        } else {
          setAuth({ ...INITIAL_STATE, error: err });
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

  const clearAuthErrors = () => {
    setAuth(a => ({
      ...a,
      error: null,
    }));
  };

  return {
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmailAndPassword,
    clearAuthErrors,
    auth,
    signOut,
  };
};

export default useFirebaseAuth;
