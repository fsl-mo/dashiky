import { useState, useEffect } from 'react';
import { auth as firebaseAuth } from '../firebase/index';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};
const useFirebaseAuth = () => {
  const [auth, setAuth] = useState(INITIAL_STATE);

  useEffect(() => {
    const unSubscribeFromFirebaseAuth = firebaseAuth().onAuthStateChanged(
      user => {
        setAuth({ user, isAuthenticated: !!user });
      }
    );

    return () => {
      unSubscribeFromFirebaseAuth();
    };
  }, []);

  return {
    auth,
  };
};

export default useFirebaseAuth;
