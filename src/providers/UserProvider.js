import React, { useState } from 'react';
import { userData } from '../assets/userData';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userData.user);
  const [deposit, setDeposit] = useState(userData.deposit);
  const [wallet, setWallet] = useState(userData.wallet);

  const handleDepositOperations = (operation, value) => {
    if (operation === 'Withdrawal') {
      setDeposit({ ...deposit, amount: deposit.amount - Number(value) });
    } else {
      setDeposit({ ...deposit, amount: deposit.amount + Number(value) });
    }
  };

  return <UserContext.Provider value={{ user, deposit, wallet, handleDepositOperations }}>{children}</UserContext.Provider>;
};

export default UserProvider;
