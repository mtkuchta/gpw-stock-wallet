export const calculateAveragePrice = (stock) => {
  const value = stock.positions.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.openPrice * currentValue.volume;
  }, 0);
  const volume = stock.positions.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.volume;
  }, 0);

  return Number((value / volume).toFixed(2));
};
