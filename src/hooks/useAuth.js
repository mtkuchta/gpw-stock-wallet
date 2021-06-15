import React, { useState, useContext, useEffect } from 'react';
import { authFirebase, database } from '../services/firebase';
import { userData } from '../assets/userData';

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

  const signUp = async (email, password, userName, accountBalance) => {
    await authFirebase
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setAuthError(error);
      });
    await createUserName(userName);
    await createUserInDatabase(accountBalance);
  };

  const createUserName = async (userName) => {
    await authFirebase.currentUser.updateProfile({ displayName: userName });
  };

  const createUserInDatabase = (accountBalance) => {
    const user = authFirebase.currentUser;
    const userRef = database.ref(user.uid);
    userRef.set({ deposit: { currency: 'PLN', amount: accountBalance ? accountBalance : 0 } });
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
