import { calculateAveragePrice } from '../../assets/helpers/calculateAveragePrice';
import { getTotalPositionValue } from '../../assets/helpers/getTotalPositionValue';
import { calculateTotalVolume } from '../../assets/helpers/calculateTotalVolume';

export const createStockTableData = (stocks) => {
  const stocksTable = [];
  stocks.forEach((stock) => {
    const totalVolume = calculateTotalVolume(stock);
    const averagePrice = calculateAveragePrice(stock);
    const stockToTable = {
      name: stock.ticker,
      volume: totalVolume,
      averagePrice,
      index: stock.index,
      value: getTotalPositionValue(stock),
    };
    stocksTable.push(stockToTable);
  });

  return stocksTable;
};
