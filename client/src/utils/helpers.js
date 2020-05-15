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
