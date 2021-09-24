import { calculateAveragePrice } from '../../assets/helpers/calculateAveragePrice';
import { getTotalPositionValue } from '../../assets/helpers/getTotalPositionValue';
import { calculateTotalVolume } from '../../assets/helpers/calculateTotalVolume';
import { sortByTotalPositionsValue } from './sortByTotalPositionsValue';
import { calculateTotalStocksValue } from './calculateTotalStocksValue';

export const createStockTableData = (wallet) => {
  const stocksTable = [];
  const stocks = wallet ? Object.values(wallet).sort(sortByTotalPositionsValue) : [];
  const totalWalletValue = calculateTotalStocksValue(wallet);

  stocks.forEach((stock) => {
    const totalVolume = calculateTotalVolume(stock);
    const averagePrice = calculateAveragePrice(stock);
    const stockValue = getTotalPositionValue(stock);

    const stockToTable = {
      id: stock.ticker,
      ticker: stock.ticker.toUpperCase(),
      volume: totalVolume,
      averagePrice,
      index: stock.index,
      value: stockValue,
      walletPercent: `${((stockValue * 100) / totalWalletValue).toFixed(1)} %`,
    };
    stocksTable.push(stockToTable);
  });

  return stocksTable;
};
