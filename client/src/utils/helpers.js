import validator from 'validator';
import firebase from '../firebase';

export const validateLoginData = (email, password) => {
  const error = {};

  if (validator.isEmpty(email)) error.email = 'Must not be empty';
  else if (!validator.isEmail(email))
    error.email = 'Must be a valid email address';
  if (validator.isEmpty(password)) error.password = 'Must not be empty';

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

/**
 *  fixing firebase auth to link multiple popup sign-in providers with the same account(email)
        1. signs in with Facebook (is ok)
        2. later, signs in with Google (is also fine)
        3. later, tries to sign in with Facebook
        Firebase returns this error: 'auth/account-exists-with-different-credential'
 * @param {string} email
 * @param {string} credential
 * @returns {object} user
 */
export async function linkProviderCredentialsWithSameAccount(
  email,
  credential
) {
  const supportedSigninProviderIds = [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ];

  let linkedProvider = null;

  const providers = await firebase.auth().fetchSignInMethodsForEmail(email);

  const providerId = providers.find(p =>
    supportedSigninProviderIds.includes(p)
  );

  if (!providerId) {
    throw new Error(
      `Your account is linked to a provider that isn't supported.`
    );
  }

  if (providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
    linkedProvider = new firebase.auth.GoogleAuthProvider();
  } else if (providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID) {
    linkedProvider = new firebase.auth.FacebookAuthProvider();
  } else {
    throw new Error(`No provider implemented for ${providerId}`);
  }

  linkedProvider.setCustomParameters({ login_hint: email });

  const { user } = await firebase.auth().signInWithPopup(linkedProvider);

  user.linkWithCredential(credential);

  return user;
}
