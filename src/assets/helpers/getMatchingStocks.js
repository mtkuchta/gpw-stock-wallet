export const getMatchingStocks = (stocks, index) => {
  if (index === 'all') return stocks;
  const matchingStocks = stocks.filter((stock) => stock.index === index);
  return matchingStocks;
};
