import React, { useState, useContext } from 'react';
import { authFirebase } from '../services/firebase';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signIn = (email, password) => {
    authFirebase
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {};

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return auth;
};
