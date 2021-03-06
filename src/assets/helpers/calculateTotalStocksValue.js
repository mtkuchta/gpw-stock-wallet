export const calculateTotalStocksValue = (wallet) => {
  if (Object.keys(wallet).length === 0) return 0;
  let walletValue = 0;
  for (const value of Object.values(wallet)) {
    const positions = value.positions;
    let totalValue = 0;
    positions.map(({ openPrice, volume }) => {
      return (totalValue += openPrice.toFixed(2) * volume);
    });
    walletValue += totalValue;
  }
  return walletValue.toFixed(0);
};
