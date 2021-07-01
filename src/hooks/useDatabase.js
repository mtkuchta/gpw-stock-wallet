import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { createNewPosition } from '../assets/helpers/createNewPosition';
import { createNewStock } from '../assets/helpers/createNewStock';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

const DatabaseContext = React.createContext({});

export const DatabaseProvider = ({ children }) => {
  const { user } = useAuth();
  const [deposit, setDeposit] = useState(0);
  const [wallet, setWallet] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (user) {
      const dbRef = database.ref(user.uid);
      dbRef.get().then((snapshot) => {
        setUserData(snapshot);
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const userDataRef = database.ref(`${user.uid}`);
      const unsubscribe = userDataRef.on('value', (snapshot) => {
        setUserData(snapshot);
      });
      return unsubscribe();
    }
  }, [user]);

  const setUserData = (snapshot) => {
    if (!snapshot) return;
    if (snapshot.val().deposit) setDeposit(snapshot.val().deposit);
    if (snapshot.val().wallet) setWallet(snapshot.val().wallet);
  };

  const handleDepositOperations = (operation, value) => {
    let newMargin = deposit.amount;
    const depositRef = database.ref(`${user.uid}/deposit`);
    if (operation === 'Withdrawal' || operation === 'Buy') {
      newMargin -= value;
    } else {
      newMargin += value;
    }
    depositRef.update({ amount: newMargin });
  };

  const handleAddStocksToWallet = (data) => {
    const operationValue = Number(data.openPrice) * Number(data.volume) + Number(data.commission);
    console.log(operationValue);
    if (wallet[data.ticker]) {
      const updatedPositions = [...wallet[data.ticker].positions];
      updatedPositions.push(createNewPosition(data, wallet[data.ticker]));
      database.ref(`${user.uid}/wallet/${data.ticker}/positions`).update(updatedPositions);
    } else {
      database.ref(`${user.uid}/wallet/`).update({ [data.ticker]: createNewStock(data) });
    }
    handleDepositOperations('Buy', operationValue);
  };

  const handleSellStocks = (ticker, sellVolume, positionToSell, operationValue) => {
    const positionToUpdate = wallet[ticker].positions[positionToSell];

    if (positionToUpdate.volume !== sellVolume) {
      const updatedVolume = positionToUpdate.volume - sellVolume;
      database.ref(`${user.uid}/wallet/${ticker}/positions/`).child(positionToSell).update({ volume: updatedVolume });
      handleDepositOperations('Sell', operationValue);
      return;
    }

    if (wallet[ticker].positions.length === 1) {
      database.ref(`${user.uid}/wallet/${ticker}/`).remove();
      handleDepositOperations('Sell', operationValue);
      history.push('/wallet');
      return;
    }

    const updatedPositions = [...wallet[ticker].positions];
    updatedPositions.splice(positionToSell, 1);
    database.ref(`${user.uid}/wallet/${ticker}/`).update({ positions: updatedPositions });
    handleDepositOperations('Sell', operationValue);
  };

  const handleAddOperationToHistory = (positionToSell, sellVolume, sellPrice, sellDate) => {};

  return (
    <DatabaseContext.Provider
      value={{ deposit, wallet, handleDepositOperations, handleAddStocksToWallet, handleSellStocks, handleAddOperationToHistory }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const userData = useContext(DatabaseContext);

  if (!userData) {
    throw Error('useDatabase needs to be used inside DatabaseContext');
  }
  return userData;
};
