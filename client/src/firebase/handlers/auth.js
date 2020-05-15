import { auth } from '../index';

import { LinkFacebookAndGoogle } from '../utils/utils';

export const login = (email, password) =>
  new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => resolve(user))
      .catch(err => {
        console.error('Error login user.', err);
        if (
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/wrong-password' ||
          err.code === 'auth/user-disabled'
        ) {
          reject(
            new Error(JSON.stringify({ signIn: 'Invalid email or password' }))
          );
        }
        reject(
          new Error(
            JSON.stringify({
              signIn: 'Oops! something went wrong, Please try again',
            })
          )
        );
      });
  });

export const signInWithGoogle = () =>
  new Promise((resolve, reject) => {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    provider.addScope('profile');
    provider.addScope('email');

    auth()
      .signInWithPopup(provider)
      .then(({ user }) => resolve(user))
      .catch(async err => {
        console.error('Error sign-in with Google.', err);

        if (
          err.email &&
          err.credential &&
          err.code === 'auth/account-exists-with-different-credential'
        ) {
          const user = await LinkFacebookAndGoogle(err.email, err.credential);

          return resolve(user);
        }
        if (err.code === 'auth/popup-closed-by-user') {
          reject(
            new Error(
              JSON.stringify({
                signIn: ' Sign in with Google failed',
              })
            )
          );
        }
        reject(
          new Error(
            JSON.stringify({
              general: 'Oops! something went wrong, Please try again',
            })
          )
        );
      });
  });

export const signInWithFacebook = () =>
  new Promise((resolve, reject) => {
    const provider = new auth.FacebookAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then(({ user }) => resolve(user))
      .catch(async err => {
        console.error('Error sign-in with Facebook.', err);

        if (
          err.email &&
          err.credential &&
          err.code === 'auth/account-exists-with-different-credential'
        ) {
          const user = await LinkFacebookAndGoogle(err.email, err.credential);

          return resolve(user);
        }
        if (err.code === 'auth/popup-closed-by-user') {
          reject(
            new Error(
              JSON.stringify({
                signIn: ' Sign in with Facebook failed',
              })
            )
          );
        }
        reject(
          new Error(
            JSON.stringify({
              general: 'Oops! something went wrong, Please try again',
            })
          )
        );
      });
  });

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      console.log('Signed out successfully ');
    });
};
