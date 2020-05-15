import { firestore } from '../index';

const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // Create new user document if it does not exist
  if (!snapShot.exists) {
    try {
      const { uid, displayName, email } = userAuth;
      await userRef.set({
        userId: uid,
        displayName,
        email,
        createdAt: new Date().toISOString(),
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  return userRef;
};
