import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { calculateTotalStocksValue } from '../assets/helpers/calculateTotalStocksValue';
import { calculateTotalWalletCommission } from '../assets/helpers/calculateTotalWalletCommission';
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
  const [deposit, setDeposit] = useState({ currency: 'PLN', operations: [] });
  const [wallet, setWallet] = useState({});
  const [archive, setArchive] = useState([]);
  const [dividends, setDividends] = useState({});
  const [currentYear, setCurrentYear] = useState(null);
  const [freeMargin, setFreeMargin] = useState(0);
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

  useEffect(() => {
    if (deposit.operations) setFreeMargin(calculateFreeMargin());
  }, [deposit, archive, wallet]);

  const setUserData = (snapshot) => {
    if (!snapshot.val()) return;
    if (snapshot.val().deposit) setDeposit(snapshot.val().deposit);
    if (snapshot.val().wallet) setWallet(snapshot.val().wallet);
    if (snapshot.val().archive) setArchive(snapshot.val().archive);
    if (snapshot.val().dividends) setDividends(snapshot.val().dividends);
  };

  const calculateFreeMargin = () => {
    const sumOfPayments = deposit.operations.reduce((prev, next) => {
      return prev + next;
    }, 0);

    const archiveReward = archive.reduce((prev, next) => {
      const itemValue = next.closePrice * next.volume - next.openPrice * next.volume - next.totalCommission;
      return prev + itemValue;
    }, 0);

    const walletValue = calculateTotalStocksValue(wallet);
    const totalWalletCommission = calculateTotalWalletCommission(wallet);
    const sumOfDividends = calculateSumOfDividends(dividends);
    const freeMargin = sumOfPayments + archiveReward + sumOfDividends - walletValue - totalWalletCommission;
    return freeMargin.toFixed(1);
  };

  const calculateSumOfDividends = (dividends) => {
    let sumOfDividends = 0;
    for (const [__, value] of Object.entries(dividends)) {
      sumOfDividends += value.netAmount;
    }
    return sumOfDividends;
  };

  const handleDepositOperations = (operation, value) => {
    database.ref(`${user.uid}/deposit/operations`).set(updateDepositOperations(deposit, operation, value));
  };

  const handleAddStocksToWallet = (data) => {
    if (wallet[data.ticker.toLowerCase()]) {
      addPositionToExistingTicker(data);
    } else {
      createNewTicker(data);
    }
  };

  const addPositionToExistingTicker = (data) => {
    const updatedPositions = [...wallet[data.ticker.toLowerCase()].positions];
    updatedPositions.push(createNewPosition(data, wallet[data.ticker]));

    database.ref(`${user.uid}/wallet/${data.ticker.toLowerCase()}/positions`).update(updatedPositions);
  };

  const createNewTicker = (data) => {
    database.ref(`${user.uid}/wallet/`).update({ [data.ticker.toLowerCase()]: createNewStock(data) });
  };

  const handleSellStocks = (ticker, sellVolume, positionToSell) => {
    const positionToUpdate = wallet[ticker].positions[positionToSell];
    if (positionToUpdate.volume !== sellVolume) {
      updatePositionVolume(positionToUpdate, positionToSell, sellVolume, ticker);
      return;
    }
    if (wallet[ticker].positions.length === 1) {
      handleRemoveLastPosition(ticker);
      return;
    }
    handleRemovePosition(ticker, positionToSell);
  };

  const handleSellAllPositions = (ticker) => {
    handleRemoveLastPosition(ticker);
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

  const handleAddPositionToHistory = (position) => {
    database.ref(`${user.uid}/archive`).set(createUpdatedArchive(archive, position));
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

  const handleAddDividend = (data) => {
    database.ref(`${user.uid}/dividends/`).update({ [data.id]: data.dividend });
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
        freeMargin,
        currentYear,
        dividends,
        handleDepositOperations,
        handleAddStocksToWallet,
        handleSellStocks,
        handleAddOperationToHistory,
        handleAddPositionToHistory,
        handleEmptyWallet,
        handleSellAllPositions,
        handleAddDividend,
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
