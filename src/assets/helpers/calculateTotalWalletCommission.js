export const calculateTotalWalletCommission = (wallet) => {
  if (Object.keys(wallet).length === 0) return 0;
  let totalCommission = 0;
  for (const value of Object.values(wallet)) {
    const positions = value.positions;
    let totalValue = 0;
    positions.map(({ commission }) => {
      return (totalValue += commission);
    });
    totalCommission += totalValue;
  }
  return totalCommission;
};
