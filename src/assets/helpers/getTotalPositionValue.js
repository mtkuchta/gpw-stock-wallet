export const getTotalPositionValue = (position) => {
  const PositionsAmount = [];
  position.positions.map((position) => {
    PositionsAmount.push(Math.floor(position.openPrice * position.volume));
  });
  return PositionsAmount.reduce((total, value) => total + value);
};
