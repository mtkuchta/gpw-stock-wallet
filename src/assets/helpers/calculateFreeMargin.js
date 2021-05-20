export const calculateFreeMargin = (deposit, wallet) => {
  if (Object.keys(wallet).length === 0) return deposit;
  let walletValue = 0;
  for (const [key, value] of Object.entries(wallet)) {
    const positions = value.positions;
    let totalValue = 0;
    positions.map(({ openPrice, volume, commission }) => {
      totalValue += openPrice * volume + commission;
    });
    walletValue += totalValue;
  }
  return deposit - walletValue.toFixed(0);
};
