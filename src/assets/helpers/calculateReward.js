export const calculateReward = (openPrice, volume, sellPrice, totalCommission) => {
  const reward = sellPrice * volume - openPrice * volume - totalCommission;
  return Number(reward.toFixed(1));
};
