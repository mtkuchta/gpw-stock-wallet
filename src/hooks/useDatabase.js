import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { createNewPosition } from '../assets/helpers/createNewPosition';
import { createNewStock } from '../assets/helpers/createNewStock';
import { createPositionToHistory } from '../assets/helpers/createPositionToHistory';
import { createUpdatedArchive } from '../assets/helpers/createUpdatedArchive';
import { updateDepositOperations } from '../assets/helpers/updateDepositOperations';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

const DatabaseContext = React.createContext({});

export const DatabaseProvider = ({ children }) => {
  const { user } = useAuth();
  const [deposit, setDeposit] = useState({ currency: 'PLN', amount: 0, operations: [] });
  const [wallet, setWallet] = useState({});
  const [archive, setArchive] = useState([]);
  const [currentYear, setCurrentYear] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const date = new Date();
    setCurrentYear(date.getFullYear());
  }, []);

  useEffect(() => {
    if (user) {
      const dbRef = database.ref(user.uid);
      dbRef.get().then((snapshot) => {
        if (snapshot.val()) setUserData(snapshot);
      });
      return;
    }
    setDeposit({});
    setWallet({});
    setArchive([]);
  }, [user]);

  useEffect(() => {
    if (user) {
      const userDataRef = database.ref(`${user.uid}`);
      const unsubscribe = userDataRef.on('value', (snapshot) => {
        if (snapshot) setUserData(snapshot);
      });
      return unsubscribe();
    }
  }, [user]);

  const setUserData = (snapshot) => {
    if (!snapshot.val()) return;
    if (snapshot.val().deposit) setDeposit(snapshot.val().deposit);
    if (snapshot.val().wallet) setWallet(snapshot.val().wallet);
    if (snapshot.val().archive) setArchive(snapshot.val().archive);
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
    database.ref(`${user.uid}/deposit/operations`).set(updateDepositOperations(deposit, operation, value));
  };

  const handleAddStocksToWallet = (data) => {
    const operationValue = Number(data.openPrice) * Number(data.volume) + Number(data.commission);

    if (wallet[data.ticker.toLowerCase()]) {
      addPositionToExistingTicker(data);
    } else {
      createNewTicker(data);
    }
    handleDepositOperations('Buy', operationValue);
  };

  const addPositionToExistingTicker = (data) => {
    const updatedPositions = [...wallet[data.ticker].positions];
    updatedPositions.push(createNewPosition(data, wallet[data.ticker]));
    database.ref(`${user.uid}/wallet/${data.ticker.toLowerCase()}/positions`).update(updatedPositions);
  };

  const createNewTicker = (data) => {
    database.ref(`${user.uid}/wallet/`).update({ [data.ticker.toLowerCase()]: createNewStock(data) });
  };

  const handleSellStocks = (ticker, sellVolume, positionToSell, operationValue) => {
    const positionToUpdate = wallet[ticker].positions[positionToSell];

    if (positionToUpdate.volume !== sellVolume) {
      updatePositionVolume(positionToUpdate, positionToSell, sellVolume, ticker);
      handleDepositOperations('Sell', operationValue);
      return;
    }

    if (wallet[ticker].positions.length === 1) {
      handleRemoveLastPosition(ticker);
      handleDepositOperations('Sell', operationValue);
      return;
    }

    handleRemovePosition(ticker, positionToSell);
    handleDepositOperations('Sell', operationValue);
  };

  const handleAddOperationToHistory = (ticker, positionToSell, sellVolume, sellPrice, sellDate, commission) => {
    const position = wallet[ticker].positions[positionToSell];
    database
      .ref(`${user.uid}/archive`)
      .set(
        createUpdatedArchive(
          archive,
          createPositionToHistory(ticker, wallet[ticker].companyName, sellVolume, sellPrice, sellDate, commission, position)
        )
      );
  };

  const updatePositionVolume = (positionToUpdate, positionIndex, sellVolume, ticker) => {
    const updatedVolume = positionToUpdate.volume - sellVolume;
    database.ref(`${user.uid}/wallet/${ticker}/positions/`).child(positionIndex).update({ volume: updatedVolume });
  };

  const handleRemoveLastPosition = (ticker) => {
    database.ref(`${user.uid}/wallet/${ticker}/`).remove();
    if (Object.keys(wallet).length === 1) handleEmptyWallet();
    history.push('/wallet');
  };

  const handleRemovePosition = (ticker, positionToSell) => {
    const updatedPositions = [...wallet[ticker].positions];
    updatedPositions.splice(positionToSell, 1);
    database.ref(`${user.uid}/wallet/${ticker}/`).update({ positions: updatedPositions });
  };

  const handleEmptyWallet = () => {
    setWallet({});
  };

  return (
    <DatabaseContext.Provider
      value={{
        deposit,
        wallet,
        archive,
        currentYear,
        handleDepositOperations,
        handleAddStocksToWallet,
        handleSellStocks,
        handleAddOperationToHistory,
        handleEmptyWallet,
      }}
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
