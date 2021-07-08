export const calculateAbsoluteReward = (openPrice, volume, sellPrice, totalCommission) => {
  const absoluteReward = ((sellPrice * volume - totalCommission) / (openPrice * volume)) * 100 - 100;
  return absoluteReward.toFixed(1);
};
