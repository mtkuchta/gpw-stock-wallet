export const getMatchingStocks = (stocks, index) => {
  if (index === 'all' || index === undefined) return stocks;
  const matchingStocks = stocks.filter((stock) => stock.index === index);
  return matchingStocks;
};
