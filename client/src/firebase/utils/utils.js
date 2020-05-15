import { auth } from '../index';

/**
 *  fixing firebase auth linking [facebook, google] popup login providers with the same account(email)
        1. signs in with Facebook (is ok)
        2. later, signs in with Google (is also fine)
        3. later, tries to sign in with Facebook
        Firebase returns this error: 'auth/account-exists-with-different-credential'
 * @param {string} email
 * @param {string} credential
 * @returns {object} user
 */
export async function LinkFacebookAndGoogle(email, credential) {
  const supportedSigninProviderIds = [
    auth.GoogleAuthProvider.PROVIDER_ID,
    auth.FacebookAuthProvider.PROVIDER_ID,
  ];

  let linkedProvider = null;

  const providers = await auth().fetchSignInMethodsForEmail(email);

  const providerId = providers.find(p =>
    supportedSigninProviderIds.includes(p)
  );

  if (!providerId) {
    throw new Error(
      `The account is linked to a provider that isn't supported.`
    );
  }

  if (providerId === auth.GoogleAuthProvider.PROVIDER_ID) {
    linkedProvider = new auth.GoogleAuthProvider();
  } else if (providerId === auth.FacebookAuthProvider.PROVIDER_ID) {
    linkedProvider = new auth.FacebookAuthProvider();
  } else {
    throw new Error(`No provider implemented for ${providerId}`);
  }

  linkedProvider.setCustomParameters({ login_hint: email });

  const { user } = await auth().signInWithPopup(linkedProvider);

  user.linkWithCredential(credential);

  return user;
}
