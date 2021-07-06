export const createPositionToHistory = (ticker, companyName, sellVolume, sellPrice, sellDate, commission, position) => {
  return {
    ticker,
    id: Date.now(),
    companyName: companyName,
    openDate: position.openDate,
    closeDate: sellDate,
    volume: sellVolume,
    openPrice: position.openPrice,
    closePrice: sellPrice,
    totalCommission: commission + position.commission * (sellVolume / position.volume),
  };
};
