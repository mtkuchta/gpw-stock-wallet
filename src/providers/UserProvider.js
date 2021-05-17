import React, { useState } from 'react';
import { userData } from '../assets/userData';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userData.user);
  const [deposit, setDeposit] = useState(userData.deposit);
  const [wallet, setWallet] = useState(userData.wallet);

  return <UserContext.Provider value={{ user, deposit, wallet }}>{children}</UserContext.Provider>;
};

export default UserProvider;
