import { createNewPosition } from './createNewPosition';

export const createNewStock = (data) => {
  return {
    companyName: data.companyName,
    index: data.index,
    positions: [createNewPosition(data)],
    ticker: data.ticker.toLowerCase(),
  };
};
