import React, { useState, useContext, useEffect } from 'react';
import { authFirebase } from '../services/firebase';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    authFirebase
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
        setAuthError(error);
      });
  };

  const signIn = (email, password) => {
    authFirebase
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setAuthError(null);
        setUser(userCredential.user);
      })
      .catch((error) => {
        setAuthError(error);
      });
  };

  const signOut = () => {
    authFirebase.signOut();
  };

  return <AuthContext.Provider value={{ user, authError, signUp, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return auth;
};
